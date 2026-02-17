"use client";

import { useEffect, useState } from "react";

import type { NavSectionId } from "@/data/site-content";

export function useScrollSpy(ids: readonly NavSectionId[]) {
  const [active, setActive] = useState<NavSectionId | "">("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id as NavSectionId);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [ids]);

  return active;
}
