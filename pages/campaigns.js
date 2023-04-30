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
  const [fetchedCampaigns, setFetchedCampaigns] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // useCampaignStore.dispatch(
    //   fetchCampaignsRedux(fetchAllCampaigns().then((res) => res.data))
    // );
    fetchAllCampaigns().then((res) => {
      useCampaignStore.dispatch(fetchCampaignsRedux(res.data));
      setFetchedCampaigns(res.data);
      setCampaigns(res.data);
    });
  }, [useCampaignStore]);
  useEffect(() => {
    setCampaigns(
      fetchedCampaigns?.filter((campaign) =>
        campaign.name.includes(searchQuery)
      )
    );
  }, [searchQuery]);
  return (
    <>
      <CampaignHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {/* <Filter /> */}
      <Container className='mb-5'>
        <Row className='gx-5'>
          {campaigns?.map((campaign, index) => (
            <DynamicCampaignCard
              cam={DummyCampaigns[index]}
              address={campaigns ? campaigns[index] : ""}
              campaign={campaign}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}
