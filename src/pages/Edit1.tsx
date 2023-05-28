import { FunctionComponent } from "react";
import { Button } from "@chakra-ui/react";
import Header from "../components/Header";
import ContentSection from "../components/ContentSection";
import ContentGeneratorContainer from "../components/ContentGeneratorContainer";
import JourneyContainer from "../components/JourneyContainer";
import ContentContainer from "../components/ContentContainer";
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
      <div className={styles.contentifyDraft20230521Inner}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.contentiifyParent}>
              <img
                className={styles.contentiifyIcon}
                alt=""
                src="/contentiify.svg"
              />
              <div className={styles.catgoryWrapper}>
                <div className={styles.catgory}>
                  <div className={styles.products}>
                    <div className={styles.features}>Features</div>
                    <img className={styles.icon} alt="" src="/1.svg" />
                  </div>
                  <div className={styles.platform}>
                    <div className={styles.features}>Resources</div>
                    <img className={styles.icon} alt="" src="/11.svg" />
                  </div>
                  <div className={styles.pricing}>
                    <div className={styles.features}>Pricing</div>
                  </div>
                  <div className={styles.pricing}>
                    <div className={styles.features}>Request demo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.login}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <div className={styles.english}>English</div>
              <img className={styles.icon2} alt="" src="/2.svg" />
            </div>
            <div className={styles.login1}>Login</div>
          </div>
          <div className={styles.buttonactButtonWrapper}>
            <Button
              className={styles.buttonactButton}
              variant="solid"
              w="129px"
              colorScheme="tealvinh2"
            >
              Try it free
            </Button>
          </div>
          <img
            className={styles.vectorStrokeIcon}
            alt=""
            src="/vector-stroke.svg"
          />
        </div>
      </div>
      <ContentSection />
      <ContentGeneratorContainer />
      <JourneyContainer />
      <ContentContainer />
      <AutomationContainer />
      <SalesAutomationContainer />
      <MessageContainer />
      <SalesEngagementContainer />
      <SuccessContainer />
      <div className={styles.body}>
        <div className={styles.teamUpWithYourFavoriteAppParent}>
          <b className={styles.teamUpWithContainer}>
            <span className={styles.teamUpWithContainer1}>
              <p className={styles.teamUpWith}>Team up with your</p>
              <p className={styles.teamUpWith}>favorite apps</p>
            </span>
          </b>
          <div className={styles.with870IntegrationsContainer}>
            <span className={styles.teamUpWithContainer1}>
              <p className={styles.teamUpWith}>
                With 870+ integrations like Shopify,
              </p>
              <p className={styles.teamUpWith}>
                WordPress, and Zapier in our app
              </p>
              <p className={styles.teamUpWith}>
                marketplace, you’ll have all the marketing
              </p>
              <p className={styles.teamUpWith}>tools you need to succeed.</p>
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
      <div className={styles.body1}>
        <div className={styles.frameGroup}>
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
            <div className={styles.buttonactButton1}>
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
