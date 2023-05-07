import { FunctionComponent } from "react";
import styles from "./Freetrial.module.css";
const Freetrial: FunctionComponent = () => {
  return (
    <div className={styles.freetrial}>
      <div className={styles.tryItNow}>Try it now, for free</div>
      <div className={styles.noCreditCard}>
        No credit card required. Instant setup.
      </div>
      <div className={styles.inputacInput}>
        <div className={styles.divplaceholder}>
          <div className={styles.emailAddress}>Email Address</div>
        </div>
      </div>
      <div className={styles.buttonactButton}>
        <div className={styles.startYourFree}>Start your free trial</div>
      </div>
    </div>
  );
};

export default Freetrial;
