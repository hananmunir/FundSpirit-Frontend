import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CampaignHeader from "../Components/Campaign/SearchContainer";
import dynamic from "next/dynamic";
import { DummyOrganizations } from "../constants/DummyData/Organization";
import { getOrganizations, getOrganization } from "../Web3/Organizations";
const DynamicNpoCard = dynamic(() => import("../Components/Npo/NpoCard"), {
  ssr: true,
});

export default function NPOs() {
  const [organizations, setOrganizations] = useState();

  useEffect(() => {
    getOrganizations().then((orgs) => {
      let data = [];
      orgs.map(async (org) => {
        getOrganization(org).then((organization) => {
          data.push({ organization });
          setOrganizations(data);
        });
        //append to state
      });
    });
  }, []);
  console.log(organizations.length);
  return (
    <div>
      <CampaignHeader npo />
      <Container className='mb-5 pb-3 h-100'>
        <Row className='h-100'>
          {DummyOrganizations.map((organization) => (
            <DynamicNpoCard organization={organization} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
