import { siteMeta } from "@/data/site-content";

import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footerShell}>
      <div className={styles.footerInner}>
        <span className={styles.copyright}>
          <span className={styles.makersMark} />
          {siteMeta.copyright}
        </span>
        <span className={styles.builtWith}>{siteMeta.builtWith}</span>
      </div>
    </footer>
  );
}
