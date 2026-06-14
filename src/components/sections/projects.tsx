"use client";

import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { projects, projectsDescription } from "@/lib/data";
import { FadeIn } from "@/components/effects/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GitHubIcon } from "@/components/icons/social-icons";

export function Projects() {
  const prefersReducedMotion = useReducedMotion();
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  const ProjectCard = ({
    project,
    index,
    featured: isFeatured = false,
  }: {
    project: (typeof projects)[0];
    index: number;
    featured?: boolean;
  }) => (
    <FadeIn key={project.title} delay={index * 0.1}>
      <motion.div
        whileHover={
          prefersReducedMotion ? {} : { y: -8, transition: { duration: 0.3 } }
        }
        className="h-full"
      >
        <Card
          className={`group gradient-border h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 ${
            isFeatured ? "ring-1 ring-indigo-500/30" : ""
          }`}
        >
          <CardContent className="flex h-full flex-col p-6">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/20 to-blue-500/20">
                  {isFeatured ? (
                    <Star className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                  ) : (
                    <span className="text-sm font-bold gradient-text">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  )}
                </div>
                {isFeatured && (
                  <Badge variant="gradient" className="text-xs">
                    Featured Project
                  </Badge>
                )}
              </div>
            </div>

            <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="gradient" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className="h-3.5 w-3.5" />
                  GitHub
                </Link>
              </Button>
              {"liveUrl" in project && !!project.liveUrl && (
                <Button variant="ghost" size="sm" asChild>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Demo
                  </Link>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </FadeIn>
  );

  return (
    <section
      id="projects"
      className="section-padding"
      aria-labelledby="projects-heading"
    >
      <div className="container-width">
        <FadeIn>
          <div className="mb-12 text-center sm:mb-16">
            <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
              Projects
            </p>
            <h2
              id="projects-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Featured{" "}
              <span className="gradient-text">Work</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {projectsDescription}
            </p>
          </div>
        </FadeIn>

        {featured && (
          <div className="mb-6">
            <ProjectCard project={featured} index={0} featured />
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2">
          {others.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
