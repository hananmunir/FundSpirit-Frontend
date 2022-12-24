import React from "react";
import { Container, Row } from "react-bootstrap";
import CampaignCard from "../Components/Campaign/CampaignCard";
import CampaignHeader from "../Components/Campaign/CampaignHeader";
import Fund from "../Components/Fund/Fund";
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
        <Fund />
      </Container>
    </>
  );
}
