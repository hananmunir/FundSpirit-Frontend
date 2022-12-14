import React from "react";
import styles from "./About.module.css";
import { Container, Row, Col } from "react-bootstrap";

function AboutUs() {
  return (
    <Container fluid className='aboutUsContainer'>
      <Row
        style={{
          backgroundColor: "#1f2829",
          color: "#fff",
          padding: "5rem 2rem",
          justifyContent: "space-around",
        }}
      >
        <Col lg={6} md={12} sm={12} className='aboutUsLeft'>
          <div
            className='aboutUsLeftContent'
            style={{
              display: "flex",
              flexDirection: "column",

              margin: " 10% 0 ",
            }}
          >
            <span className={styles.aboutUsHeading + " fs-1"}>About Us</span>
            <span className='aboutUsLeftDesc' style={{ textAlign: " center" }}>
              FundSpirit is a blockchain based crowdfunding platform for
              Non-Profit Organizations (NPOs) in Pakistan. FundSpirit aims to
              revolutionize philanthropy in Pakistan by providing a transparent
              and accountable platform for donors to donate to NPOs. FundSpirit
              is a platform that aims to provide a solution to the problem of
              lack of transparency and accountability in the NPO sector in
              Pakistan. FundSpirit is a platform that aims to provide a solution
              to the problem of lack of transparency and accountability in the
              NPO sector in Pakistan.
            </span>
          </div>
        </Col>
        <Col lg={5} md={12} sm={12} className='aboutUsRight'>
          <div className='aboutUsRightContent'>
            <img
              src='/Images/CAT.jpg'
              alt='About Us Image'
              border='0'
              className='aboutUsRightImg'
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "#fff",
          padding: "5rem 0",
          justifyContent: "space-around",
        }}
      >
        <Col
          lg={12}
          md={12}
          sm={12}
          className='aboutUsOurWork'
          style={{
            width: "93%",
            margin: "auto",
          }}
        >
          <div
            className='aboutUsOurWorkContent'
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span className={styles.aboutUsOurWorkHeading + " fs-1"}>
              Our Work
            </span>
            <span className={styles.aboutUsOurWorkDesc}>
              FundSpirit is a blockchain based crowdfunding platform for
              Non-Profit Organizations (NPOs) in Pakistan. FundSpirit aims to
              revolutionize philanthropy in Pakistan by providing a transparent
              and accountable platform for donors to donate to NPOs. FundSpirit
              is a platform that aims to provide a solution to the problem of
              lack of transparency and accountability in the NPO sector in
              Pakistan. FundSpirit is a platform that aims to provide a solution
              to the problem of lack of transparency and accountability in the
              NPO sector in Pakistan.
              <br />
              <br />
              FundSpirit is a blockchain based crowdfunding platform for
              Non-Profit Organizations (NPOs) in Pakistan. FundSpirit aims to
              revolutionize philanthropy in Pakistan by providing a transparent
              and accountable platform for donors to donate to NPOs. FundSpirit
              is a platform that aims to provide a solution to the problem of
              lack of transparency and accountability in the NPO sector in
              Pakistan. FundSpirit is a platform that aims to provide a solution
              to the problem of lack of transparency and accountability in the
              NPO sector in Pakistan.
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
