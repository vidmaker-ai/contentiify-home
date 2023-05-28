import { FunctionComponent } from "react";
import styles from "./Header.module.css";
const Header: FunctionComponent = () => {
  return (
    <div className={styles.top}>
      <div className={styles.sectionelementorSection}>
        <i className={styles.heyThereFreeContainer}>
          {`Hey there! Free trials are available for Standard and Essentials plans. `}
          <a
            className={styles.startForFreeToday}
            href="https://app.contentiify.com/login"
            target="_blank"
          >
            <span className={styles.startForFree}>Start for free today.</span>
          </a>
        </i>
      </div>
    </div>
  );
};

export default Header;
