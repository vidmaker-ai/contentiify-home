import { FunctionComponent } from "react";
import styles from "./SalesEngagementContainer.module.css";
const SalesEngagementContainer: FunctionComponent = () => {
  return (
    <div className={styles.body}>
      <div className={styles.focusOnQualifiedLeadsParent}>
        <b className={styles.focusOnQualified}>Focus on qualified leads</b>
        <b className={styles.anAutomationFirstApproachContainer}>
          <span className={styles.anAutomationFirstApproachContainer1}>
            <p className={styles.anAutomationFirst}>An automation-first</p>
            <p className={styles.anAutomationFirst}>approach to sales</p>
            <p className={styles.anAutomationFirst}>engagement</p>
          </span>
        </b>
        <div className={styles.salesEngagementAutomationContainer}>
          <span className={styles.anAutomationFirstApproachContainer1}>
            <p className={styles.anAutomationFirst}>
              Sales engagement automation uses rich customer data from
            </p>
            <p className={styles.anAutomationFirst}>
              every sales and marketing touchpoint to know the right time and
            </p>
            <p className={styles.anAutomationFirst}>
              channel to automate unique and timely messages. It also
            </p>
            <p className={styles.anAutomationFirst}>
              determines when providing human touch will be most effective
            </p>
            <p className={styles.anAutomationFirst}>to close sales.</p>
          </span>
        </div>
        <div className={styles.spanelementorDividerSeparat} />
        <div className={styles.salesEngagementAutomationContainer2}>
          <span className={styles.anAutomationFirstApproachContainer1}>
            <p className={styles.anAutomationFirst}>
              Sales engagement automation improves customer win
            </p>
            <p className={styles.anAutomationFirst}>rates by 94%.</p>
          </span>
        </div>
        <div className={styles.automatedOneToOneEmail}>
          Automated one-to-one email
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector81.svg" />
        <div className={styles.pipelineAutomation}>Pipeline automation</div>
        <img className={styles.vectorIcon1} alt="" src="/vector81.svg" />
        <div className={styles.siteTracking}>Site tracking</div>
        <img className={styles.vectorIcon2} alt="" src="/vector91.svg" />
        <div className={styles.leadScoring}>Lead scoring</div>
        <img className={styles.vectorIcon3} alt="" src="/vector91.svg" />
        <div className={styles.aelementorButtonLink}>
          <div className={styles.improveWinRates}>Improve win rates</div>
        </div>
        <img
          className={styles.emailmarketingpngIcon}
          alt=""
          src="/emailmarketingpng11@2x.png"
        />
      </div>
    </div>
  );
};

export default SalesEngagementContainer;
