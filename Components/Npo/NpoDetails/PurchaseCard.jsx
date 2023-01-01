import React from "react";
import { Col } from "react-bootstrap";
import styles from "./index.module.css";

export default function PurchaseCard() {
  return (
    <Col lg={2} className='d-flex flex-column'>
      <div className='d-flex flex-column align-items-center mb-2 mt-2 border p-2 rounded pointer'>
        <img
          src='/Images/Daraz-logo.png'
          className={styles.roundedSupporterImage}
        />
        <span
          style={{
            color: "#474747",
            fontSize: ".8rem",
          }}
        >
          Order 9323...2
        </span>
        <span
          style={{
            color: "#1d1ce5",
            fontSize: ".9rem",
          }}
        >
          1000 USD
        </span>
      </div>
    </Col>
  );
}
