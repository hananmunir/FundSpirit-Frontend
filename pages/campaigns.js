import React from "react";
import { Container, Row } from "react-bootstrap";
import CampaignHeader from "../Components/Campaign/SearchContainer";
import dynamic from "next/dynamic";

const DynamicCampaignCard = dynamic(
  () => import("../Components/Campaign/CampaignCard"),
  {
    ssr: true,
  }
);

export default function Campaigns() {
  return (
    <>
      <CampaignHeader />
      <Container>
        <Row>
          <DynamicCampaignCard />
          <DynamicCampaignCard />
          <DynamicCampaignCard />
          <DynamicCampaignCard />
          <DynamicCampaignCard />
          <DynamicCampaignCard />
        </Row>
      </Container>
    </>
  );
}
