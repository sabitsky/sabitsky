"use client";

import type { ReactNode } from "react";

import { useInView } from "@/hooks/useInView";

interface LoomRevealProps {
  children: ReactNode;
}

export function LoomReveal({ children }: LoomRevealProps) {
  const [ref, visible] = useInView<HTMLDivElement>(0.15);

  return (
    <div
      ref={ref}
      style={{
        clipPath: visible ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
        transition: "clip-path 1.2s cubic-bezier(.22,1,.36,1)",
      }}
    >
      {children}
    </div>
  );
}
