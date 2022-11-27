import React from "react";
import { Col } from "react-bootstrap";
import styles from "./Campaign.module.css";
export default function CampaignCard({ lg }) {
  const ref = React.useRef(null);

  return (
    <Col
      lg={lg ? 6 : 4}
      className={styles.campaignContainer + " mt-3 relative"}
    >
      <img ref={ref} src='/Images/Campaign-1.jpg' className={styles.img} />
      <div
        className={styles.overlay}
        style={{ width: lg ? "95.8%" : "94%" }}
      ></div>
      <div className={styles.campaignTextContainer}>
        <span className={styles.heading}>Campaign Title</span>
        <span className={styles.subHeading}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
          voluptates impedi ...
        </span>
        <button className={styles.btn}>View More</button>
      </div>
    </Col>
  );
}
