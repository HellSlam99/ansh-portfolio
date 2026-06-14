"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Terminal } from "lucide-react";
import { terminalCommands } from "@/lib/data";
import { FadeIn } from "@/components/effects/fade-in";
import { Card, CardContent } from "@/components/ui/card";

const COMMANDS = ["whoami", "skills", "experience", "interests", "help", "clear"] as const;

type Command = (typeof COMMANDS)[number];

interface TerminalLine {
  type: "input" | "output" | "error";
  content: string;
}

export function TerminalSection() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", content: "Welcome! Type a command or select one below." },
    { type: "output", content: 'Try: whoami, skills, experience, interests' },
  ]);
  const [input, setInput] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const runCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setLines((prev) => [...prev, { type: "input", content: `$ ${cmd}` }]);
    setCommandHistory((prev) => [...prev, cmd]);

    switch (trimmed as Command) {
      case "whoami":
        setLines((prev) => [
          ...prev,
          { type: "output", content: terminalCommands.whoami },
        ]);
        break;
      case "skills":
        setLines((prev) => [
          ...prev,
          { type: "output", content: terminalCommands.skills.join("  ·  ") },
        ]);
        break;
      case "experience":
        setLines((prev) => [
          ...prev,
          { type: "output", content: terminalCommands.experience },
        ]);
        break;
      case "interests":
        setLines((prev) => [
          ...prev,
          { type: "output", content: terminalCommands.interests.join("  ·  ") },
        ]);
        break;
      case "help":
        setLines((prev) => [
          ...prev,
          {
            type: "output",
            content: `Available commands: ${COMMANDS.filter((c) => c !== "help").join(", ")}`,
          },
        ]);
        break;
      case "clear":
        setLines([]);
        break;
      default:
        setLines((prev) => [
          ...prev,
          {
            type: "error",
            content: `Command not found: ${cmd}. Type 'help' for available commands.`,
          },
        ]);
    }
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [lines]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCommand(input);
    setInput("");
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const newIndex = historyIndex + 1;
      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    }
  };

  return (
    <section
      id="terminal"
      className="section-padding"
      aria-labelledby="terminal-heading"
    >
      <div className="container-width">
        <FadeIn>
          <div className="mb-12 text-center sm:mb-16">
            <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
              Terminal
            </p>
            <h2
              id="terminal-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Interactive{" "}
              <span className="gradient-text">Shell</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Card className="mx-auto max-w-3xl overflow-hidden border-border/80">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <Terminal className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium">ansh@garg ~ portfolio</span>
              <div className="ml-auto flex gap-1.5" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
            </div>
            <CardContent className="p-0">
              <div
                ref={scrollRef}
                className="h-64 overflow-y-auto p-4 font-mono text-sm sm:h-72"
                onClick={() => inputRef.current?.focus()}
                role="log"
                aria-live="polite"
                aria-label="Terminal output"
              >
                {lines.map((line, i) => (
                  <motion.div
                    key={`${line.type}-${i}-${line.content.slice(0, 20)}`}
                    initial={prefersReducedMotion ? {} : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`mb-1 ${
                      line.type === "input"
                        ? "text-primary"
                        : line.type === "error"
                          ? "text-destructive"
                          : "text-muted-foreground"
                    }`}
                  >
                    {line.content}
                  </motion.div>
                ))}
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                  <span className="text-primary">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none"
                    aria-label="Terminal command input"
                    autoComplete="off"
                    spellCheck={false}
                  />
                </form>
              </div>
              <div className="flex flex-wrap gap-2 border-t border-border p-4">
                {(["whoami", "skills", "experience", "interests"] as const).map((cmd) => (
                  <button
                    key={cmd}
                    type="button"
                    onClick={() => runCommand(cmd)}
                    className="rounded-md border border-border px-3 py-1 text-xs font-mono text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
