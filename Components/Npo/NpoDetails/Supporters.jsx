import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.css";

function Supporters() {
  return (
    <Container>
      <Row className='mt-5'>
        <Col lg={12} className='d-flex flex-column'>
          <div className='d-flex flex-row align-items-center justifty-content-center mb-2'>
            <span className={styles.orgGoals}>Our Supporters</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Supporters;
