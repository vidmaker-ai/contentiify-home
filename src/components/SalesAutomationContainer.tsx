import { FunctionComponent } from "react";
import styles from "./SalesAutomationContainer.module.css";
const SalesAutomationContainer: FunctionComponent = () => {
  return (
    <div className={styles.body}>
      <div className={styles.crmParent}>
        <b className={styles.crm}>CRM</b>
        <b className={styles.salesAutomationHelpsContainer}>
          <span className={styles.salesAutomationHelpsContainer1}>
            <p className={styles.salesAutomationHelps}>
              Sales automation helps you
            </p>
            <p className={styles.salesAutomationHelps}>sell more</p>
          </span>
        </b>
        <div className={styles.aCrmWithContainer}>
          <span className={styles.salesAutomationHelpsContainer1}>
            <p className={styles.salesAutomationHelps}>
              A CRM with email and sales automation keeps all your customer
            </p>
            <p className={styles.salesAutomationHelps}>
              data organized in one platform. Manage multiple pipelines,
            </p>
            <p className={styles.salesAutomationHelps}>
              update deals, and always follow up at the perfect moment.
            </p>
          </span>
        </div>
        <div className={styles.spanelementorDividerSeparat} />
        <div className={styles.salesAutomationIncreasesContainer}>
          <span className={styles.salesAutomationHelpsContainer1}>
            <p className={styles.salesAutomationHelps}>
              Sales automation increases qualified leads 110% on
            </p>
            <p className={styles.salesAutomationHelps}>
              average year-over-year.
            </p>
          </span>
        </div>
        <div className={styles.crm1}>CRM</div>
        <img className={styles.vectorIcon} alt="" src="/vector511.svg" />
        <div className={styles.winProbability}>Win probability</div>
        <img className={styles.vectorIcon1} alt="" src="/vector511.svg" />
        <div className={styles.leadMagnets}>{`Lead magnets & forms`}</div>
        <img className={styles.vectorIcon2} alt="" src="/vector611.svg" />
        <div className={styles.salesEngagement}>Sales engagement</div>
        <img className={styles.vectorIcon3} alt="" src="/vector611.svg" />
        <div className={styles.aelementorButtonLink}>
          <div className={styles.sellMore1}>Sell more</div>
        </div>
        <img className={styles.crmpngIcon} alt="" src="/crmpng11@2x.png" />
      </div>
    </div>
  );
};

export default SalesAutomationContainer;
