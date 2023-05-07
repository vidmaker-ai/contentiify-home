import { FunctionComponent } from "react";
import styles from "./Body6.module.css";
const Body6: FunctionComponent = () => {
  return (
    <div className={styles.body}>
      <div className={styles.bodyChild} />
      <b className={styles.personalizedEmailMarketing}>
        Personalized Email Marketing
      </b>
      <b className={styles.sendExactlyWhatContainer}>
        <span className={styles.sendExactlyWhatContainer1}>
          <p className={styles.sendExactlyWhat}>Send exactly what your</p>
          <p className={styles.sendExactlyWhat}>contacts want</p>
        </span>
      </b>
      <div className={styles.craftEmailNewslettersContainer}>
        <span className={styles.sendExactlyWhatContainer1}>
          <p className={styles.sendExactlyWhat}>
            Craft email newsletters, campaigns, and promotions that
          </p>
          <p className={styles.sendExactlyWhat}>
            connect with your customers. Customize your communication to
          </p>
          <p className={styles.sendExactlyWhat}>
            offer exactly what they are looking for.
          </p>
        </span>
      </div>
      <div className={styles.spanelementorDividerSeparat} />
      <div className={styles.contactListSizesContainer}>
        <span className={styles.sendExactlyWhatContainer1}>
          <p className={styles.sendExactlyWhat}>
            Contact list sizes increase 143% with personalized
          </p>
          <p className={styles.sendExactlyWhat}>
            <span>email marketing. </span>
            <span className={styles.readTheReport}>Read the report</span>
          </p>
        </span>
      </div>
      <div className={styles.emailMarketing}>Email marketing</div>
      <img className={styles.vectorIcon} alt="" src="/vector15.svg" />
      <div className={styles.dynamicContent}>Dynamic content</div>
      <img className={styles.vectorIcon1} alt="" src="/vector15.svg" />
      <div className={styles.segmentation}>Segmentation</div>
      <img className={styles.vectorIcon2} alt="" src="/vector16.svg" />
      <div className={styles.successfulDeliverability}>
        Successful deliverability
      </div>
      <img className={styles.vectorIcon3} alt="" src="/vector16.svg" />
      <div className={styles.aelementorButtonLink}>
        <div className={styles.personalizeYourEmail}>
          Personalize your email
        </div>
      </div>
      <img
        className={styles.emailmarketingpngIcon}
        alt=""
        src="/emailmarketingpng1@2x.png"
      />
    </div>
  );
};

export default Body6;
