"use client";

import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { useTheme } from "next-themes";
import { ExternalLink, GitBranch, Star } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { FadeIn } from "@/components/effects/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GitHubIcon } from "@/components/icons/social-icons";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface GitHubData {
  user: {
    login: string;
    name: string | null;
    avatar_url: string;
    html_url: string;
    public_repos: number;
    followers: number;
    bio: string | null;
  };
  repos: {
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    language: string | null;
  }[];
  languages: { name: string; percentage: number }[];
}

const languageColors: Record<string, string> = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Java: "#b07219",
  PHP: "#4F5D95",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
};

export function GitHubSection() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);
  const prefersReducedMotion = useReducedMotion();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const [githubRes, contribRes] = await Promise.all([
          fetch("/api/github"),
          fetch(
            `https://github-contributions-api.jogruber.de/v4/${siteConfig.githubUsername}?y=last`
          ),
        ]);

        if (githubRes.ok) {
          setData(await githubRes.json());
        }

        if (contribRes.ok) {
          const contribData = await contribRes.json();
          setContributions(contribData.contributions ?? []);
        }
      } catch {
        /* graceful fallback */
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <section
      id="github"
      className="section-padding"
      aria-labelledby="github-heading"
    >
      <div className="container-width">
        <FadeIn>
          <div className="mb-12 text-center sm:mb-16">
            <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
              GitHub
            </p>
            <h2
              id="github-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Open Source &{" "}
              <span className="gradient-text">Contributions</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-3">
          <FadeIn className="lg:col-span-2">
            <Card className="overflow-hidden">
              <CardContent className="p-4 sm:p-6">
                <h3 className="mb-4 text-sm font-medium text-muted-foreground">
                  Contribution Activity
                </h3>
                {loading ? (
                  <div className="h-32 animate-pulse rounded-lg bg-muted" />
                ) : contributions.length > 0 ? (
                  <div className="overflow-x-auto pb-2">
                    <ActivityCalendar
                      data={contributions.map((d) => ({
                        date: d.date,
                        count: d.count,
                        level: Math.min(d.level, 4) as 0 | 1 | 2 | 3 | 4,
                      }))}
                      theme={{
                        light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                        dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                      }}
                      colorScheme={mounted && resolvedTheme === "light" ? "light" : "dark"}
                      blockSize={11}
                      blockMargin={3}
                      fontSize={12}
                      labels={{
                        totalCount: "{{count}} contributions in the last year",
                      }}
                    />
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Contribution data unavailable. Visit my GitHub profile below.
                  </p>
                )}
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="h-full">
              <CardContent className="flex h-full flex-col p-6">
                {data?.user && (
                  <div className="mb-6 flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={data.user.avatar_url}
                      alt={data.user.name ?? data.user.login}
                      className="h-16 w-16 rounded-full border border-border"
                    />
                    <div>
                      <p className="font-semibold">{data.user.name ?? data.user.login}</p>
                      <p className="text-sm text-muted-foreground">@{data.user.login}</p>
                    </div>
                  </div>
                )}
                <div className="mb-6 grid grid-cols-2 gap-4 text-center">
                  <div className="rounded-lg bg-muted/50 p-3">
                    <p className="text-lg font-bold">{data?.user.public_repos ?? "—"}</p>
                    <p className="text-xs text-muted-foreground">Repositories</p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-3">
                    <p className="text-lg font-bold">{data?.user.followers ?? "—"}</p>
                    <p className="text-xs text-muted-foreground">Followers</p>
                  </div>
                </div>
                {data?.languages && data.languages.length > 0 && (
                  <div className="mb-6">
                    <h3 className="mb-3 text-sm font-medium">Most Used Languages</h3>
                    <div className="space-y-2">
                      {data.languages.map((lang) => (
                        <div key={lang.name}>
                          <div className="mb-1 flex justify-between text-xs">
                            <span>{lang.name}</span>
                            <span className="text-muted-foreground">{lang.percentage}%</span>
                          </div>
                          <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                            <motion.div
                              className="h-full rounded-full"
                              style={{
                                backgroundColor: languageColors[lang.name] ?? "#6366f1",
                              }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${lang.percentage}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <Button variant="gradient" className="mt-auto w-full" asChild>
                  <Link
                    href={`https://github.com/${siteConfig.githubUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    View GitHub Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {data?.repos && data.repos.length > 0 && (
          <FadeIn delay={0.2} className="mt-6">
            <h3 className="mb-4 text-sm font-medium tracking-widest text-primary uppercase">
              Top Repositories
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.repos.map((repo, index) => (
                <motion.div
                  key={repo.name}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={prefersReducedMotion ? {} : { y: -4 }}
                >
                  <Card className="group h-full transition-shadow hover:shadow-lg hover:shadow-indigo-500/10">
                    <CardContent className="flex h-full flex-col p-5">
                      <div className="mb-2 flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <GitBranch className="h-4 w-4 shrink-0 text-primary" />
                          <span className="truncate font-medium">{repo.name}</span>
                        </div>
                        <Link
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
                          aria-label={`Open ${repo.name} on GitHub`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </div>
                      <p className="mb-3 flex-1 text-sm text-muted-foreground line-clamp-2">
                        {repo.description ?? "No description available."}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        {repo.language && (
                          <Badge variant="outline" className="text-xs">
                            {repo.language}
                          </Badge>
                        )}
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {repo.stargazers_count}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
