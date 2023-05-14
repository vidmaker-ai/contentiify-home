import { FunctionComponent } from "react";
import styles from "./PricingContainer.module.css";
const PricingContainer: FunctionComponent = () => {
  return (
    <div className={styles.detailedCate}>
      <div className={styles.divelementorContainer}>
        <div className={styles.divelementorWidgetWrap}>
          <div className={styles.a}>
            <b className={styles.customerExperienceAutomationContainer}>
              <p className={styles.customerExperience}>Customer Experience</p>
              <p className={styles.customerExperience}>Automation</p>
            </b>
          </div>
          <div className={styles.ulelementorIconListItems}>
            <div className={styles.emailMarketingAutomation}>
              Email Marketing Automation
            </div>
            <div className={styles.marketingAutomation}>
              Marketing Automation
            </div>
            <div className={styles.salesAutomation}>Sales Automation</div>
            <div className={styles.salesEngagement}>Sales Engagement</div>
            <div className={styles.serviceSupport}>{`Service & Support`}</div>
          </div>
        </div>
        <div className={styles.divelementorWidgetWrap1}>
          <div className={styles.a}>
            <b className={styles.customerExperienceAutomationContainer}>
              <p className={styles.customerExperience}>Omni-channel</p>
              <p className={styles.customerExperience}>Marketing</p>
            </b>
          </div>
          <div className={styles.ulelementorIconListItems1}>
            <div className={styles.landingPages}>Landing Pages</div>
            <div className={styles.liveChat}>Live Chat</div>
            <div className={styles.smsMarketing}>SMS Marketing</div>
            <div className={styles.socialMediaMarketing}>
              Social Media Marketing
            </div>
            <div className={styles.webPersonalization}>Web Personalization</div>
            <div className={styles.transactionalEmail}>Transactional Email</div>
          </div>
        </div>
        <div className={styles.divelementorWidgetWrap2}>
          <div className={styles.a2}>
            <b className={styles.customerExperienceAutomationContainer}>
              <p className={styles.customerExperience}>{`Getting Started &`}</p>
              <p className={styles.customerExperience}>Resources</p>
            </b>
          </div>
          <div className={styles.ulelementorIconListItems2}>
            <div className={styles.getStarted}>Get Started</div>
            <div className={styles.liveExpertWorkshop}>
              Live Expert Workshop
            </div>
            <div className={styles.strategySession}>1:1 Strategy Session</div>
            <div className={styles.community}>Community</div>
            <div className={styles.events}>Events</div>
            <div className={styles.helpResources}>Help Resources</div>
            <div className={styles.productUpdates}>Product Updates</div>
            <div className={styles.marketingGlossary}>Marketing Glossary</div>
            <div className={styles.blog}>Blog</div>
          </div>
        </div>
        <div className={styles.divelementorWidgetWrap3}>
          <div className={styles.divelementorWidgetWrap4}>
            <div className={styles.a3}>
              <b className={styles.customerExperienceAutomationContainer}>
                <p className={styles.customerExperience}>{`Apps &`}</p>
                <p className={styles.customerExperience}>Integrations</p>
              </b>
            </div>
            <div className={styles.ulelementorIconListItems3}>
              <div className={styles.integrationMarketplace}>
                Integration Marketplace
              </div>
              <div className={styles.developerCenter}>Developer Center</div>
              <div className={styles.freeTools}>Free Tools</div>
              <div className={styles.automationRecipes}>Automation Recipes</div>
            </div>
          </div>
          <div className={styles.divelementorWidgetWrap5}>
            <b className={styles.becomeAPartner}>Become a Partner</b>
            <div className={styles.ulelementorIconListItems4}>
              <div className={styles.agencyReseller}>{`Agency & Reseller`}</div>
              <div className={styles.affiliate}>Affiliate</div>
              <div className={styles.isvDeveloper}>{`ISV & Developer`}</div>
            </div>
          </div>
        </div>
        <div className={styles.divelementorWidgetWrap6}>
          <div className={styles.divelementorWidgetWrap7}>
            <div className={styles.a}>
              <b className={styles.customerExperienceAutomationContainer}>
                <p className={styles.customerExperience}>About</p>
                <p className={styles.customerExperience}>ActiveCampaign</p>
              </b>
            </div>
            <div className={styles.ulelementorIconListItems1}>
              <div className={styles.whyActivecampaign}>Why ActiveCampaign</div>
              <div className={styles.howWeCompare}>How We Compare</div>
              <div className={styles.customerStories}>Customer Stories</div>
              <div className={styles.careers}>Careers</div>
              <div className={styles.faq}>FAQ</div>
              <div className={styles.newsroom}>Newsroom</div>
            </div>
          </div>
          <div className={styles.divelementorWidgetWrap8}>
            <b className={styles.learnMore}>Learn more</b>
            <div className={styles.ulelementorIconListItems6}>
              <div className={styles.contactUs}>Contact Us</div>
              <div className={styles.requestADemo}>Request a Demo</div>
              <div className={styles.freeTrial}>Free Trial</div>
              <div className={styles.pricing}>Pricing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingContainer;
