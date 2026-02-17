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
                AI is reshaping how products are built. But technology without craft is noise.
              </span>
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className={styles.dividerLine} />
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className={styles.manifestoBody}>
              In 1804, Joseph Marie Jacquard introduced a loom that changed everything. Before it,
              weaving complex patterns was slow, expensive work — limited to what skilled hands
              could manage. His invention used punch cards to automate pattern-making. Suddenly,
              intricate designs that took weeks could be woven in days. Workshops transformed. Small
              manufactories scaled into factories. What was once luxury became accessible. The punch
              card didn&apos;t replace the weaver — it gave craft a{" "}
              <span className={styles.accent}>new language</span> and expanded what was possible.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className={styles.manifestoBody}>
              Today, AI is the new loom — and it demands a maker who understands both the material
              and the machine.
            </p>
          </FadeUp>
          <FadeUp delay={0.25}>
            <p className={`${styles.manifestoBody} ${styles.manifestoBodySecondary}`}>
              I build at this intersection: soldering ESP32 boards, prototyping with LLMs, writing
              product strategy, modeling unit economics and monetization. I design products the way
              furniture is made — to be used, not just looked at. Every layer of the stack, from
              atoms to algorithms.
            </p>
          </FadeUp>
        </div>
      </div>
      <FadeUp delay={0.3}>
        <LoomReveal>
          <div className={styles.loomWideWrap}>
            <Image
              src="/images/loom-wide.jpg"
              alt="Jacquard loom workshop, 19th century"
              width={900}
              height={608}
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
