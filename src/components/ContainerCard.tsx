import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./ContainerCard.module.css";

type ContainerCardType = {
  svg?: string;
  freeHelpCourses?: string;
  andSupport?: string;
  getStarted?: string;

  /** Style props */
  propRight?: Property.Right;
  propLeft?: Property.Left;
  propLeft1?: Property.Left;
};

const ContainerCard: FunctionComponent<ContainerCardType> = ({
  svg,
  freeHelpCourses,
  andSupport,
  getStarted,
  propRight,
  propLeft,
  propLeft1,
}) => {
  const divelementorFlipBoxLayerStyle: CSS.Properties = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  const divStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div
      className={styles.divelementorFlipBoxLayer}
      style={divelementorFlipBoxLayerStyle}
    >
      <div className={styles.div} style={divStyle}>
        
      </div>
      <div className={styles.divelementorFlipBoxLayer1}>
        <img className={styles.svgIcon} alt="" src={svg} />
        <div className={styles.h3elementorFlipBoxLayer}>
          <div className={styles.freeHelpCoursesContainer}>
            <p className={styles.freeHelpCourses}>{freeHelpCourses}</p>
            <p className={styles.freeHelpCourses}>{andSupport}</p>
          </div>
        </div>
        <div className={styles.getStarted}>{getStarted}</div>
      </div>
    </div>
  );
};

export default ContainerCard;
