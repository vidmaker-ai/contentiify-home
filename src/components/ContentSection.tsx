import { FunctionComponent } from "react";
import styles from "./ContentSection.module.css";
const ContentSection: FunctionComponent = () => {
  return (
    <div className={styles.body}>
      <div className={styles.frameParent}>
        <div className={styles.groupParent}>
          <div className={styles.empowerYourBusinessWithVirParent}>
            <b className={styles.empowerYourBusinessContainer}>
              <span className={styles.empowerYourBusinessContainer1}>
                <p className={styles.empowerYourBusiness}>
                  Empower your business
                </p>
                <p className={styles.empowerYourBusiness}>
                  with viral contents
                </p>
              </span>
            </b>
            <img className={styles.groupChild} alt="" src="/vector-12.svg" />
          </div>
          <div className={styles.theSocialMediaContainer}>
            <span className={styles.empowerYourBusinessContainer1}>
              <p
                className={styles.empowerYourBusiness}
              >{`The social media content, marketing campaign management, and even spying `}</p>
              <p className={styles.empowerYourBusiness}>
                your competitors to get insights with low-cost.
              </p>
            </span>
          </div>
          <div className={styles.buttonactButton}>
            <div className={styles.getViral}>Get viral</div>
          </div>
          <div className={styles.tryItFree}>
            Try it free. No credit card required. Instant setup.
          </div>
        </div>
        <img
          className={styles.imageCrop1Icon}
          alt=""
          src="/image-crop-1@2x.png"
        />
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      </div>
      <img className={styles.bodyChild} alt="" src="/frame-732@2x.png" />
    </div>
  );
};

export default ContentSection;
