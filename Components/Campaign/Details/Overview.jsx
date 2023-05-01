import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.css";
import { TbFileDescription } from "react-icons/tb";
import { GiBullseye } from "react-icons/gi";
function Overview({campaign}) {
  return (
    <>
      <Container>
      <h2 className={styles.campaignTitle}>Campaign Details</h2>
<Col lg={12} className='d-flex flex-column' style={{padding: "2rem" }}>
  <div className="d-flex flex-column">
    <div className="d-flex flex-row justify-content-between align-items-center">
      <div className={styles.infoTitle}>Title</div>
      <div>{campaign?.title}</div>
    </div>
    <div className="d-flex flex-row justify-content-between align-items-center">
      <div className={styles.infoTitle}>Start Date</div>
      <div>{campaign?.startDate}</div>
    </div>
    <div className="d-flex flex-row justify-content-between align-items-center">
      <div className={styles.infoTitle}>End Date</div>
      <div>{campaign?.endDate}</div>
    </div>
    <div className="d-flex flex-row justify-content-between align-items-center">
      <div className={styles.infoTitle}>Current Progress</div>
      <div>{campaign?.currentProgress}</div>
    </div>
    <div className="d-flex flex-row justify-content-between align-items-center">
      <div className={styles.infoTitle}>Required Funds</div>
      <div>{campaign?.donationAmount}</div>
    </div>
    <div className="d-flex flex-row justify-content-between align-items-center">
      <div className={styles.infoTitle}>Collected Funds</div>
      <div>{campaign?.donationCurrency}</div>
    </div>
    <hr />
    <div className={styles.infoTitle}>Enrolled Organizations</div>
    <div>{campaign?.organizationName}</div>
  </div>
</Col>

        <Row className='mt-5'>
          <span className={styles.projectTitle}>Project Overview</span>
          <Col lg={12} className='d-flex flex-column'>
            <div className='d-flex flex-row align-items-center justifty-content-center mb-2'>
              <TbFileDescription color='#1d1ce5' className='me-1' size={30} />{" "}
              <span className={styles.projectSubtitle}>Summary</span>
            </div>
            <span className='w-50'>
         {campaign?.description}
            </span>
          </Col>
          <Col className='d-flex flex-column mt-5 mb-3'>
            <div className='d-flex flex-row align-items-center justifty-content-center mb-2'>
              <GiBullseye color='#1d1ce5' className='me-1' size={30} />{" "}
              <span className={styles.projectSubtitle}>Goals</span>
            </div>
            <span className='w-50'>
             {campaign?.goals}
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Overview;
