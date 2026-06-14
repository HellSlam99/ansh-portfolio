"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillCategories, skillsDescription } from "@/lib/data";
import { FadeIn } from "@/components/effects/fade-in";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="section-padding"
      aria-labelledby="skills-heading"
    >
      <div className="container-width">
        <FadeIn>
          <div className="mb-12 text-center sm:mb-16">
            <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
              Skills
            </p>
            <h2
              id="skills-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Technologies I{" "}
              <span className="gradient-text">Work With</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {skillsDescription}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <FadeIn key={category.title} delay={catIndex * 0.08}>
              <Card className="group h-full transition-colors hover:border-indigo-500/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div
                    className="flex flex-wrap gap-2"
                    role="list"
                    aria-label={`${category.title} skills`}
                  >
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        role="listitem"
                        initial={
                          prefersReducedMotion ? {} : { opacity: 0, scale: 0.85 }
                        }
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: prefersReducedMotion ? 0 : index * 0.04,
                          duration: 0.3,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={
                          prefersReducedMotion ? {} : { scale: 1.05, y: -2 }
                        }
                      >
                        <Badge variant="gradient" className="text-xs">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
