import { FunctionComponent } from "react";
import ContainerCard from "./ContainerCard";
import ContainerLandingPage from "./ContainerLandingPage";
import styles from "./SuccessContainer.module.css";
const SuccessContainer: FunctionComponent = () => {
  return (
    <div className={styles.body}>
      <img className={styles.bodyChild} alt="" src="/vector-14.svg" />
      <div className={styles.divelementorFlipBoxLayerParent}>
        <ContainerCard
          svg="/svg3.svg"
          freeHelpCourses="Free help courses"
          andSupport="and support"
          getStarted="Get started"
        />
        <ContainerCard
          svg="/svg4.svg"
          freeHelpCourses="Advanced marketing"
          andSupport="and sales reporting"
          getStarted="Check results"
          propRight="270px"
          propLeft="540px"
          propLeft1="126.2px"
        />
        <ContainerCard
          svg="/svg5.svg"
          freeHelpCourses="Excellent email"
          andSupport="deliverability"
          getStarted="Send better"
          propRight="540px"
          propLeft="270px"
          propLeft1="112.97px"
        />
        <ContainerCard
          svg="/svg6.svg"
          freeHelpCourses="Gmail and Outlook inbox"
          andSupport="extensions"
          getStarted="Manage inbox"
          propRight="810px"
          propLeft="0px"
          propLeft1="128.34px"
        />
        <ContainerLandingPage
          landingPageId="24x24x3069058693"
          automationId="Landing pages"
          buildingText="Start building"
        />
        <ContainerLandingPage
          landingPageId="24x24x242052795"
          automationId="Pre-built automations"
          buildingText="Target contacts"
          propRight="270px"
          propLeft="540px"
          propLeft1="139.23px"
        />
        <div className={styles.divelementorFlipBoxLayer}>
          <div className={styles.div}></div>
          <div className={styles.divelementorFlipBoxLayer1}>
            <img className={styles.svgIcon} alt="" src="/svg9.svg" />
            <div className={styles.h3elementorFlipBoxLayer}>
              <div className={styles.integratedAndEmbeddableFormContainer}>
                <p className={styles.integratedAnd}>Integrated and</p>
                <p className={styles.integratedAnd}>embeddable forms</p>
              </div>
            </div>
            <div className={styles.makeForms}>Make forms</div>
          </div>
        </div>
        <ContainerLandingPage
          landingPageId="24x24x4093273496"
          automationId="CRM"
          buildingText="Automate sales"
          propRight="810px"
          propLeft="0px"
          propLeft1="140.75px"
        />
        <div className={styles.everythingYouNeedContainer}>
          <span className={styles.everythingYouNeedContainer1}>
            <p className={styles.integratedAnd}>
              Everything you need to make the
            </p>
            <p className={styles.integratedAnd}>path to success shorter</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SuccessContainer;
