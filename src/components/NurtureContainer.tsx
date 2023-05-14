import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./NurtureContainer.module.css";

type NurtureContainerType = {
  nurture?: string;
  growYourRelationshipWith?: string;
  yourAudienceByProviding?: string;
  tailoredGuidance?: string;
  marketingAutomation?: string;
  messagingText?: string;
  eventTracking?: string;
  dynamicContent?: string;
  facebookCustomAudiences?: string;

  /** Style props */
  propRight?: Property.Right;
  propLeft?: Property.Left;
  propBackgroundColor?: Property.BackgroundColor;
  propWidth?: Property.Width;
  propWidth1?: Property.Width;
  propWidth2?: Property.Width;
  propWidth3?: Property.Width;
  propWidth4?: Property.Width;
  propWidth5?: Property.Width;
  propWidth6?: Property.Width;
};

const NurtureContainer: FunctionComponent<NurtureContainerType> = ({
  nurture,
  growYourRelationshipWith,
  yourAudienceByProviding,
  tailoredGuidance,
  marketingAutomation,
  messagingText,
  eventTracking,
  dynamicContent,
  facebookCustomAudiences,
  propRight,
  propLeft,
  propBackgroundColor,
  propWidth,
  propWidth1,
  propWidth2,
  propWidth3,
  propWidth4,
  propWidth5,
  propWidth6,
}) => {
  const divelementorWidgetWrapStyle: CSS.Properties = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  const pseudoStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const nurtureStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const growYourRelationshipContainerStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const marketingAutomationStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const messagingTextStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const eventTrackingStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth4,
    };
  }, [propWidth4]);

  const dynamicContentStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth5,
    };
  }, [propWidth5]);

  const facebookCustomAudiencesStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth6,
    };
  }, [propWidth6]);

  return (
    <div
      className={styles.divelementorWidgetWrap}
      style={divelementorWidgetWrapStyle}
    >
      <div className={styles.pseudo} style={pseudoStyle} />
      <b className={styles.nurture} style={nurtureStyle}>
        {nurture}
      </b>
      <div className={styles.p}>
        <div
          className={styles.growYourRelationshipContainer}
          style={growYourRelationshipContainerStyle}
        >
          <span className={styles.growYourRelationshipContainer1}>
            <p className={styles.growYourRelationship}>
              {growYourRelationshipWith}
            </p>
            <p className={styles.growYourRelationship}>
              {yourAudienceByProviding}
            </p>
            <p className={styles.growYourRelationship}>{tailoredGuidance}</p>
          </span>
        </div>
      </div>
      <div className={styles.ulelementorIconListItems}>
        <div
          className={styles.marketingAutomation}
          style={marketingAutomationStyle}
        >
          {marketingAutomation}
        </div>
        <div className={styles.messagingText} style={messagingTextStyle}>
          {messagingText}
        </div>
        <div className={styles.eventTracking} style={eventTrackingStyle}>
          {eventTracking}
        </div>
        <div className={styles.dynamicContent} style={dynamicContentStyle}>
          {dynamicContent}
        </div>
        <div
          className={styles.facebookCustomAudiences}
          style={facebookCustomAudiencesStyle}
        >
          {facebookCustomAudiences}
        </div>
      </div>
    </div>
  );
};

export default NurtureContainer;
