import { FunctionComponent } from "react";
import styles from "./Body7.module.css";
const Body7: FunctionComponent = () => {
  return (
    <div className={styles.body}>
      <div className={styles.bodyChild} />
      <img
        className={styles.marketingautomationpngIcon}
        alt=""
        src="/marketingautomationpng@2x.png"
      />
      <b className={styles.powerfulMarketingAutomation}>
        POWERFUL MARKETING AUTOMATION
      </b>
      <div className={styles.h3elementorHeadingTitle}>
        <b className={styles.automationGivesTimeContainer}>
          <span className={styles.automationGivesTimeContainer1}>
            <p className={styles.automationGivesTime}>Automation gives time</p>
            <p className={styles.automationGivesTime}>back to you</p>
          </span>
        </b>
      </div>
      <div className={styles.p}>
        <div className={styles.makeItEasyContainer}>
          <span className={styles.automationGivesTimeContainer1}>
            <p className={styles.automationGivesTime}>
              Make it easy to run your marketing campaigns. Set up a
            </p>
            <p className={styles.automationGivesTime}>
              welcome series with email automation, segment your contacts,
            </p>
            <p className={styles.automationGivesTime}>
              or use simple automation workflows to save time and money.
            </p>
          </span>
        </div>
      </div>
      <div className={styles.spanelementorDividerSeparat} />
      <div className={styles.p1}>
        <div className={styles.automationHelps95Container}>
          <span className={styles.automationGivesTimeContainer1}>
            <p className={styles.automationGivesTime}>
              Automation helps 95% of businesses achieve what
            </p>
            <p className={styles.automationGivesTime}>
              they couldn’t on their own.
            </p>
          </span>
        </div>
      </div>
      <div className={styles.divelementorContainer}>
        <div className={styles.ulelementorIconListItems}>
          <div className={styles.lielementorIconListItem}>
            <div className={styles.contactManagement}>Contact management</div>
            <img className={styles.svgIcon} alt="" src="/svg17.svg" />
          </div>
          <div className={styles.lielementorIconListItem1}>
            <div className={styles.advancedReporting}>Advanced reporting</div>
            <img className={styles.svgIcon} alt="" src="/svg17.svg" />
          </div>
        </div>
        <div className={styles.ulelementorIconListItems1}>
          <div className={styles.lielementorIconListItem2}>
            <div className={styles.automatedLeadNurturing}>
              Automated lead nurturing
            </div>
            <img className={styles.svgIcon} alt="" src="/svg17.svg" />
          </div>
          <div className={styles.lielementorIconListItem3}>
            <div className={styles.dynamicContent}>Dynamic content</div>
            <img className={styles.svgIcon} alt="" src="/svg17.svg" />
          </div>
        </div>
      </div>
      <div className={styles.aelementorButtonLink}>
        <div className={styles.getBackTime}>Get back time</div>
      </div>
    </div>
  );
};

export default Body7;
