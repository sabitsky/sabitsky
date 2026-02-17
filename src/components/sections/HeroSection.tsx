import Image from "next/image";

import { heroKeywords } from "@/data/site-content";

import { FadeUp } from "../animation/FadeUp";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <FadeUp>
          <h1 className={styles.title}>
            Constantine
            <br />
            Sabitsky
          </h1>
        </FadeUp>
        <FadeUp delay={0.08}>
          <p className={styles.tagline}>
            Product leader who builds like an <em className={styles.taglineEm}>industrial designer</em>.
            From IoT sensors to AI-powered apps — I ship products across the full stack of making
            things.
          </p>
        </FadeUp>
        <FadeUp delay={0.16}>
          <div className={styles.heroKeywords}>
            {heroKeywords.map((keyword, index) => (
              <span
                key={keyword}
                className={`${styles.heroKeyword} ${index === 1 ? styles.accentKw : ""}`}
              >
                {keyword}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>

      <div className={styles.heroRight}>
        <FadeUp delay={0.12}>
          <div className={styles.heroPhotoWrap}>
            <Image
              src="/images/hero-img.jpg"
              alt="Design books — Rams, Dreyfuss, Maeda, Papanek, Norman"
              width={380}
              height={280}
              priority
              className={styles.heroPhoto}
            />
          </div>
        </FadeUp>
      </div>

      <div className={styles.scrollHint}>
        <span className={styles.scrollLine} />
        Scroll
      </div>
    </section>
  );
}
