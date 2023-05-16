import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import CampaignStore from "../../../Redux/Campaigns";
import CampaignCard from "../../Campaign/CampaignCard";
import { fetchAllCampaigns } from "../../../Api/Campaigns";

export default function BackendSection({ campaignIds, npoDisplay, campaignSection }) {
  const [backedCampaigns, setBackedCampaigns] = useState([]);

  useEffect(() => {
    if (campaignIds) {
      fetchAllCampaigns()
        .then((campaigns) => {
          console.log(campaignIds);
          setBackedCampaigns(
            campaigns.data.filter((campaign) =>
              campaignIds.includes(campaign._id)
            )
          );
        })
        .catch(() => {});
    }
  }, [campaignIds]);
  console.log(backedCampaigns);
  return (
    <Container>
      <Row>
        {backedCampaigns.length > 0 ? (
          backedCampaigns.map((campaign, index) => (
            <CampaignCard
              key={campaign._id}
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
