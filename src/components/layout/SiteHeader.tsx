"use client";

import { navItems } from "@/data/site-content";
import { useScrollSpy } from "@/hooks/useScrollSpy";

import styles from "./SiteHeader.module.css";

const sectionIds = navItems.map((item) => item.id);

export function SiteHeader() {
  const activeSection = useScrollSpy(sectionIds);

  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.logo}>
        c.sabitsky
      </a>
      <div className={styles.links}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`${styles.link} ${activeSection === item.id ? styles.active : ""}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
