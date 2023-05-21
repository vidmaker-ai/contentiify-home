import { FunctionComponent } from "react";
import styles from "./ContentContainer.module.css";
const ContentContainer: FunctionComponent = () => {
  return (
    <div className={styles.body}>
      <img className={styles.bodyChild} alt="" src="/vector-13.svg" />
      <div className={styles.content}>
        <img
          className={styles.emailmarketingpngIcon}
          alt=""
          src="/emailmarketingpng@2x.png"
        />
        <div className={styles.personalizedEmailMarketingParent}>
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
          <div className={styles.emailMarketingParent}>
            <div className={styles.emailMarketing}>Email marketing</div>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <div className={styles.dynamicContent}>Dynamic content</div>
            <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
            <div className={styles.segmentation}>Segmentation</div>
            <img className={styles.vectorIcon2} alt="" src="/vector3.svg" />
            <div className={styles.successfulDeliverability}>
              Successful deliverability
            </div>
            <img className={styles.vectorIcon3} alt="" src="/vector4.svg" />
          </div>
          <div className={styles.aelementorButtonLink}>
            <div className={styles.personalizeYourEmail}>
              Personalize your email
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentContainer;
