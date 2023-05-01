import React,{useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.css";
import { TbFileDescription } from "react-icons/tb";
import { GiBullseye } from "react-icons/gi";
import { useSelector } from "react-redux";
import BackedSection from "../../Accounts/UserSections/BackedSection";

function Goals({ organization }) {
  const state = useSelector((state) => state.user);
  const [npo, setNpo] = useState(state.npo);
  console.log("these are" + npo);

  return (
    <>
      <Container>
        <Row className='mt-5'>
        <h2 className={styles.orgTitle}>Organization Overview</h2>
        <Col lg={6} className='d-flex flex-column' style={{padding: "2rem" }}>
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div className={styles.infoTitle}>Email</div>
            <div>{organization?.email}</div>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div className={styles.infoTitle}>Phone</div>
            <div>{organization?.phone}</div>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div className={styles.infoTitle}>Address</div>
            <div>{organization?.address}</div>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div className={styles?.infoTitle}>Website</div>
            <div>{organization?.website}</div>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div className={styles.infoTitle}>Registration Number</div>
            <div>{organization?.secp}</div>
          </div>
          <hr />
          <div className={styles.infoTitle}>Description</div>
          <div>{organization?.description}</div>
        </div>
        </Col>
        <Col lg={6} className='d-flex flex-column' style={{padding: "2rem" }}>
        <div className="d-flex flex-column">
           <div className="d-flex flex-row justify-content-between align-items-center">
            <div className={styles.infoTitle}>Operating Category</div>
            <div>{organization?.category}</div>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div className={styles.infoTitle}>Funds Collected</div>
            <div>some value</div>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div className={styles.infoTitle}>Campaigns Enrolled</div>
            <div>some value</div>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div className={styles.infoTitle}>Funds Disbursed</div>
            <div>some value</div>
          </div>
         
        </div>
        </Col>

          <Col className='d-flex flex-column mt-5 mb-3'>
            <div className='d-flex flex-row align-items-center justifty-content-center mb-2'>
              <GiBullseye color='#1d1ce5' className='me-1' size={30} />{" "}
              <span className={styles.projectSubtitle}>Goals</span>
            </div>
            <span className='w-50'>{organization?.goals}</span>
          </Col>
        </Row>
        <BackedSection campaignIds={npo.enrolledCampaigns} />
      </Container>
    </>
  );
}

export default Goals;
