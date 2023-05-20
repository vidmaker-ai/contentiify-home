import { FunctionComponent } from "react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import styles from "./Header.module.css";
const Header: FunctionComponent = () => {
  return (
    <header className={styles.top} id="header">
      <div className={styles.sectionelementorSection}>
        <i className={styles.heyThereFreeContainer}>
          <span className={styles.heyThereFreeContainer1}>
            {`Hey there! Free trials are available for Standard and Essentials plans. `}
            <a
              className={styles.startForFreeToday}
              href="https://app.contentiify.com/login"
              target="_blank"
            >
              <span className={styles.startForFree}>Start for free today.</span>
            </a>
          </span>
        </i>
      </div>
      <div className={styles.cate}>
        <img className={styles.contentiifyIcon} alt="" src="/contentiify.svg" />
        <div className={styles.menu}>
          <div className={styles.catgory}>
            <div className={styles.products}>
              <b className={styles.requestDemo}>Products</b>
              <div className={styles.i} />
            </div>
            <div className={styles.platform}>
              <b className={styles.requestDemo}>Platform</b>
              <div className={styles.i} />
            </div>
            <div className={styles.pricing}>
              <b className={styles.requestDemo}>Pricing</b>
            </div>
            <div className={styles.pricing}>
              <b className={styles.requestDemo}>Request demo</b>
            </div>
          </div>
        </div>
        <div className={styles.loginParent}>
          <div className={styles.login}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <div className={styles.english}>English</div>
              <div className={styles.div}></div>
            </div>
            <div className={styles.contact}>Contact</div>
            <div className={styles.contact}>Login</div>
          </div>
          <div className={styles.formactFreeTrialSignup}>
            <input
              className={styles.inputacInput}
              type="email"
              placeholder="Email Address"
            />
            <Button
              variant="solid"
              w="129px"
              colorScheme="tealvinh"
              size="md"
              rightIcon={<ArrowForwardIcon />}
            >
              Try it free
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
