import { FunctionComponent } from "react";
import styles from "./Top1.module.css";
const Top1: FunctionComponent = () => {
  return (
    <div className={styles.top}>
      <div className={styles.topChild} />
      <div className={styles.annoucement}>
        <div className={styles.sectionelementorSection}>
          <div className={styles.divelementorContainer}>
            <div className={styles.divelementorWidgetWrap} />
          </div>
        </div>
      </div>
      <div className={styles.divelementorContainer1}>
        <img
          className={styles.activeCampaignLogoWhitesvgIcon}
          alt=""
          src="/activecampaignlogowhitesvg.svg"
        />
        <div className={styles.ulemm4}>
          <div className={styles.products}>
            <b className={styles.products1}>Products</b>
            <div className={styles.i} />
          </div>
          <div className={styles.platform}>
            <b className={styles.products1}>Platform</b>
            <div className={styles.i1} />
          </div>
          <b className={styles.pricing}>Pricing</b>
          <b className={styles.requestDemo}>Request demo</b>
        </div>
        <div className={styles.formactFreeTrialSignup}>
          <div className={styles.inputacInput}>
            <div className={styles.divplaceholder}>
              <div className={styles.emailAddress}>Email Address</div>
            </div>
          </div>
          <div className={styles.buttonactButton}>
            <div className={styles.tryItFree}>Try it free</div>
            <div className={styles.div}></div>
          </div>
        </div>
      </div>
      <div className={styles.divelementorWidgetContainer}>
        <img className={styles.svgIcon} alt="" src="/svg15.svg" />
      </div>
      <div className={styles.ulmenu1Beb966d}>
        <div className={styles.contact}>Contact</div>
        <div className={styles.contact}>Login</div>
      </div>
      <div className={styles.spanwpmlSubmenuToggle}>
        <img className={styles.svgicon} alt="" src="/svgicon.svg" />
        <div className={styles.buttonwpmlTriggerWrap}>
          <div className={styles.english}>English</div>
          <div className={styles.div1}></div>
        </div>
      </div>
    </div>
  );
};

export default Top1;
