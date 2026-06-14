"use client";

import { useState } from "react";
import { Check, Copy, Loader2, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { contactCards, siteConfig } from "@/lib/data";
import { FadeIn } from "@/components/effects/fade-in";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social-icons";
import { cn } from "@/lib/utils";

const iconMap = {
  mail: Mail,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  location: MapPin,
};

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formState.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fill in all required fields correctly.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${siteConfig.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            message: formState.message,
            _subject: `Portfolio Contact from ${formState.name}`,
            _captcha: "false",
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to send");

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormState({ name: "", email: "", message: "" });
      setErrors({});
    } catch {
      toast.error("Something went wrong. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(label);
      toast.success(`${label} copied to clipboard`);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <section
      id="contact"
      className="section-padding"
      aria-labelledby="contact-heading"
    >
      <div className="container-width">
        <FadeIn>
          <div className="mb-12 text-center sm:mb-16">
            <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
              Contact
            </p>
            <h2
              id="contact-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Together</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Open to SDET, QA Automation and Python Developer opportunities.
              Send a message and I&apos;ll respond promptly.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <FadeIn direction="left">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <input
                      id="name"
                      type="text"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className={cn(
                        "flex h-10 w-full rounded-lg border bg-background/50 px-3 py-2 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        errors.name ? "border-destructive" : "border-input"
                      )}
                      placeholder="Your name"
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <input
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className={cn(
                        "flex h-10 w-full rounded-lg border bg-background/50 px-3 py-2 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        errors.email ? "border-destructive" : "border-input"
                      )}
                      placeholder="your@email.com"
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className={cn(
                        "flex w-full resize-none rounded-lg border bg-background/50 px-3 py-2 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        errors.message ? "border-destructive" : "border-input"
                      )}
                      placeholder="Tell me about the role or opportunity..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-destructive">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    variant="gradient"
                    className="w-full sm:w-auto"
                    disabled={loading}
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactCards.map((card) => {
                const Icon = iconMap[card.icon as keyof typeof iconMap];
                return (
                  <Card
                    key={card.label}
                    className="group transition-colors hover:border-indigo-500/20"
                  >
                    <CardContent className="flex items-start gap-4 p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/20 to-blue-500/20">
                        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-medium">{card.label}</h3>
                        {card.href ? (
                          <a
                            href={card.href}
                            target={card.icon !== "mail" && card.icon !== "location" ? "_blank" : undefined}
                            rel={
                              card.icon !== "mail" && card.icon !== "location"
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="mt-1 block truncate text-sm text-muted-foreground transition-colors hover:text-primary"
                          >
                            {card.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm text-muted-foreground">
                            {card.value}
                          </p>
                        )}
                      </div>
                      {card.copyable && (
                        <button
                          type="button"
                          onClick={() => copyToClipboard(card.value, card.label)}
                          className="shrink-0 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground"
                          aria-label={`Copy ${card.label}`}
                        >
                          {copiedField === card.label ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
