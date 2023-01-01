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

const DynamicSupporters = dynamic(
  () => import("../../Components/Npo/NpoDetails/Supporters"),
  {
    suspense: true,
  }
);

export default function NPO() {
  return (
    <div>
      <Row>
        <img
          src='/Images/shaukatk.jpg'
          className='w-100'
          style={{
            height: "50vh",
            objectFit: "cover",
          }}
        />
      </Row>
      <Suspense>
        <DynamicGoals />
        <DynamicUpdates />
        <DynamicSupporters />
      </Suspense>
    </div>
  );
}
