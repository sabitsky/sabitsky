import { experience, projects } from "@/data/site-content";

import { FadeUp } from "../animation/FadeUp";
import styles from "./WorkSection.module.css";

export function WorkSection() {
  return (
    <section className={styles.section} id="work">
      <div className={styles.inner}>
        <FadeUp>
          <div className={styles.sectionLabel}>{"// Work"}</div>
        </FadeUp>

        <FadeUp delay={0.05}>
          <div className={styles.trackSectionIntro}>
            <h2 className={styles.trackTitle}>
              From soldering irons
              <br />
              to product orgs
            </h2>
            <p className={styles.trackDescription}>
              From early-stage fintech to top-3 classifieds. AI features, IoT systems, and full
              product orgs — always with measurable outcomes.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className={styles.expCompact}>
            {experience.map((item) => (
              <div className={styles.expRow} key={item.year}>
                <span className={styles.expYear}>{item.year}</span>
                <span className={styles.expRole}>
                  {item.role}
                  <span className={styles.expCompany}>@ {item.company}</span>
                </span>
                <span className={styles.expNote}>{item.note}</span>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className={styles.expCvWrap}>
            <a href="#" className={styles.expCvLink}>
              Download full CV ↓
            </a>
          </div>
        </FadeUp>

        <hr className={styles.subSeparator} />

        <FadeUp delay={0.2}>
          <div className={styles.projectsLabelWrap}>
            <div className={`${styles.sectionLabel} ${styles.projectsLabel}`}>
              {"// Projects & Side Builds"}
            </div>
          </div>
        </FadeUp>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => {
            const isWip = project.tags.some((tag) => tag === "In Progress" || tag === "Coming Soon");

            return (
              <FadeUp key={project.name} delay={0.25 + index * 0.05}>
                <div
                  className={`${styles.projectCard} ${project.hasLink ? styles.hasLink : ""} ${
                    isWip ? styles.wipCard : ""
                  }`}
                >
                  {project.hasLink ? <span className={styles.arrow}>↗</span> : null}
                  <span className={styles.projectIndex}>{String(index + 1).padStart(2, "0")}</span>
                  <h3 className={styles.projectTitle}>{project.name}</h3>
                  <p className={styles.projectDesc}>{project.desc}</p>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`${styles.tag} ${
                          tag === "In Progress" || tag === "Coming Soon" ? styles.tagWip : ""
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
