import React from "react";
import { Container, Row } from "react-bootstrap";
import CampaignCard from "./CampaignCard";

export default function CampaignCards() {
  return (
    <Container className='my-5 '>
      <div className='d-flex flex-column align-items-center mb-2'>
        <span className='fs-1' style={{ color: "#1d1ce5" }}>
          Campaigns
        </span>
        <span style={{ color: "#808080" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit alias
          nulla consequat
        </span>
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
