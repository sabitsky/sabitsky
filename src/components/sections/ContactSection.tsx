import { contactLinks, siteMeta } from "@/data/site-content";

import { FadeUp } from "../animation/FadeUp";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  return (
    <section id="contact" className={styles.sectionShell}>
      <div className={styles.sectionInner}>
        <FadeUp>
          <div className={styles.sectionLabel}>{"// Contact"}</div>
        </FadeUp>
        <div className={styles.contactGrid}>
          <FadeUp delay={0.05}>
            <div>
              <h2 className={styles.contactTitle}>Let&apos;s talk.</h2>
              <p className={styles.contactDescription}>
                Open to product leadership, AI/IoT consulting, and interesting collaborations.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className={styles.contactLinks}>
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`${styles.contactLink} ${link.primary ? styles.primaryLink : ""}`}
                  target={link.openInNewTab ? "_blank" : undefined}
                  rel={link.openInNewTab ? "noopener noreferrer" : undefined}
                >
                  <div>
                    <div className={styles.label}>{link.label}</div>
                    <div className={styles.value}>{link.value}</div>
                  </div>
                </a>
              ))}
              <div className={styles.contactLocation}>{siteMeta.location}</div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
