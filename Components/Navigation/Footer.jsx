import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import styles from "./Navigation.module.css";

function Footer() {
  return (
    <div className={styles.footerSection}>
      <Container>
        <Row className={styles.footerContainer}>
          <Col lg>
            <div className={styles.footerAbout}>
              <span className={styles.footerAboutTitle}>About TotheStars</span>
              <span className={styles.footerAboutDescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                dolorem magnam nam architecto quod aliquid, et officia, quis,
                quidem eveniet corrupti similique ea? Provident ullam
                perferendis expedita commodi vitae repellendus.
              </span>
            </div>
          </Col>
          <Col lg>
            <div className={styles.footerNavigation}>
              <span className={styles.footerNavigationTitle}>Navigation</span>
              <div className={styles.navLinksContainer}>
                <ul className={styles.navigationLinks}>
                  <li className={styles.navigationLink}>Home</li>
                  <li className={styles.navigationLink}>Campaigns</li>
                  <li className={styles.navigationLink}>Organizations</li>
                  <li className={styles.navigationLink}>Track Funds</li>
                </ul>
                <ul
                  className={
                    styles.navigationLinks + " " + styles.rightNavigationLinks
                  }
                >
                  <li className={styles.navigationLink}>About Us</li>
                  <li className={styles.navigationLink}>Contact Us</li>
                  <li className={styles.navigationLink}>Privacy Policy</li>
                  <li className={styles.navigationLink}></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg>
            <div className={styles.footerSubsLetter}>
              <span className={styles.footerSubsLetterTitle}>
                Subscribe Newsletter
              </span>
              <span className={styles.footerSubsLetterDescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              </span>
              <div className={styles.footerEmail}>
                <input
                  type='text'
                  className={styles.footerEmailInput}
                  placeholder='Enter email'
                />
                <button className={styles.footerEmailButton}>Send</button>
              </div>
            </div>
          </Col>
        </Row>
        <div className={styles.footerSocialLinks}>
          <FaFacebookF className={styles.footerSocialIcon + " " + styles.fb} />
          <FaTwitter className={styles.footerSocialIcon + " " + styles.tw} />
          <FaInstagram
            className={styles.footerSocialIcon + " " + styles.insta}
          />
          <FaPinterestP
            className={styles.footerSocialIcon + " " + styles.pint}
          />
        </div>
      </Container>
    </div>
  );
}

export default Footer;
