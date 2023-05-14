import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./ContainerWidgetWrap.module.css";

type ContainerWidgetWrapType = {
  nurture?: string;
  conversationalMarketing?: string;
  facebookAdvertising?: string;
  socialMediaAdvertising?: string;
  leadTrackingSoftware?: string;
  wordpress?: string;
  svg?: string;

  /** Style props */
  propRight?: Property.Right;
  propLeft?: Property.Left;
  propWidth?: Property.Width;
  propWidth1?: Property.Width;
  propWidth2?: Property.Width;
  propWidth3?: Property.Width;
  propWidth4?: Property.Width;
};

const ContainerWidgetWrap: FunctionComponent<ContainerWidgetWrapType> = ({
  nurture,
  conversationalMarketing,
  facebookAdvertising,
  socialMediaAdvertising,
  leadTrackingSoftware,
  wordpress,
  svg,
  propRight,
  propLeft,
  propWidth,
  propWidth1,
  propWidth2,
  propWidth3,
  propWidth4,
}) => {
  const divelementorWidgetWrap1Style: CSS.Properties = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  const nurture1Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const conversationalMarketingStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const facebookAdvertisingStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const socialMediaAdvertisingStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const leadTrackingSoftwareStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth4,
    };
  }, [propWidth4]);

  return (
    <div
      className={styles.divelementorWidgetWrap}
      style={divelementorWidgetWrap1Style}
    >
      <b className={styles.nurture} style={nurture1Style}>
        {nurture}
      </b>
      <div className={styles.ulelementorIconListItems}>
        <div
          className={styles.conversationalMarketing}
          style={conversationalMarketingStyle}
        >
          {conversationalMarketing}
        </div>
        <div
          className={styles.facebookAdvertising}
          style={facebookAdvertisingStyle}
        >
          {facebookAdvertising}
        </div>
        <div
          className={styles.socialMediaAdvertising}
          style={socialMediaAdvertisingStyle}
        >
          {socialMediaAdvertising}
        </div>
        <div
          className={styles.leadTrackingSoftware}
          style={leadTrackingSoftwareStyle}
        >
          {leadTrackingSoftware}
        </div>
        <div className={styles.a}>
          <div className={styles.wordpress}>{wordpress}</div>
          <img className={styles.svgIcon} alt="" src={svg} />
        </div>
      </div>
    </div>
  );
};

export default ContainerWidgetWrap;
