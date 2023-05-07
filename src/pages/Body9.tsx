import { FunctionComponent } from "react";
import styles from "./Body9.module.css";
const Body9: FunctionComponent = () => {
  return (
    <div className={styles.body}>
      <div className={styles.bodyChild} />
      <img className={styles.bodyItem} alt="" src="/vector-5.svg" />
      <b className={styles.growYourBusinessContainer}>
        <span className={styles.growYourBusinessContainer1}>
          <p className={styles.growYourBusiness}>{`Grow your business `}</p>
          <p className={styles.growYourBusiness}>the most efficient way</p>
        </span>
      </b>
      <div className={styles.theEmailMarketingContainer}>
        <span className={styles.growYourBusinessContainer1}>
          <p className={styles.growYourBusiness}>
            The email marketing, marketing automation, and CRM tools you need to
          </p>
          <p className={styles.growYourBusiness}>
            create incredible customer experiences.
          </p>
        </span>
      </div>
      <div className={styles.buttonactButton}>
        <div className={styles.getStarted}>Get started</div>
      </div>
      <div className={styles.tryItFree}>
        Try it free. No credit card required. Instant setup.
      </div>
      <img className={styles.icon} alt="" src="/05-2-11@2x.png" />
    </div>
  );
};

export default Body9;
