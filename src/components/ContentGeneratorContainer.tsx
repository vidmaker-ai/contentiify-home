import { FunctionComponent } from "react";
import styles from "./ContentGeneratorContainer.module.css";
const ContentGeneratorContainer: FunctionComponent = () => {
  return (
    <div className={styles.body}>
      <b
        className={styles.the1Content}
      >{`The #1 Content Intelligence & Content Generator Platform`}</b>
      <div className={styles.bodyInner}>
        <div className={styles.groupParent}>
          <div className={styles.chatMessageFromActivecampaiParent}>
            <div className={styles.chatMessageFromActivecampai}>
              <div className={styles.span}>
                <div className={styles.haveAnySpecificContainer}>
                  <p className={styles.haveAnySpecific}>
                    Have any specific question?
                  </p>
                  <p className={styles.haveAnySpecific}>
                    Don’t hesitate to ask!
                  </p>
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
                  <div className={styles.divdriftWidgetAvatar}>
                    <img
                      className={styles.image4Icon}
                      alt=""
                      src="/image-4@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.divdriftControllerIconUnre}>
                <div className={styles.div}>1</div>
              </div>
            </div>
          </div>
          <img
            className={styles.contentify251}
            alt=""
            src="/contentify--2-5-111@2x.png"
          />
          <div className={styles.groupWrapper}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <b className={styles.spy100cContents}>Spy 100°C contents!</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentGeneratorContainer;
