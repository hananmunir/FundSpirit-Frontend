import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CampaignHeader from "../Components/Campaign/SearchContainer";
import dynamic from "next/dynamic";
import { DummyCampaigns } from "../constants/DummyData/Campaigns";
import Filter from "../Components/Filter/Filter";
import { getCampaigns } from "../Web3/Campaign";
const DynamicCampaignCard = dynamic(
  () => import("../Components/Campaign/CampaignCard"),
  {
    ssr: true,
  }
);

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState();
  useEffect(() => {
    const getAllCampaigns = async () => {
      const campaigns = await getCampaigns();
      setCampaigns(campaigns);
    };
    getAllCampaigns();
  }, []);
  return (
    <>
      <CampaignHeader />
      {/* <Filter /> */}
      <Container className='mb-5'>
        <Row className='gx-5'>
          {DummyCampaigns?.map((campaign, index) => (
            <DynamicCampaignCard
              campaign={campaign}
              address={campaigns ? campaigns[index] : ""}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}
