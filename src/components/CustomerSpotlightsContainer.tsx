import { FunctionComponent } from "react";
import LocalizationContainer from "./LocalizationContainer";
import styles from "./CustomerSpotlightsContainer.module.css";
const CustomerSpotlightsContainer: FunctionComponent = () => {
  return (
    <div className={styles.customerSpotlightsParent}>
      <b className={styles.customerSpotlights}>Customer spotlights</b>
      <LocalizationContainer
        hipCookspng="/hipcookspng@2x.png"
        hipcooks="Hipcooks"
      />
      <div className={styles.div}>
        <div className={styles.child} />
        <div className={styles.div1}>
          <img
            className={styles.msi768x589pngIcon}
            alt=""
            src="/msi768x589png@2x.png"
          />
          <b className={styles.museumOfScienceContainer}>
            <span className={styles.museumOfScienceContainer1}>
              <p className={styles.museumOfScience}>Museum of Science</p>
              <p className={styles.museumOfScience}>and Industry</p>
            </span>
          </b>
          <div className={styles.activecampaignLetsUsContainer}>
            <span className={styles.museumOfScienceContainer1}>
              <p className={styles.museumOfScience}>
                ActiveCampaign lets us send
              </p>
              <p className={styles.museumOfScience}>
                email campaigns, automate
              </p>
              <p className={styles.museumOfScience}>features, and manage</p>
              <p className={styles.museumOfScience}>contacts by staff group.</p>
            </span>
          </div>
          <div className={styles.seeMore}>See more</div>
          <div className={styles.div2}></div>
        </div>
      </div>
      <LocalizationContainer
        hipCookspng="/morrowaudio768x589png@2x.png"
        hipcooks="Marrow Audio"
        propLeft="518px"
        propTop="calc(50% - 214.25px)"
        propWidth="105.18px"
        propTop1="210.49px"
        propWidth1="207.43px"
        propTop2="250.49px"
      />
      <LocalizationContainer
        hipCookspng="/beefy768x589png@2x.png"
        hipcooks="Beefy Marketing"
        propLeft="777px"
        propTop="calc(50% - 214.24px)"
        propWidth="122.65px"
        propTop1="215.82px"
        propWidth1="218.98px"
        propTop2="261.14px"
      />
      <div className={styles.seemore}>
        <div className={styles.seeAllCustomer}>
          See all customer case studies
        </div>
        <div className={styles.div3}></div>
      </div>
    </div>
  );
};

export default CustomerSpotlightsContainer;
