import { FunctionComponent } from "react";
import styles from "./ContentifySetting1BILLIN.module.css";
const ContentifySetting1BILLIN: FunctionComponent = () => {
  return (
    <div className={styles.contentifySetting1Billin}>
      <div className={styles.contentify1}>
        <div className={styles.contentify1Child} />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <div className={styles.c}>C.</div>
        <div className={styles.contentify1Item} />
        <div className={styles.logOut}>Log out</div>
        <div className={styles.frameParent}>
          <div className={styles.rickSanchezParent}>
            <div className={styles.rickSanchez}>Rick Sanchez</div>
            <div className={styles.rickSan}>@rick_san</div>
          </div>
          <img className={styles.frameChild} alt="" src="/group-1438@2x.png" />
        </div>
        <div className={styles.profile}>Profile</div>
        <div className={styles.password}>Password</div>
        <div className={styles.team}>Team</div>
        <div className={styles.notifications}>Notifications</div>
        <div className={styles.integrations}>Integrations</div>
        <div className={styles.billingParent}>
          <b className={styles.billing}>Billing</b>
          <img className={styles.frameItem} alt="" src="/line-56.svg" />
        </div>
        <div className={styles.contentify1Inner} />
        <div className={styles.checkout}>Checkout</div>
        <div className={styles.whatsYourContact}>
          What's your contact information?
        </div>
        <div className={styles.email}>
          <div className={styles.divplaceholder}>
            <div className={styles.email1}>Email</div>
          </div>
        </div>
        <div className={styles.aConfirmationEmail}>
          A confirmation email will be sent after checkout.
        </div>
        <div className={styles.phoneNumberParent}>
          <div className={styles.phoneNumber}>
            <div className={styles.divplaceholder1}>
              <div className={styles.email1}>Phone Number</div>
            </div>
          </div>
          <div className={styles.aCarrierMight}>
            A carrier might contact you to confirm delivery.
          </div>
        </div>
        <div className={styles.paymentDetail}>
          <div className={styles.enterYourPayment}>
            Enter your payment details
          </div>
          <div className={styles.nameCard}>
            <div className={styles.divplaceholder2}>
              <div className={styles.rickSanchez}>Name on card</div>
            </div>
          </div>
          <div className={styles.cardnum}>
            <div className={styles.cardNumber}>Card number</div>
          </div>
        </div>
        <div className={styles.orderSummary}>
          <div className={styles.total}>
            <div className={styles.total1}>Total</div>
            <div className={styles.div}>2,739,649₫</div>
            <div className={styles.totalChild} />
          </div>
          <div className={styles.discount}>
            <div className={styles.discount1}>Discount</div>
            <div className={styles.div1}>250,000₫</div>
          </div>
          <div className={styles.subTotal}>
            <div className={styles.subtotal}>Subtotal</div>
            <img
              className={styles.whatIsSubtotal}
              alt=""
              src="/what-is-subtotal.svg"
            />
            <div className={styles.div2}>2,489,649₫</div>
          </div>
          <div className={styles.orderSummary1}>Order Summary</div>
        </div>
        <div className={styles.methods}>
          <div className={styles.card}>
            <div className={styles.email2} />
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
            <div className={styles.creditOfDebit}>Credit of Debit Card</div>
          </div>
          <img className={styles.momoIcon} alt="" src="/momo.svg" />
          <div className={styles.zalopay}>
            <div className={styles.phoneNumber2} />
            <img className={styles.zalopayIcon} alt="" src="/image-2@2x.png" />
          </div>
          <div className={styles.paypal}>
            <div className={styles.phoneNumber3} />
            <img className={styles.paypalIcon} alt="" src="/image-3@2x.png" />
          </div>
          <div className={styles.howWouldYou}>How would you like to pay?</div>
        </div>
      </div>
    </div>
  );
};

export default ContentifySetting1BILLIN;
