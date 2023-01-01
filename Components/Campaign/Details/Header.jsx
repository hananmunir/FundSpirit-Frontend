import React, { useState } from "react";
import styles from "./index.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillTag, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

import { BsFacebook } from "react-icons/bs";
import { SlShareAlt } from "react-icons/sl";
import Fund from "../Fund/Fund";
function Header() {
  const [showFund, setShowFund] = useState(false);
  return (
    <Container fluid className={styles.headerContainer}>
      <Row>
        <Col lg={6}>
          <img
            src='/Images/Campaign-1.jpg'
            loading='lazy'
            className={styles.headerImage}
          />
          <div className='ms-2 mt-3 w-50 d-flex align-items-center justify-content-around'>
            <span className='fs-7 d-flex align-items-center'>
              {" "}
              <AiFillTag className='me-1' />
              Climate Change
            </span>
            <span className='fs-7'>
              {" "}
              <AiFillTag className='me-1' />
              Education
            </span>
            <span className='fs-7'>
              {" "}
              <AiFillTag className='me-1' />
              Water
            </span>
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
            <span className={styles.heading + " fs-1"}>
              Education for all children
            </span>
            <span className={styles.subHeading}>
              Help young children get educated. Help young children get
              educated.
            </span>
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
      <Fund show={showFund} setShow={setShowFund} />
    </Container>
  );
}

export default Header;
