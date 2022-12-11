import React from "react";
import { Container, Row } from "react-bootstrap";
import CampaignCard from "./CampaignCard";
import styles from "./Campaign.module.css";

export default function CampaignCards() {
  return (
    <Container className='my-5 '>
      <div className='d-flex flex-column align-items-center mb-2'>
        <span className={styles.campaignsHeading + " fs-1"}>Campaigns</span>
      </div>
      <Row className='m-0 p-0'>
        <CampaignCard lg />
        <CampaignCard lg />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
      </Row>
    </Container>
  );
}
