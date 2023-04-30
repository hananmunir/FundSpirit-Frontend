import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import CampaignStore from "../../../Redux/Campaigns";
import CampaignCard from "../../Campaign/CampaignCard";

export default function BackendSection({ campaignIds }) {
  const [campaigns, setCampaigns] = useState(CampaignStore.getState());
  const [backedCampaigns, setBackedCampaigns] = useState([]);

  useEffect(() => {
    if (campaignIds)
      setBackedCampaigns(
        campaigns.filter((campaign) => campaignIds.includes(campaign._id))
      );
  }, [campaigns]);
  console.log(campaignIds);
  campaigns.map((campaign) => console.log(campaign._id));
  return (
    <Container>
      <Row>
        {backedCampaigns.map((campaign, index) => (
          <CampaignCard key={index} campaign={campaign} isBacked />
        ))}
      </Row>
    </Container>
  );
}
