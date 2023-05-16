import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.css";
import { TbFileDescription } from "react-icons/tb";
import { GiBullseye } from "react-icons/gi";
import { useSelector } from "react-redux";
import BackedSection from "../../Accounts/UserSections/BackedSection";

function Goals({ organization }) {
  console.log(organization);

  return (
    <>
      <Container>
        <Row className='mt-5'>
          <h2 className={styles.orgTitle}>Organization Overview</h2>
          <Col
            lg={6}
            className='d-flex flex-column'
            style={{ padding: "2rem" }}
          >
            <div className='d-flex flex-column'>
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <div className={styles.infoTitle}>Email</div>
                <div>{organization?.email}</div>
              </div>
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <div className={styles.infoTitle}>Phone</div>
                <div>{organization?.phone}</div>
              </div>
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <div className={styles.infoTitle}>Address</div>
                <div className='self-start'>{organization?.address}</div>
              </div>
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <div className={styles?.infoTitle}>Website</div>
                <div>{organization?.website}</div>
              </div>
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <div className={styles.infoTitle}>Registration Number</div>
                <div>{organization?.secp}</div>
              </div>
              <hr />
            </div>
          </Col>
          <Col
            lg={6}
            className='d-flex flex-column'
            style={{ padding: "2rem" }}
          >
            <div className='d-flex flex-column'>
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <div className={styles.infoTitle}>Operating Category</div>
                <div>{organization?.category}</div>
              </div>
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <div className={styles.infoTitle}>Funds Collected</div>
                <div>some value</div>
              </div>
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <div className={styles.infoTitle}>Campaigns Enrolled</div>
                <div>some value</div>
              </div>
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <div className={styles.infoTitle}>Funds Disbursed</div>
                <div>some value</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className=' d-flex flex-column'>
          <Col className='d-flex flex-column mt-5 mb-3'>
            <div className='d-flex flex-row align-items-center justifty-content-center mb-2'>
              <GiBullseye color='#1d1ce5' className='me-1' size={30} />{" "}
              <span className={styles.projectSubtitle}>Description</span>
            </div>
            <span className='w-50'>{organization?.description}</span>
          </Col>
          <Col className='d-flex flex-column mt-5 mb-3'>
            <div className='d-flex flex-row align-items-center justifty-content-center mb-2'>
              <GiBullseye color='#1d1ce5' className='me-1' size={30} />{" "}
              <span className={styles.projectSubtitle}>Goals</span>
            </div>
            <span className='w-50'>{organization?.goals}</span>
          </Col>
          <Col className='d-flex flex-column mt-5 mb-3'>
            <div className='d-flex flex-row align-items-center justifty-content-center mb-2'>
              <span className={styles.projectSubtitle}>Enrolled Campaigns</span>
            </div>
            <BackedSection campaignIds={organization?.campaigns} npoDisplay />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Goals;
