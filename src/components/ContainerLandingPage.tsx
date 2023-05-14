import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./ContainerLandingPage.module.css";

type ContainerLandingPageType = {
  landingPageId?: string;
  automationId?: string;
  buildingText?: string;

  /** Style props */
  propRight?: Property.Right;
  propLeft?: Property.Left;
  propLeft1?: Property.Left;
};

const ContainerLandingPage: FunctionComponent<ContainerLandingPageType> = ({
  landingPageId,
  automationId,
  buildingText,
  propRight,
  propLeft,
  propLeft1,
}) => {
  const divelementorFlipBoxLayer1Style: CSS.Properties = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  const div1Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div
      className={styles.divelementorFlipBoxLayer}
      style={divelementorFlipBoxLayer1Style}
    >
      <div className={styles.div} style={div1Style}>
        
      </div>
      <div className={styles.divelementorFlipBoxLayer1}>
        <img className={styles.svgIcon} alt="" src={landingPageId} />
        <div className={styles.landingPages}>{automationId}</div>
        <div className={styles.startBuilding}>{buildingText}</div>
      </div>
    </div>
  );
};

export default ContainerLandingPage;
