import React from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Row, Col, Container } from "react-bootstrap";

const DynamicGoals = dynamic(
  () => import("../../Components/Npo/NpoDetails/Goals"),
  {
    suspense: true,
  }
);

const DynamicUpdates = dynamic(
  () => import("../../Components/Npo/NpoDetails/Updates"),
  {
    suspense: true,
  }
);

const DynamicPurchases = dynamic(
  () => import("../../Components/Npo/NpoDetails/RecentPurchases"),
  {
    suspense: true,
  }
);

export default function NPO() {
  return (
    <Container fluid className='m-0 p-0 overflow-hidden'>
      <Row>
        <img
          src='/Images/shaukatk.png'
          className='w-100'
          style={{
            objectFit: "contain",
          }}
        />
      </Row>
      <Suspense>
        <DynamicGoals />
        <DynamicUpdates />
        <DynamicPurchases />
      </Suspense>
    </Container>
  );
}
