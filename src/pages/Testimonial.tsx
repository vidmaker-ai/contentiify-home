import { FunctionComponent } from "react";
import styles from "./Testimonial.module.css";
const Testimonial: FunctionComponent = () => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.divelementorWidgetWrap}>
        <b className={styles.ourCustomersLove}>Our customers love us</b>
        <img
          className={styles.divelementorContainerIcon}
          alt=""
          src="/divelementorcontainer1.svg"
        />
        <div className={styles.divelementorWidgetContainer}>
          <div className={styles.dontJustTakeContainer}>
            <span className={styles.dontJustTakeContainer1}>
              <p className={styles.dontJustTake}>
                Don’t just take our word for it: 10,000+ people rank
                ActiveCampaign as an
              </p>
              <p className={styles.dontJustTake}>
                industry leader across G2, Capterra, TrustRadius,
                and TrustPilot.
              </p>
            </span>
          </div>
        </div>
        <div className={styles.a}>
          <div className={styles.seeReviews}>See reviews</div>
          <div className={styles.div}></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
