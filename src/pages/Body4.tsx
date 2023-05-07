import { FunctionComponent } from "react";
import styles from "./Body4.module.css";
const Body4: FunctionComponent = () => {
  return (
    <div className={styles.body}>
      <div className={styles.bodyChild} />
      <img
        className={styles.websitemessagingpngIcon}
        alt=""
        src="/websitemessagingpng@2x.png"
      />
      <b className={styles.messagingLive}>{`messaging & live chat`}</b>
      <b className={styles.messageYourCustomersContainer}>
        <span className={styles.messageYourCustomersContainer1}>
          <p className={styles.messageYourCustomers}>Message your customers</p>
          <p className={styles.messageYourCustomers}>when it matters most</p>
        </span>
      </b>
      <div className={styles.makeMeaningfulConnectionsContainer}>
        <span className={styles.messageYourCustomersContainer1}>
          <p className={styles.messageYourCustomers}>
            Make meaningful connections with your customers. Answer
          </p>
          <p className={styles.messageYourCustomers}>
            questions, recommend products, offer sales, or ask for feedback
          </p>
          <p className={styles.messageYourCustomers}>
            at the exact moment they’re most engaged.
          </p>
        </span>
      </div>
      <div className={styles.spanelementorDividerSeparat} />
      <div className={styles.ofBusinessesGrowContainer}>
        <span className={styles.messageYourCustomersContainer1}>
          <p className={styles.messageYourCustomers}>
            99% of businesses grow faster by using channels with
          </p>
          <p className={styles.messageYourCustomers}>
            email marketing. (SMS, chat, website, social
          </p>
          <p className={styles.messageYourCustomers}>media, etc.)</p>
        </span>
      </div>
      <div className={styles.siteMessaging}>Site messaging</div>
      <img className={styles.vectorIcon} alt="" src="/vector12.svg" />
      <div className={styles.engagementTracking}>Engagement tracking</div>
      <img className={styles.vectorIcon1} alt="" src="/vector12.svg" />
      <div className={styles.sms}>SMS</div>
      <img className={styles.vectorIcon2} alt="" src="/vector12.svg" />
      <div className={styles.segmentation}>Segmentation</div>
      <img className={styles.vectorIcon3} alt="" src="/vector12.svg" />
      <div className={styles.aelementorButtonLink}>
        <div className={styles.messageCustomers}>Message customers</div>
      </div>
    </div>
  );
};

export default Body4;
