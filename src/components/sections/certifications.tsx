"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { certifications } from "@/lib/data";
import { FadeIn } from "@/components/effects/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Certifications() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="certifications"
      className="section-padding"
      aria-labelledby="certifications-heading"
    >
      <div className="container-width">
        <FadeIn>
          <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:mb-16 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
                Certifications
              </p>
              <h2
                id="certifications-heading"
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Professional{" "}
                <span className="gradient-text">Credentials</span>
              </h2>
            </div>
            <div className="hidden gap-2 sm:flex">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll certifications left"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll certifications right"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </FadeIn>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          role="list"
          aria-label="Certifications carousel"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              role="listitem"
              className="w-[280px] shrink-0 snap-start sm:w-[320px]"
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={prefersReducedMotion ? {} : { y: -4 }}
            >
              <Card className="group h-full transition-colors hover:border-indigo-500/20">
                <CardContent className="flex h-full flex-col items-start gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 transition-transform group-hover:scale-105">
                    <Award className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold leading-snug">{cert.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
