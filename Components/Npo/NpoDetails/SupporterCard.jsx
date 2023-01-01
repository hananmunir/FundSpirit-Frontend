import React from "react";
import { Col } from "react-bootstrap";
import styles from "./index.module.css";

function SupporterCard() {
  return (
    <Col lg={2} className='d-flex flex-column'>
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
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          200 USD
        </span>
      </div>
    </Col>
  );
}

export default SupporterCard;
