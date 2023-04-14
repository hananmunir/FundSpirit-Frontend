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

  useEffect(() => {
    // useCampaignStore.dispatch(
    //   fetchCampaignsRedux(fetchAllCampaigns().then((res) => res.data))
    // );
    fetchAllCampaigns().then((res) => {
      useCampaignStore.dispatch(fetchCampaignsRedux(res.data));
      setCampaigns(res.data);
    });
  }, [useCampaignStore]);
  console.log(campaigns);
  return (
    <>
      <CampaignHeader />
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
