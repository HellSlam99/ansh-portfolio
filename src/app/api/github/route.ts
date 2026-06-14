import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/data";

export const revalidate = 3600;

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
}

export async function GET() {
  try {
    const headers = {
      Accept: "application/vnd.github+json",
      ...(process.env.GITHUB_TOKEN
        ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
        : {}),
    };

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${siteConfig.githubUsername}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://api.github.com/users/${siteConfig.githubUsername}/repos?sort=updated&per_page=100`,
        { headers, next: { revalidate: 3600 } }
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return NextResponse.json({ error: "Failed to fetch GitHub data" }, { status: 502 });
    }

    const user = await userRes.json();
    const repos: GitHubRepo[] = await reposRes.json();

    const filteredRepos = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6);

    const languageCounts: Record<string, number> = {};
    const topRepos = filteredRepos.slice(0, 6);

    await Promise.all(
      topRepos.map(async (repo) => {
        const langRes = await fetch(
          `https://api.github.com/repos/${siteConfig.githubUsername}/${repo.name}/languages`,
          { headers, next: { revalidate: 3600 } }
        );
        if (langRes.ok) {
          const langs: Record<string, number> = await langRes.json();
          Object.entries(langs).forEach(([lang, bytes]) => {
            languageCounts[lang] = (languageCounts[lang] || 0) + bytes;
          });
        }
      })
    );

    const totalBytes = Object.values(languageCounts).reduce((a, b) => a + b, 0);
    const languages = Object.entries(languageCounts)
      .map(([name, bytes]) => ({
        name,
        percentage: totalBytes > 0 ? Math.round((bytes / totalBytes) * 100) : 0,
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 8);

    return NextResponse.json({
      user: {
        login: user.login,
        name: user.name,
        avatar_url: user.avatar_url,
        html_url: user.html_url,
        public_repos: user.public_repos,
        followers: user.followers,
        bio: user.bio,
      },
      repos: filteredRepos.map((repo) => ({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        stargazers_count: repo.stargazers_count,
        language: repo.language,
      })),
      languages,
    });
  } catch {
    return NextResponse.json({ error: "GitHub fetch failed" }, { status: 500 });
  }
}
