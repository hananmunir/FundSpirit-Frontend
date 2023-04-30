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
        {likedCampaigns.length > 0 ? (
          likedCampaigns.map((campaign, index) => (
            <CampaignCard key={index} campaign={campaign} liked />
          ))
        ) : (
          <div
            className='w-100  d-flex align-items-center justify-content-center'
            style={{
              height: "30vh",
            }}
          >
            <span
              style={{
                color: "gray",
              }}
              className='fs-3'
            >
              No Campaigns Liked Yet
            </span>
          </div>
        )}
      </Row>
    </Container>
  );
}
