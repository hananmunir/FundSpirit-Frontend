import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import CampaignStore from "../../../Redux/Campaigns";
import CampaignCard from "../../Campaign/CampaignCard";

export default function BackendSection({ campaignIds, npoDisplay }) {
  const [campaigns, setCampaigns] = useState(CampaignStore.getState());
  const [backedCampaigns, setBackedCampaigns] = useState([]);

  useEffect(() => {
    setBackedCampaigns(
      campaigns.filter((campaign) => campaignIds.includes(campaign._id))
    );
  }, [campaigns, campaignIds]);
  console.log(backedCampaigns);
  return (
    <Container>
      <Row>
        {backedCampaigns.length > 0 ? (
          backedCampaigns.map((campaign, index) => (
            <CampaignCard
              key={index}
              campaign={campaign}
              isBacked={npoDisplay ? false : true}
            />
          ))
        ) : (
          <div
            className='w-100 d-flex align-items-center justify-content-center'
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
              No Campaigns Funded Yet
            </span>
          </div>
        )}
      </Row>
    </Container>
  );
}
