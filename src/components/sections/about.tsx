import { MapPin } from "lucide-react";
import { aboutContent, siteConfig } from "@/lib/data";
import { FadeIn } from "@/components/effects/fade-in";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section
      id="about"
      className="section-padding"
      aria-labelledby="about-heading"
    >
      <div className="container-width">
        <FadeIn>
          <div className="mb-12 text-center sm:mb-16">
            <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
              About Me
            </p>
            <h2
              id="about-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {aboutContent.heading}{" "}
              <span className="gradient-text">{aboutContent.headingAccent}</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <FadeIn direction="left" className="lg:col-span-2">
            <Card className="gradient-border h-full overflow-hidden">
              <CardContent className="flex h-full flex-col justify-center p-8">
                <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 sm:h-40 sm:w-40">
                  <span className="text-4xl font-bold gradient-text sm:text-5xl">
                    {siteConfig.initials}
                  </span>
                </div>
                <h3 className="text-center text-xl font-semibold">
                  {siteConfig.name}
                </h3>
                <p className="mt-1 text-center text-sm text-muted-foreground">
                  {siteConfig.title}
                </p>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.location}
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn direction="right" delay={0.1} className="lg:col-span-3">
            <div className="flex h-full flex-col justify-center space-y-6">
              {aboutContent.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-muted-foreground sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
