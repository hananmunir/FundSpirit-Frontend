import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import CampaignStore from "../../../Redux/Campaigns";
import CampaignCard from "../../Campaign/CampaignCard";

export default function LikedSection({ campaignIds }) {
  const [campaigns, setCampaigns] = useState(CampaignStore.getState());
  const [likedCampaigns, setLikedCampaigns] = useState([]);

  useEffect(() => {
    setLikedCampaigns(
      campaigns.filter((campaign) => campaignIds.includes(campaign._id))
    );
  }, [campaigns]);

  return (
    <Container>
      <Row>
        {likedCampaigns.map((campaign, index) => (
          <CampaignCard key={index} campaign={campaign} liked />
        ))}
      </Row>
    </Container>
  );
}
