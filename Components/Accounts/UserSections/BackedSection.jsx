import React from "react";
import { Container, Row } from "react-bootstrap";
import CampaignCard from "../../Campaign/CampaignCard";

export default function BackendSection() {
  return (
    <Container>
      <Row>
        <CampaignCard isBacked />
        <CampaignCard isBacked />
        <CampaignCard isBacked />
        <CampaignCard isBacked />
        <CampaignCard isBacked />
        <CampaignCard isBacked />
      </Row>
    </Container>
  );
}
