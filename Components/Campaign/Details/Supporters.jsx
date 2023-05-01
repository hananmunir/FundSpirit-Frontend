import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./index.module.css";

const SupporterCard = () => {
  return (
    <Col lg={1} className='d-flex flex-column'>
      <div className='d-flex flex-column align-items-center mb-5 mt-4'>
        <img src='/Images/shawn.jpg' className={styles.roundedSupporterImage} />
        <span
          style={{
            color: "#474747",
            fontSize: "1.2rem",
          }}
        >
          Shawn
        </span>
        <span
          style={{
            color: "#1d1ce5",
            fontSize: "1rem",
          }}
        >
          200 USD
        </span>
      </div>
    </Col>
  );
};
function Supporters() {
  return (
    <Container>
      <div className='mt-5'>
        <span className={styles.projectTitle}>Our Supporters</span>
      </div>

      <Row className='mt-1'>
        <SupporterCard />
        <SupporterCard />
        <SupporterCard />
        <SupporterCard />
      </Row>
    </Container>
  );
}

export default Supporters;
