import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CampaignHeader from "../Components/Campaign/SearchContainer";
import dynamic from "next/dynamic";
import { DummyCampaigns } from "../constants/DummyData/Campaigns";
import Filter from "../Components/Filter/Filter";

import useCampaignStore from "../Redux/Campaigns";
import { fetchAllCampaigns } from "../Api/Campaigns";
import { fetchAllCampaigns as fetchCampaignsRedux } from "../Redux/Campaigns";
const DynamicCampaignCard = dynamic(
  () => import("../Components/Campaign/CampaignCard"),
  {
    ssr: true,
  }
);

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState(
    useCampaignStore.getState().campaigns
  );
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    fetchAllCampaigns()
      .then((res) => {
        useCampaignStore.dispatch(fetchCampaignsRedux(res.data));
        setFilteredCampaigns(res.data);
        setCampaigns(res.data);
      })
      .catch((err) => console.log(err));
  }, [useCampaignStore]);

  const handleSearch = (e) => {
    if (campaigns) {
      setFilteredCampaigns(
        campaigns.filter((campaign) =>
          campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
    if (!searched) setSearched(true);
  };

  const handleClear = () => {
    setFilteredCampaigns(campaigns);
    setSearchQuery("");
    setSearched(false);
  };
  return (
    <>
      <CampaignHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        handleClear={handleClear}
        searched={searched}
      />
      {/* <Filter /> */}
      <Container className='mb-5'>
        <Row className='gx-5'>
          {filteredCampaigns.length > 0 ? (
            filteredCampaigns.map((campaign, index) => (
              <DynamicCampaignCard
                cam={DummyCampaigns[index]}
                address={campaigns ? campaigns[index] : ""}
                campaign={campaign}
              />
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
                No Campaigns Found
              </span>
            </div>
          )}
        </Row>
      </Container>
    </>
  );
}
