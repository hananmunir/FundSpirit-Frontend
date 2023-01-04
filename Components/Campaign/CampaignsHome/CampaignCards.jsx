import React from "react";
import { Container, Row } from "react-bootstrap";
import CampaignCard from "./CampaignCard";
import styles from "./Campaign.module.css";
import { DummyCampaigns } from "../../../constants/DummyData/Campaigns";

export default function CampaignCards() {
  return (
    <Container className='my-5 '>
      <div className='d-flex flex-column align-items-center mb-2'>
        <span className={styles.campaignsHeading + " fs-1"}>Campaigns</span>
      </div>
      <Row className='m-0 p-0'>
        <CampaignCard lg campaign={DummyCampaigns[0]} />
        <CampaignCard lg campaign={DummyCampaigns[1]} />
        <CampaignCard campaign={DummyCampaigns[2]} />
        <CampaignCard campaign={DummyCampaigns[3]} />
        <CampaignCard campaign={DummyCampaigns[4]} />
      </Row>
    </Container>
  );
}
