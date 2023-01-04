import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.css";
import { TbFileDescription } from "react-icons/tb";
import { GiBullseye } from "react-icons/gi";
function Overview({campaign}) {
  return (
    <>
      <Container>
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
