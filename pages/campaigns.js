import React from "react";
import { Container, Row } from "react-bootstrap";
import CampaignHeader from "../Components/Campaign/SearchContainer";
import dynamic from "next/dynamic";
import {DummyCampaigns} from "../constants/DummyData/Campaigns";
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
      <Container className = 'mb-5'>
        <Row className='gx-5'>
          {DummyCampaigns?.map((campaign) => (
            <DynamicCampaignCard campaign = {campaign} />))}
         
        </Row>
      </Container>
    </>
  );
}
