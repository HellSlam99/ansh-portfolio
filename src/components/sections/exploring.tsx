"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { currentlyExploring } from "@/lib/data";
import { FadeIn } from "@/components/effects/fade-in";
import { Card, CardContent } from "@/components/ui/card";

export function Exploring() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="exploring"
      className="section-padding"
      aria-labelledby="exploring-heading"
    >
      <div className="container-width">
        <FadeIn>
          <div className="mb-12 text-center sm:mb-16">
            <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
              Learning
            </p>
            <h2
              id="exploring-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              What I&apos;m Currently{" "}
              <span className="gradient-text">Exploring</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {currentlyExploring.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <motion.div
                whileHover={
                  prefersReducedMotion ? {} : { y: -6, transition: { duration: 0.25 } }
                }
                className="h-full"
              >
                <Card className="group h-full transition-shadow hover:shadow-lg hover:shadow-indigo-500/10">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/20 to-blue-500/20 transition-transform group-hover:scale-105">
                      <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
