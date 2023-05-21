import { FunctionComponent } from "react";
import styles from "./BottomFooter.module.css";
const BottomFooter: FunctionComponent = () => {
  return (
    <div className={styles.language}>
      <div className={styles.sectionelementorSection}>
        <div className={styles.ul}>
          <div className={styles.spanwpmlLsNative}>
            <div className={styles.english}>English</div>
          </div>
          <div className={styles.liwpmlLsSlotFooter}>
            <div className={styles.div}>{`. `}</div>
            <div className={styles.espaol}>Español</div>
          </div>
          <div className={styles.liwpmlLsSlotFooter1}>
            <div className={styles.div}>{`. `}</div>
            <div className={styles.franais}>Français</div>
          </div>
          <div className={styles.liwpmlLsSlotFooter2}>
            <div className={styles.div}>{`. `}</div>
            <div className={styles.espaol}>Italiano</div>
          </div>
          <div className={styles.liwpmlLsSlotFooter3}>
            <div className={styles.div}>{`. `}</div>
            <div className={styles.deutsch}>Deutsch</div>
          </div>
          <div className={styles.liwpmlLsSlotFooter4}>
            <div className={styles.div}>{`. `}</div>
            <div className={styles.franais}>Português</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
