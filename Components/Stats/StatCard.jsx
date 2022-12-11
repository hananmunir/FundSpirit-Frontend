import React from "react";
import { Col } from "react-bootstrap";
import styles from "./Stats.module.css";

export default function StatCard({ src, figure, text }) {
  return (
    <Col
      sm={6}
      md={6}
      lg={4}
      className='d-flex flex-column  align-items-center p-4 mt-5'
    >
      <img src={src} alt='charity-icon' className={styles.charityIcon} />
      <span className={styles.statFigure + " mt-4 mb-2"}>
        {figure.toLocaleString()}
      </span>
      <span className={styles.statSubText}>{text}</span>
    </Col>
  );
}
