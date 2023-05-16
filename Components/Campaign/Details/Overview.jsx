import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.css";
import { TbFileDescription } from "react-icons/tb";
import { GiBullseye } from "react-icons/gi";
import BackedSection from "../../Accounts/UserSections/BackedSection";
function Overview({ campaign }) {
  console.log(campaign);
  return (
    <>
      <Container>
        <Row className='mt-5'>
          <span className={styles.projectTitle}>Campaign Details</span>
          <Col
            lg={12}
            className='d-flex flex-column'
            style={{ padding: "2rem" }}
          >
            <div className='d-flex flex-column'>
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <div className={styles.infoTitle}>Start Date</div>
                <div>{campaign?.createdAt.split("T")[0]}</div>
              </div>

              <div className='d-flex flex-row justify-content-between align-items-center'>
                <div className={styles.infoTitle}>Collected Funds</div>
                <div>{campaign?.totalFundings}$</div>
              </div>
              <div className={styles.infoTitle}>Enrolled Organizations</div>
              <div>{campaign?.organizationName}</div>
            </div>
          </Col>

          <span className={`${styles.projectTitle} mt-5`}>
            Project Overview
          </span>
          <Col lg={12} className='d-flex flex-column'>
            <div className='d-flex flex-row align-items-center justifty-content-center mb-2'>
              <TbFileDescription color='#1d1ce5' className='me-1' size={30} />{" "}
              <span className={styles.projectSubtitle}>Summary</span>
            </div>
            <span className='w-50'>{campaign?.description}</span>
          </Col>
          <Col className='d-flex flex-column mt-5 mb-3'>
            <div className='d-flex flex-row align-items-center justifty-content-center mb-2'>
              <GiBullseye color='#1d1ce5' className='me-1' size={30} />{" "}
              <span className={styles.projectSubtitle}>Goals</span>
            </div>
            <span className='w-50'>{campaign?.goals}</span>
          </Col>
          <span className={`${styles.projectTitle} mt-5`}>Enrolled NPO's</span>
          <Col
            lg={12}
            className='d-flex flex-column'
            style={{ padding: "2rem" }}
          >
            <div
              className='w-100 d-flex align-items-center justify-content-center'
              style={{
                height: "30vh",
              }}
            >
              <span
                style={{
                  color: "gray",
                }}
                className='fs-3'
              >
                Coming Soon
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Overview;
