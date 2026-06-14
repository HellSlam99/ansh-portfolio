"use client";

import { useReducedMotion } from "framer-motion";

export function BackgroundEffects() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px] animate-aurora-1" />
      <div className="absolute -right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px] animate-aurora-2" />
      <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-purple-500/8 blur-[100px] animate-aurora-3" />
    </div>
  );
}
