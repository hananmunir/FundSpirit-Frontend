import React, { useState } from "react";
import styles from "./index.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillTag, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

import { BsFacebook } from "react-icons/bs";
import { SlShareAlt } from "react-icons/sl";
import { DummyCampaigns } from "../../../constants/DummyData/Campaigns";
import Fund from "../Fund/Fund";
function Header({ campaign }) {
  const [showFund, setShowFund] = useState(false);
  console.log(campaign);
  return (
    <Container fluid className={styles.headerContainer}>
      <Row>
        <Col lg={6}>
          <img
            src={DummyCampaigns[0]?.imageUrl}
            loading='lazy'
            className={styles.headerImage}
          />
          <div className='ms-2 mt-3 d-flex align-items-center justify-content-start'>
            {campaign?.tags.map((tag) => (
              <span className='fs-7  me-2'>
                {" "}
                <AiFillTag className='me-1' />
                {tag}
              </span>
            ))}
          </div>
        </Col>
        <Col
          lg={6}
          className={
            "d-flex flex-column justify-content-between  " +
            styles.headerContentContainer
          }
        >
          <div className={styles.headerContent + " mt-4"}>
            <span className={styles.heading + " fs-1"}>{campaign?.name}</span>
            <span className={styles.subHeading}>{campaign?.subtitle}</span>
          </div>
          <div className={styles.CTA}>
            <button
              className={styles.btn + " me-3"}
              onClick={() => setShowFund(true)}
            >
              Fund
            </button>
            <div className={"d-flex flex-column " + styles.shareLinks}>
              <div className='fs-7 mb-2 align-items-center d-flex justify-content-center'>
                <SlShareAlt className='me-2' />
                <span>Share This Project</span>
              </div>
              {/* Share link on facebook */}
              <div className={"align-self-center  "}>
                <BsFacebook
                  fontSize={20}
                  className={"me-3 " + styles.linkIcon}
                />
                <AiFillTwitterCircle
                  fontSize={25}
                  className={"me-3 " + styles.linkIcon}
                />
                <AiFillLinkedin
                  fontSize={25}
                  className={"me-3 " + styles.linkIcon}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Fund show={showFund} setShow={setShowFund} address={campaign?.address} />
    </Container>
  );
}

export default Header;
