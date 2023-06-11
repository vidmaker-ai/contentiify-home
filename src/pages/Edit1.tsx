import { FunctionComponent } from "react";
import { Button } from "@chakra-ui/react";
import Header from "../components/Header";
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
                src="/contentiify1.svg"
              />
              <div className={styles.catgoryWrapper}>
                <div className={styles.catgory}>
                  <div className={styles.products}>
                    <div className={styles.features}>Features</div>
                    <img className={styles.icon} alt="" src="/3.svg" />
                  </div>
                  <div className={styles.platform}>
                    <div className={styles.features}>Resources</div>
                    <img className={styles.icon} alt="" src="/11111.svg" />
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
              <img className={styles.vectorIcon} alt="" src="/vector101.svg" />
              <div className={styles.english}>English</div>
              <img className={styles.icon2} alt="" src="/211.svg" />
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
            src="/vector-stroke1.svg"
          />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.frameGroup}>
          <div className={styles.groupParent}>
            <div className={styles.empowerYourBusinessWithVirParent}>
              <b className={styles.empowerYourBusinessContainer}>
                <span className={styles.empowerYourBusinessContainer1}>
                  <p className={styles.empowerYourBusiness}>
                    Empower your business
                  </p>
                  <p className={styles.empowerYourBusiness}>
                    with viral contents
                  </p>
                </span>
              </b>
              <img
                className={styles.groupChild}
                alt=""
                src="/vector-1211.svg"
              />
            </div>
            <div className={styles.theSocialMediaContainer}>
              <span className={styles.empowerYourBusinessContainer1}>
                <p
                  className={styles.empowerYourBusiness}
                >{`The social media content, marketing campaign management, and even spying `}</p>
                <p className={styles.empowerYourBusiness}>
                  your competitors to get insights with low-cost.
                </p>
              </span>
            </div>
            <div className={styles.buttonactButton1}>
              <div className={styles.getViral}>Get viral</div>
            </div>
            <div className={styles.tryItFree}>
              Try it free. No credit card required. Instant setup.
            </div>
          </div>
          <img
            className={styles.imageCrop1Icon}
            alt=""
            src="/image-crop-11@2x.png"
          />
          <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
        </div>
        <img className={styles.bodyChild} alt="" src="/frame-7321@2x.png" />
      </div>
      <ContentGeneratorContainer />
      <div className={styles.body1}>
        <div className={styles.bodyInner}>
          <div className={styles.contentify11Parent}>
            <img
              className={styles.contentify11}
              alt=""
              src="/contentify--1-1111@2x.png"
            />
            <div className={styles.rectangleParent}>
              <div className={styles.groupItem} />
              <b className={styles.audienceAnalyticsForContainer}>
                <span className={styles.empowerYourBusinessContainer1}>
                  <p className={styles.empowerYourBusiness}>
                    Audience analytics
                  </p>
                  <p className={styles.empowerYourBusiness}> for any post!</p>
                </span>
              </b>
            </div>
          </div>
        </div>
        <b
          className={styles.spyYourCompetitor}
        >{`Spy your competitor ‘s audience for insights & A/B testing`}</b>
      </div>
      <div className={styles.body2}>
        <div className={styles.contentify21Wrapper}>
          <img
            className={styles.contentify21}
            alt=""
            src="/contentify--2-11@2x.png"
          />
        </div>
        <b className={styles.tailorContentsBasedContainer}>
          <span className={styles.empowerYourBusinessContainer1}>
            <span>{`Tailor contents based on `}</span>
            <span className={styles.hotTopic}>HOT TOPIC</span>
            <span className={styles.span}>{` `}</span>
            <span>for Organic traffics</span>
          </span>
        </b>
      </div>
      <JourneyContainer />
      <ContentContainer />
      <AutomationContainer />
      <SalesAutomationContainer />
      <MessageContainer />
      <SalesEngagementContainer />
      <SuccessContainer />
      <div className={styles.body3}>
        <div className={styles.teamUpWithYourFavoriteAppParent}>
          <b className={styles.teamUpWithContainer}>
            <span className={styles.empowerYourBusinessContainer1}>
              <p className={styles.empowerYourBusiness}>Team up with your</p>
              <p className={styles.empowerYourBusiness}>favorite apps</p>
            </span>
          </b>
          <div className={styles.with870IntegrationsContainer}>
            <span className={styles.empowerYourBusinessContainer1}>
              <p className={styles.empowerYourBusiness}>
                With 870+ integrations like Shopify,
              </p>
              <p className={styles.empowerYourBusiness}>
                WordPress, and Zapier in our app
              </p>
              <p className={styles.empowerYourBusiness}>
                marketplace, you’ll have all the marketing
              </p>
              <p className={styles.empowerYourBusiness}>
                tools you need to succeed.
              </p>
            </span>
          </div>
          <div className={styles.viewAllApps}>View all apps</div>
          <div className={styles.div}></div>
          <img
            className={styles.appsGroup768x366pngIcon}
            alt=""
            src="/appsgroup768x366png111@2x.png"
          />
        </div>
      </div>
      <CustomerSpotlightsContainer />
      <div className={styles.body4}>
        <div className={styles.frameContainer}>
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
            <div className={styles.buttonactButton2}>
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
