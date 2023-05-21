import { FunctionComponent } from "react";
import Header from "../components/Header";
import ContentSection from "../components/ContentSection";
import ContentGeneratorContainer from "../components/ContentGeneratorContainer";
import JourneyContainer from "../components/JourneyContainer";
import AutomationContainer from "../components/AutomationContainer";
import SalesAutomationContainer from "../components/SalesAutomationContainer";
import MessageContainer from "../components/MessageContainer";
import SalesEngagementContainer from "../components/SalesEngagementContainer";
import SuccessContainer from "../components/SuccessContainer";
import CustomerSpotlightsContainer from "../components/CustomerSpotlightsContainer";
import TestimonialContainer from "../components/TestimonialContainer";
import Footer from "../components/Footer";
import BottomFooter from "../components/BottomFooter";
import PricingContainer from "../components/PricingContainer";
import CustomerSupportContainer from "../components/CustomerSupportContainer";
import styles from "./Edit1.module.css";
const Edit1: FunctionComponent = () => {
  return (
    <div className={styles.contentifyDraft20230521}>
      <Header />
      <ContentSection />
      <ContentGeneratorContainer />
      <JourneyContainer />
      <div className={styles.body}>
        <div className={styles.content}>
          <img
            className={styles.emailmarketingpngIcon}
            alt=""
            src="/emailmarketingpng@2x.png"
          />
          <div className={styles.personalizedEmailMarketingParent}>
            <b className={styles.personalizedEmailMarketing}>
              Personalized Email Marketing
            </b>
            <b className={styles.sendExactlyWhatContainer}>
              <span className={styles.sendExactlyWhatContainer1}>
                <p className={styles.sendExactlyWhat}>Send exactly what your</p>
                <p className={styles.sendExactlyWhat}>contacts want</p>
              </span>
            </b>
            <div className={styles.craftEmailNewslettersContainer}>
              <span className={styles.sendExactlyWhatContainer1}>
                <p className={styles.sendExactlyWhat}>
                  Craft email newsletters, campaigns, and promotions that
                </p>
                <p className={styles.sendExactlyWhat}>
                  connect with your customers. Customize your communication to
                </p>
                <p className={styles.sendExactlyWhat}>
                  offer exactly what they are looking for.
                </p>
              </span>
            </div>
            <div className={styles.spanelementorDividerSeparat} />
            <div className={styles.contactListSizesContainer}>
              <span className={styles.sendExactlyWhatContainer1}>
                <p className={styles.sendExactlyWhat}>
                  Contact list sizes increase 143% with personalized
                </p>
                <p className={styles.sendExactlyWhat}>
                  <span>email marketing. </span>
                  <span className={styles.readTheReport}>Read the report</span>
                </p>
              </span>
            </div>
            <div className={styles.emailMarketingParent}>
              <div className={styles.emailMarketing}>Email marketing</div>
              <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
              <div className={styles.dynamicContent}>Dynamic content</div>
              <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
              <div className={styles.segmentation}>Segmentation</div>
              <img className={styles.vectorIcon2} alt="" src="/vector3.svg" />
              <div className={styles.successfulDeliverability}>
                Successful deliverability
              </div>
              <img className={styles.vectorIcon3} alt="" src="/vector4.svg" />
            </div>
            <div className={styles.aelementorButtonLink}>
              <div className={styles.personalizeYourEmail}>
                Personalize your email
              </div>
            </div>
          </div>
        </div>
        <div className={styles.object}>
          <img className={styles.objectChild} alt="" src="/vector-13.svg" />
        </div>
      </div>
      <AutomationContainer />
      <SalesAutomationContainer />
      <MessageContainer />
      <SalesEngagementContainer />
      <SuccessContainer />
      <div className={styles.body1}>
        <div className={styles.teamUpWithYourFavoriteAppParent}>
          <b className={styles.teamUpWithContainer}>
            <span className={styles.sendExactlyWhatContainer1}>
              <p className={styles.sendExactlyWhat}>Team up with your</p>
              <p className={styles.sendExactlyWhat}>favorite apps</p>
            </span>
          </b>
          <div className={styles.with870IntegrationsContainer}>
            <span className={styles.sendExactlyWhatContainer1}>
              <p className={styles.sendExactlyWhat}>
                With 870+ integrations like Shopify,
              </p>
              <p className={styles.sendExactlyWhat}>
                WordPress, and Zapier in our app
              </p>
              <p className={styles.sendExactlyWhat}>
                marketplace, you’ll have all the marketing
              </p>
              <p className={styles.sendExactlyWhat}>
                tools you need to succeed.
              </p>
            </span>
          </div>
          <div className={styles.viewAllApps}>View all apps</div>
          <div className={styles.div}></div>
          <img
            className={styles.appsGroup768x366pngIcon}
            alt=""
            src="/appsgroup768x366png@2x.png"
          />
        </div>
      </div>
      <CustomerSpotlightsContainer />
      <div className={styles.body2}>
        <div className={styles.frameParent}>
          <div className={styles.tryItNowForFreeParent}>
            <div className={styles.tryItNow}>Try it now, for free</div>
            <div className={styles.noCreditCard}>
              No credit card required. Instant setup.
            </div>
          </div>
          <div className={styles.inputacInputParent}>
            <div className={styles.inputacInput}>
              <div className={styles.divplaceholder}>
                <div className={styles.emailAddress}>Email Address</div>
              </div>
            </div>
            <div className={styles.buttonactButton}>
              <div className={styles.startYourFree}>Start your free trial</div>
            </div>
          </div>
        </div>
      </div>
      <TestimonialContainer />
      <div className={styles.footer}>
        <Footer />
        <BottomFooter />
        <PricingContainer />
        <CustomerSupportContainer />
      </div>
    </div>
  );
};

export default Edit1;
