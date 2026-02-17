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
        opacity: visible ? 1 : 0.84,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition:
          "opacity 1.2s cubic-bezier(.22,1,.36,1), transform 1.2s cubic-bezier(.22,1,.36,1)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
