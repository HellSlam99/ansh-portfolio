"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Link from "next/link";
import { siteConfig, typingTexts, stats } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/effects/fade-in";
import { AnimatedCounter } from "@/components/effects/animated-counter";

export function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(typingTexts[0]);
      return;
    }

    const currentText = typingTexts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
          if (displayText.length === currentText.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentText.substring(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % typingTexts.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, prefersReducedMotion]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center section-padding pt-24"
      aria-label="Hero"
    >
      <div className="container-width w-full">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn delay={0.1}>
            <p className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase sm:text-base">
              Hello, I&apos;m
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {siteConfig.name.split(" ")[0]}{" "}
              <span className="gradient-text">
                {siteConfig.name.split(" ")[1]}
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-6 h-8 sm:h-10">
              <p className="text-xl font-medium text-muted-foreground sm:text-2xl md:text-3xl">
                <span className="gradient-text">{displayText}</span>
                {!prefersReducedMotion && (
                  <motion.span
                    className="ml-1 inline-block h-6 w-0.5 bg-primary sm:h-8"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    aria-hidden="true"
                  />
                )}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {siteConfig.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="gradient"
                size="lg"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <Link
                  href={siteConfig.resumePath}
                  download="Ansh_Garg_Resume.pdf"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold sm:text-3xl md:text-4xl">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="gradient-text"
                    />
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.8} className="mt-16 flex justify-center">
          <button
            onClick={() => scrollToSection("about")}
            className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Scroll to about section"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
            </motion.div>
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
