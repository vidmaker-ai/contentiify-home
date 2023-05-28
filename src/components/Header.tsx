import { FunctionComponent } from "react";
import { Button } from "@chakra-ui/react";
import styles from "./Header.module.css";
const Header: FunctionComponent = () => {
  return (
    <div className={styles.top}>
      <div className={styles.sectionelementorSection}>
        <i className={styles.heyThereFreeContainer}>
          {`Hey there! Free trials are available for Standard and Essentials plans. `}
          <a
            className={styles.startForFreeToday}
            href="https://app.contentiify.com/login"
            target="_blank"
          >
            <span className={styles.startForFree}>Start for free today.</span>
          </a>
        </i>
      </div>
      <div className={styles.cateWrapper}>
        <div className={styles.cate}>
          <div className={styles.cateInner}>
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
                    <img className={styles.icon} alt="" src="/.svg" />
                  </div>
                  <div className={styles.platform}>
                    <div className={styles.features}>Resources</div>
                    <img className={styles.icon} alt="" src="/1.svg" />
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
    </div>
  );
};

export default Header;
