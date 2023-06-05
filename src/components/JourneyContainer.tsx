import { FunctionComponent } from "react";
import NurtureContainer from "./NurtureContainer";
import styles from "./JourneyContainer.module.css";
const JourneyContainer: FunctionComponent = () => {
  return (
    <div className={styles.body}>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <div className={styles.stage}>
        <b className={styles.builtForEach}>
          Built for each stage of the customer journey
        </b>
        <div className={styles.divelementorWidgetWrap}>
          <div className={styles.pseudo} />
          <b className={styles.reach}>Reach</b>
          <div className={styles.span}>
            <div className={styles.usePreciseTargetingContainer}>
              <p className={styles.usePreciseTargeting}>
                Use precise targeting to find
              </p>
              <p className={styles.usePreciseTargeting}>
                the right prospects and grow
              </p>
              <p className={styles.usePreciseTargeting}>your audience.</p>
            </div>
          </div>
          <div className={styles.ulelementorIconListItems}>
            <div className={styles.websiteTracking}>Website Tracking</div>
            <div className={styles.emailMarketing}>Email Marketing</div>
            <div className={styles.emailSegmentation}>Email Segmentation</div>
            <div className={styles.subscriptionForms}>Subscription Forms</div>
            <div className={styles.deliverability}>Deliverability</div>
          </div>
        </div>
        <NurtureContainer
          nurture="Nurture"
          growYourRelationshipWith="Grow your relationship with"
          yourAudienceByProviding="your audience by providing"
          tailoredGuidance="tailored guidance."
          marketingAutomation="Marketing Automation"
          messagingText={`Messaging & Text`}
          eventTracking="Event Tracking"
          dynamicContent="Dynamic Content"
          facebookCustomAudiences="Facebook Custom Audiences"
          propRight="540px"
          propLeft="270px"
          propBackgroundColor="#5acdbb"
          propWidth="58.9px"
          propWidth1="173.04px"
          propWidth2="138.59px"
          propWidth3="108.25px"
          propWidth4="91.68px"
          propWidth5="107.04px"
          propWidth6="179.31px"
        />
        <NurtureContainer
          nurture="Convert"
          growYourRelationshipWith="Provide individual audience"
          yourAudienceByProviding="members with well-timed"
          tailoredGuidance="calls to take the next step."
          marketingAutomation="Landing Pages"
          messagingText={`CRM & Sales Automations`}
          eventTracking="Lead Scoring"
          dynamicContent="Pipeline Automation"
          facebookCustomAudiences="Attribution"
          propRight="270px"
          propLeft="540px"
          propBackgroundColor="#004cff"
          propWidth2="89.9px"
          propWidth3="161.47px"
          propWidth4="79.97px"
          propWidth5="127.04px"
          propWidth6="67.75px"
        />
        <NurtureContainer
          nurture="Grow"
          growYourRelationshipWith="Delight each customer by"
          yourAudienceByProviding="knowing what they want,"
          tailoredGuidance="when they want it."
          marketingAutomation="Conversations"
          messagingText="Split Testing"
          eventTracking="Predictive Sending"
          dynamicContent="Predictive Content"
          facebookCustomAudiences="Web Personalization"
          propRight="0px"
          propLeft="810px"
          propBackgroundColor="#19cca3"
          propWidth="40.42px"
          propWidth1="159.42px"
          propWidth2="88.86px"
          propWidth3="76.92px"
          propWidth4="116.47px"
          propWidth5="115.54px"
          propWidth6="127.73px"
        />
      </div>
    </div>
  );
};

export default JourneyContainer;
