import { FunctionComponent } from "react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import styles from "./ContentSection.module.css";
const ContentSection: FunctionComponent = () => {
  return (
    <div className={styles.body}>
      <div className={styles.bodyInner}>
        <div className={styles.frameParent}>
          <div className={styles.groupWrapper}>
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
                  src="/vector-12.svg"
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
              <Button
                className={styles.buttonactButton}
                variant="solid"
                w="151.510009765625px"
                colorScheme="tealvinh2"
                rightIcon={<ArrowForwardIcon />}
              >
                Get viral
              </Button>
              <div className={styles.tryItFree}>
                Try it free. No credit card required. Instant setup.
              </div>
            </div>
          </div>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          <img
            className={styles.imageCrop1Icon}
            alt=""
            src="/image-crop-1@2x.png"
          />
        </div>
      </div>
      <img className={styles.bodyChild} alt="" src="/frame-732@2x.png" />
    </div>
  );
};

export default ContentSection;
