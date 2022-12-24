import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./CampaignHeader.module.css";

function CampaignHeader() {
  return (
    <Container fluid className={styles.campaignHeader}>
      <Row>
        <img
          src='/Images/Campaign-3.jpg'
          className={styles.campaignHeaderImg}
        />
        <Col className={styles.campaignHeaderContent}>
          <h1 className={styles.campaignHeaderTitle}>Explore & Discover</h1>
          <span className={styles.campaignHeaderDesc}>
            Search all Campaigns currently in FundSpirit
          </span>
          <div className={styles.campaignHeaderSearchSection}>
            <input type='Search' className={styles.campaignHeaderSearch} />
            <button className={styles.campaignHeaderSearchBtn}>Search</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CampaignHeader;
