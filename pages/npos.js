import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CampaignHeader from "../Components/Campaign/SearchContainer";
import dynamic from "next/dynamic";
import { DummyOrganizations } from "../constants/DummyData/Organization";
import { getOrganization } from "../Web3/Organizations";
import { fetchAllNPOs } from "../Api/NPOs";
const DynamicNpoCard = dynamic(() => import("../Components/Npo/NpoCard"), {
  ssr: true,
});

export default function NPOs() {
  const [organizations, setOrganizations] = useState();

  useEffect(() => {
    fetchAllNPOs()
      .then((res) => {
        setOrganizations(res.data);
      })
      .catch((err) => console.log("Error"));
  }, []);
  //console.log(organizations);
  return (
    <div>
      <CampaignHeader npo />
      <Container className='mb-5 pb-3 h-100'>
        <Row className='h-100'>
          {organizations?.map((organization, index) => (
            <DynamicNpoCard
              org={DummyOrganizations[index]}
              organization={organization}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}
