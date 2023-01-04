import React from "react";
import dynamic from "next/dynamic";
import { Suspense, useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { DummyOrganizations } from "../../constants/DummyData/Organization";
import { useRouter } from "next/router";
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
  const [organization, setOrganization] = useState();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    setOrganization(
      DummyOrganizations?.filter((org) => org.id === parseInt(id))[0]
    );
  });
  return (
    <Container fluid className='m-0 p-0 overflow-hidden'>
      <Row>
        <img
          src={organization?.imageUrl}
          className='w-100'
          style={{
            height: "60vh",
            objectFit: "cover",
          }}
        />
      </Row>
      <Suspense>
        <DynamicGoals organization={organization} />
        <DynamicUpdates organization={organization} />
        <DynamicPurchases organization={organization} />
      </Suspense>
    </Container>
  );
}
