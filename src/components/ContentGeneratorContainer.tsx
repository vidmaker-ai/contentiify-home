import { FunctionComponent } from "react";
import styles from "./ContentGeneratorContainer.module.css";
const ContentGeneratorContainer: FunctionComponent = () => {
  return (
    <div className={styles.body}>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group1@2x.png" />
      <div className={styles.bodyChild} />
      <div className={styles.the1ContentGenerationPlatParent}>
        <b className={styles.the1Content}>The #1 Content Generation Platform</b>
        <b className={styles.sales}>Sales</b>
        <b className={styles.ecommerce}>Ecommerce</b>
        <b className={styles.agency}>Agency</b>
        <b className={styles.marketing}>Marketing</b>
        <div className={styles.sectionelementorSection} />
        <div className={styles.sectionelementorSection1}>
          <div className={styles.divelementorWidgetContainer} />
        </div>
        <div className={styles.sectionelementorSection2}>
          <div className={styles.divelementorWidgetContainer} />
        </div>
        <div className={styles.sectionelementorSection3}>
          <div className={styles.divelementorWidgetContainer} />
        </div>
        <div className={styles.iframe}>
          <div className={styles.youtube}>
            <img
              className={styles.divytpCuedThumbnailOverlayIcon}
              alt=""
              src="/divytpcuedthumbnailoverlay.svg"
            />
            <img
              className={styles.divytpGradientTopIcon}
              alt=""
              src="/divytpgradienttop@2x.png"
            />
            <img className={styles.svgIcon} alt="" src="/svg.svg" />
            <div className={styles.divytpChromeTop}>
              <div className={styles.divytpTitle}>
                <div className={styles.divytpTitleText}>
                  <div className={styles.aytpTitleLink}>
                    <div className={styles.marketingAndSales}>
                      Marketing and Sales Automation can save you time and grow
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.div}>
                <img className={styles.svgIcon1} alt="" src="/svg1.svg" />
                <div className={styles.divytpCopylinkTitle}>
                  <div className={styles.div1}>Копирова</div>
                </div>
              </div>
              <div className={styles.divytpTitleChannel}>
                <img
                  className={styles.activecampaignIcon}
                  alt=""
                  src="/---activecampaign@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.chatMessageFromActivecampai}>
          <div className={styles.span}>
            <div className={styles.thanksForChattingContainer}>
              <p className={styles.thanksForChatting}>
                Thanks for chatting with us! Are
              </p>
              <p className={styles.thanksForChatting}>
                you a current ActiveCampaign
              </p>
              <p className={styles.thanksForChatting}>customer?</p>
            </div>
          </div>
        </div>
        <img
          className={styles.closeDriftWidgetMessengerP}
          alt=""
          src="/close-drift-widget-messenger-preview-overlay.svg"
        />
        <div className={styles.openChatWithActivecampaign}>
          <div className={styles.divdriftWidgetControllerIc}>
            <div className={styles.divdriftWidgetRecipientAva}>
              <img
                className={styles.divdriftWidgetAvatarIcon}
                alt=""
                src="/divdriftwidgetavatar@2x.png"
              />
            </div>
          </div>
          <div className={styles.divdriftControllerIconUnre}>
            <div className={styles.div2}>1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentGeneratorContainer;
