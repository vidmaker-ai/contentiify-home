import { FunctionComponent } from "react";
import ContainerWidgetWrap from "./ContainerWidgetWrap";
import styles from "./CustomerSupportContainer.module.css";
const CustomerSupportContainer: FunctionComponent = () => {
  return (
    <div className={styles.touachpoint}>
      <div className={styles.divelementorContainer}>
        <div className={styles.h4elementorHeadingTitle}>
          <b className={styles.supportingYouAtContainer}>
            <span className={styles.supportingYouAtContainer1}>
              <p className={styles.supportingYouAt}>Supporting you at</p>
              <p className={styles.supportingYouAt}>every customer</p>
              <p className={styles.supportingYouAt}>touchpoint</p>
            </span>
          </b>
        </div>
        <div className={styles.divelementorWidgetWrap}>
          <b className={styles.reach}>Reach</b>
          <div className={styles.ulelementorIconListItems}>
            <div className={styles.emailTemplates}>Email Templates</div>
            <div className={styles.emailNewsletter}>Email Newsletter</div>
            <div className={styles.createForms}>Create Forms</div>
            <div className={styles.popUpBuilder}>Pop Up Builder</div>
            <div className={styles.leadGeneration}>Lead Generation</div>
          </div>
        </div>
        <ContainerWidgetWrap
          nurture="Nurture"
          conversationalMarketing="Conversational Marketing"
          facebookAdvertising="Facebook Advertising"
          socialMediaAdvertising="Social Media Advertising"
          leadTrackingSoftware="Lead Tracking Software"
          wordpress="Wordpress"
          svg="/svg91.svg"
        />
        <ContainerWidgetWrap
          nurture={`Convert & Grow`}
          conversationalMarketing="Sales Platform"
          facebookAdvertising="Sales Analytics"
          socialMediaAdvertising="Lead Scoring"
          leadTrackingSoftware="Attribution Software"
          wordpress="Salesforce"
          svg="/svg101.svg"
          propRight="216px"
          propLeft="648px"
          propWidth="114.29px"
          propWidth1="91.65px"
          propWidth2="94.76px"
          propWidth3="80.58px"
          propWidth4="127.25px"
        />
        <div className={styles.divelementorWidgetWrap1}>
          <b className={styles.ecommerce}>ECommerce</b>
          <div className={styles.ulelementorIconListItems}>
            <div className={styles.ecommerceMarketing}>Ecommerce Marketing</div>
            <div className={styles.ecommercePersonalization}>
              Ecommerce Personalization
            </div>
            <div className={styles.shoppingCartAbandonment}>
              Shopping Cart Abandonment
            </div>
            <div className={styles.a}>
              <div className={styles.shopify}>Shopify</div>
              <img className={styles.svgIcon} alt="" src="/svg111.svg" />
            </div>
            <div className={styles.a1}>
              <div className={styles.woocommerce}>WooCommerce</div>
              <img className={styles.svgIcon} alt="" src="/svg121.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupportContainer;
