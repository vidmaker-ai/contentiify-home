import { FunctionComponent } from "react";
import styles from "./Body10.module.css";
const Body10: FunctionComponent = () => {
  return (
    <div className={styles.body}>
      <b className={styles.teamUpWithContainer}>
        <span className={styles.teamUpWithContainer1}>
          <p className={styles.teamUpWith}>Team up with your</p>
          <p className={styles.teamUpWith}>favorite apps</p>
        </span>
      </b>
      <div className={styles.with870IntegrationsContainer}>
        <span className={styles.teamUpWithContainer1}>
          <p className={styles.teamUpWith}>
            With 870+ integrations like Shopify,
          </p>
          <p className={styles.teamUpWith}>WordPress, and Zapier in our app</p>
          <p className={styles.teamUpWith}>
            marketplace, you’ll have all the marketing
          </p>
          <p className={styles.teamUpWith}>tools you need to succeed.</p>
        </span>
      </div>
      <div className={styles.viewAllApps}>View all apps</div>
      <div className={styles.div}></div>
      <img
        className={styles.appsGroup768x366pngIcon}
        alt=""
        src="/appsgroup768x366png@2x.png"
      />
    </div>
  );
};

export default Body10;
