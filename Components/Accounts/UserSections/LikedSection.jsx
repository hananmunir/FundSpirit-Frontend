import React from "react";
import { Container, Row } from "react-bootstrap";
import CampaignCard from "../../Campaign/CampaignCard";

export default function LikedSection() {
  return (
    <Container>
      <Row>
        <CampaignCard liked />
        <CampaignCard liked />
        <CampaignCard liked />
        <CampaignCard liked />
        <CampaignCard liked />
        <CampaignCard liked />
      </Row>
    </Container>
  );
}
