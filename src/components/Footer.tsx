import { FunctionComponent } from "react";
import styles from "./Footer.module.css";
const Footer: FunctionComponent = () => {
  return (
    <div className={styles.social}>
      <div className={styles.divelementorContainer}>
        <div className={styles.divelementorWidgetWrap}>
          <div className={styles.divelementorWidgetContainer}>
            <div className={styles.ulelementorIconListItems}>
              <div className={styles.div}></div>
              <div className={styles.div1}></div>
              <div className={styles.div2}></div>
              <div className={styles.div3}></div>
            </div>
          </div>
          <div className={styles.divelementorWidgetContainer1}>
            <div className={styles.ulelementorIconListItems1}>
              <div className={styles.div4}></div>
              <div className={styles.div4}></div>
            </div>
          </div>
          <div className={styles.divelementorElement}>
            <img
              className={styles.blueSeal20042Bbb88495326Icon}
              alt=""
              src="/blueseal20042bbb88495326png1111@2x.png"
            />
          </div>
          <div className={styles.divlegalCenter}>
            <div className={styles.divelementorWidgetContainer2}>
              <div className={styles.legalCenter}>Legal Center</div>
            </div>
          </div>
          <div className={styles.divelementorWidgetContainer3}>
            <div className={styles.legalCenter}>Privacy Policy</div>
          </div>
        </div>
        <div className={styles.formactSearchForm}>
          <div className={styles.divactSearchContainer}>
            <div className={styles.div6}></div>
            <div className={styles.divplaceholder}>
              <div className={styles.search}>Search</div>
            </div>
          </div>
          <div className={styles.buttonactSearchSubmit}>
            <div className={styles.search1}>Search</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
