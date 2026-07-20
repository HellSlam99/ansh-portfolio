"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/lib/data";
import { FadeIn } from "@/components/effects/fade-in";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="section-padding"
      aria-labelledby="experience-heading"
    >
      <div className="container-width">
        <FadeIn>
          <div className="mb-12 text-center sm:mb-16">
            <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
              Experience
            </p>
            <h2
              id="experience-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              My Career{" "}
              <span className="gradient-text">Journey</span>
            </h2>
          </div>
        </FadeIn>

        <div className="relative mx-auto max-w-3xl">
          <motion.div
            className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-indigo-500/50 via-blue-500/30 to-transparent sm:left-1/2 sm:-translate-x-px"
            initial={prefersReducedMotion ? {} : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            aria-hidden="true"
          />

          {experience.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <div
                className={`relative mb-8 flex flex-col sm:mb-12 sm:flex-row ${
                  index % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden sm:block sm:w-1/2" />

                <motion.div
                  className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-indigo-500 bg-background sm:left-1/2"
                  initial={prefersReducedMotion ? {} : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                  aria-hidden="true"
                />

                <div
                  className={`ml-10 sm:ml-0 sm:w-1/2 ${
                    index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                  }`}
                >
                  <div className="glass rounded-xl p-6 transition-colors hover:border-indigo-500/20">
                    <time className="text-sm font-medium text-primary">
                      {item.period}
                    </time>
                    <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {item.company}
                    </p>
                    <ul
                      className={`mt-4 space-y-2 text-left ${
                        index % 2 === 0 ? "sm:text-right" : ""
                      }`}
                    >
                      {item.responsibilities.map((resp) => (
                        <motion.li
                          key={resp.text}
                          initial={
                            prefersReducedMotion
                              ? {}
                              : { opacity: 0, x: index % 2 === 0 ? 12 : -12 }
                          }
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.05 }}
                          className={`flex gap-2 text-sm leading-relaxed text-muted-foreground ${
                            index % 2 === 0 ? "sm:flex-row-reverse" : ""
                          }`}
                        >
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                            aria-hidden="true"
                          />
                          <span>
                            {resp.text}
                            {resp.highlight && (
                              <span className="ml-2 inline-block rounded-md bg-indigo-500/10 px-2 py-0.5 text-xs font-semibold text-primary">
                                {resp.highlight}
                              </span>
                            )}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                    <div
                      className={`mt-4 flex flex-wrap gap-2 ${
                        index % 2 === 0 ? "sm:justify-end" : ""
                      }`}
                    >
                      {item.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
