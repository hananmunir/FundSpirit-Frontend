import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CampaignHeader from "../Components/Campaign/SearchContainer";
import dynamic from "next/dynamic";
import { DummyOrganizations } from "../constants/DummyData/Organization";
const DynamicNpoCard = dynamic(() => import("../Components/Npo/NpoCard"), {
  ssr: true,
});

export default function NPOs() {
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
