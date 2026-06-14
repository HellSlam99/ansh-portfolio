import Link from "next/link";
import { Mail } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons/social-icons";

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  twitter: XIcon,
  mail: Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/50" role="contentinfo">
      <div className="container-width section-padding !py-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold">
              <span className="gradient-text">{siteConfig.name}</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {siteConfig.title} · {siteConfig.location}
            </p>
          </div>

          <div className="flex items-center gap-4" aria-label="Social links">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.icon !== "mail" ? "_blank" : undefined}
                  rel={link.icon !== "mail" ? "noopener noreferrer" : undefined}
                  className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {siteConfig.name}. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
