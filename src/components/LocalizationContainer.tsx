import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./LocalizationContainer.module.css";

type LocalizationContainerType = {
  hipCookspng?: string;
  hipcooks?: string;
  localizingOurContentKeeps?: string;
  ourCustomersEngaged?: string;
  becauseWereAbleToWrite?: string;
  aboutRecipesRelevantTo?: string;
  trendsAndSeasons?: string;

  /** Style props */
  propLeft?: Property.Left;
  propTop?: Property.Top;
  propWidth?: Property.Width;
  propTop1?: Property.Top;
  propWidth1?: Property.Width;
  propTop2?: Property.Top;
};

const LocalizationContainer: FunctionComponent<LocalizationContainerType> = ({
  hipCookspng,
  hipcooks,
  localizingOurContentKeeps,
  ourCustomersEngaged,
  becauseWereAbleToWrite,
  aboutRecipesRelevantTo,
  trendsAndSeasons,
  propLeft,
  propTop,
  propWidth,
  propTop1,
  propWidth1,
  propTop2,
}) => {
  const divStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const hipCookspngIconStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const hipcooksStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
      top: propTop1,
    };
  }, [propWidth, propTop1]);

  const localizingOurContentContainerStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
      top: propTop2,
    };
  }, [propWidth1, propTop2]);

  return (
    <div className={styles.div} style={divStyle}>
      <div className={styles.child} />
      <div className={styles.div1}>
        <img
          className={styles.hipcookspngIcon}
          alt=""
          src={hipCookspng}
          style={hipCookspngIconStyle}
        />
        <b className={styles.hipcooks} style={hipcooksStyle}>
          {hipcooks}
        </b>
        <div
          className={styles.localizingOurContentContainer}
          style={localizingOurContentContainerStyle}
        >
          <span className={styles.localizingOurContentContainer1}>
            <p className={styles.localizingOurContent}>
              Localizing our content keeps
            </p>
            <p className={styles.localizingOurContent}>our customers engaged</p>
            <p className={styles.localizingOurContent}>
              because we’re able to write
            </p>
            <p className={styles.localizingOurContent}>
              about recipes relevant to
            </p>
            <p className={styles.localizingOurContent}>trends and seasons…</p>
          </span>
        </div>
        <div className={styles.seeMore}>See more</div>
        <div className={styles.div2}></div>
      </div>
    </div>
  );
};

export default LocalizationContainer;
