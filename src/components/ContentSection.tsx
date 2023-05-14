import { FunctionComponent } from "react";
import styles from "./ContentSection.module.css";
const ContentSection: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.empowerYourBusinessWithVirParent}>
            <b className={styles.empowerYourBusinessContainer}>
              <p className={styles.empowerYourBusiness}>
                Empower your business
              </p>
              <p className={styles.empowerYourBusiness}>with viral contents</p>
            </b>
            <img className={styles.frameChild} alt="" src="/vector-12.svg" />
          </div>
          <div className={styles.theSocialMediaContainer}>
            <p
              className={styles.empowerYourBusiness}
            >{`The social media content, marketing campaign management, and even spying `}</p>
            <p className={styles.empowerYourBusiness}>
              your competitors to get insights with low-cost.
            </p>
          </div>
          <div className={styles.buttonactButton}>
            <div className={styles.getViral}>Get viral</div>
          </div>
          <div className={styles.tryItFree}>
            Try it free. No credit card required. Instant setup.
          </div>
        </div>
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      </div>
      <div className={styles.curve}>
        <div className={styles.background}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
