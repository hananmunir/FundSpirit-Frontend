import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CampaignHeader from "../Components/Campaign/SearchContainer";
import dynamic from "next/dynamic";

const DynamicNpoCard = dynamic(() => import("../Components/Npo/NpoCard"), {
  ssr: true,
});

export default function NPOs() {
  return (
    <div>
      <CampaignHeader npo />
      <Container>
        <Row>
          <DynamicNpoCard />
          <DynamicNpoCard />
          <DynamicNpoCard />
          <DynamicNpoCard />
          <DynamicNpoCard />
          <DynamicNpoCard />
        </Row>
      </Container>
    </div>
  );
}
