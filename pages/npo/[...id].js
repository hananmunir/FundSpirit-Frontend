import React from "react";
import dynamic from "next/dynamic";
import { Suspense, useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { DummyOrganizations } from "../../constants/DummyData/Organization";
import { useRouter } from "next/router";
import { fetchNPO } from "../../Api/NPOs";
import Loader from "../../Components/Loader/Loader";
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
    if (id)
      fetchNPO(id)
        .then((res) => setOrganization(res.data))
        .catch((err) => console.log(err));
  }, [id]);

  console.log(organization);
  return (
    <Container fluid className='m-0 p-0 overflow-hidden'>
      <Row style={{ position: "relative" }}>
        <img
          src={DummyOrganizations[0].imageUrl}
          className='w-100'
          style={{
            height: "60vh",
            objectFit: "fit",
          }}
        />
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            zIndex: 19,
          }}
          className='top-0 left-0 h-100 w-100 d-flex align-items-center fs-2 ms'
        >
          <span className='ms-5 fw-bold'>{organization?.name}</span>
        </div>
      </Row>
      <Suspense fallback={<Loader />}>
        <DynamicGoals organization={organization} />
        <DynamicUpdates organization={organization} />
        <DynamicPurchases organization={organization} />
      </Suspense>
    </Container>
  );
}
