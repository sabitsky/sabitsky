import Image from "next/image";

import { FadeUp } from "../animation/FadeUp";
import { LoomReveal } from "../animation/LoomReveal";
import styles from "./ManifestoSection.module.css";

export function ManifestoSection() {
  return (
    <section id="manifesto" className={styles.section}>
      <FadeUp>
        <div className={styles.sectionLabel}>{"// Manifesto"}</div>
      </FadeUp>
      <div className={styles.manifestoGrid}>
        <div>
          <FadeUp delay={0.05}>
            <p className={styles.manifestoText}>
              <span className={styles.accentLead}>
                AI is reshaping how products are built. But technology without craft is noise.{" "}
              </span>
              The Jacquard loom didn&apos;t replace the weaver — it gave craft a{" "}
              <span className={styles.accent}>new language</span>. Punch cards became code. The
              pattern grew beyond what hands alone could hold.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className={styles.dividerLine} />
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className={styles.manifestoBody}>
              Today, AI is the new loom — and it demands a maker who understands both the material
              and the machine. I build at this intersection: soldering ESP32 boards, prototyping
              with LLMs, writing product strategy, and constructing furniture from solid pine. Every
              layer of the stack, from atoms to algorithms.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className={`${styles.manifestoBody} ${styles.manifestoBodySecondary}`}>
              I design products the way furniture is made — to be used, not just looked at.
            </p>
          </FadeUp>
        </div>
      </div>
      <FadeUp delay={0.25}>
        <LoomReveal>
          <div className={styles.loomWideWrap}>
            <Image
              src="/images/loom-wide.jpg"
              alt="Jacquard loom workshop, 19th century"
              width={400}
              height={266}
              className={styles.loomWide}
            />
            <div className={styles.loomWideOverlay} />
          </div>
        </LoomReveal>
        <p className={styles.loomCaption}>Jacquard loom workshop · 19th century engraving</p>
      </FadeUp>
    </section>
  );
}
