"use client";

import { useEffect, useState, useCallback } from "react";
import { Command } from "cmdk";
import {
  Award,
  Briefcase,
  Code2,
  FolderGit2,
  Home,
  Mail,
  Search,
  Terminal,
  User,
} from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  home: Home,
  about: User,
  skills: Code2,
  experience: Briefcase,
  projects: FolderGit2,
  github: FolderGit2,
  certifications: Award,
  contact: Mail,
  terminal: Terminal,
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggle();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [toggle]);

  const navigate = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const extraLinks = [
    { href: "#terminal", label: "Terminal" },
    { href: "#exploring", label: "Currently Exploring" },
  ];

  const allLinks = [
    ...navLinks,
    ...extraLinks.filter((l) => !navLinks.some((n) => n.href === l.href)),
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-50 hidden items-center gap-2 rounded-lg border border-border bg-background/80 px-3 py-2 text-xs text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground sm:flex"
        aria-label="Open command palette"
      >
        <Search className="h-3.5 w-3.5" />
        <span>Search</span>
        <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px]">
          Ctrl K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Command palette"
        className={cn(
          "fixed left-1/2 top-[20%] z-[101] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2",
          "rounded-xl border border-border glass shadow-2xl overflow-hidden",
          "animate-in fade-in-0 zoom-in-95"
        )}
      >
        <div className="flex items-center border-b border-border px-4">
          <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
          <Command.Input
            placeholder="Search sections..."
            className="flex h-12 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <Command.List className="max-h-72 overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
            No results found.
          </Command.Empty>
          <Command.Group heading="Navigation">
            {allLinks.map((link) => {
              const Icon = iconMap[link.href.replace("#", "")] ?? Home;
              return (
                <Command.Item
                  key={link.href}
                  value={link.label}
                  onSelect={() => navigate(link.href)}
                  className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-accent/10"
                >
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  {link.label}
                </Command.Item>
              );
            })}
          </Command.Group>
          <Command.Group heading="Actions">
            <Command.Item
              value="GitHub Profile"
              onSelect={() => {
                setOpen(false);
                window.open(`https://github.com/${siteConfig.githubUsername}`, "_blank");
              }}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-accent/10"
            >
              <FolderGit2 className="h-4 w-4 text-muted-foreground" />
              Open GitHub Profile
            </Command.Item>
            <Command.Item
              value="Download Resume"
              onSelect={() => {
                setOpen(false);
                window.open(siteConfig.resumePath, "_blank");
              }}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-accent/10"
            >
              <Briefcase className="h-4 w-4 text-muted-foreground" />
              Download Resume
            </Command.Item>
            <Command.Item
              value="Email"
              onSelect={() => {
                setOpen(false);
                window.location.href = `mailto:${siteConfig.email}`;
              }}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-accent/10"
            >
              <Mail className="h-4 w-4 text-muted-foreground" />
              Send Email
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  );
}
