import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "../../Components/NPORegistration/Form";
export default function Auth() {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    setIsSmallDevice(window.innerWidth < 768);
  }, []);

  return (
    <Container
      fluid
      className='m-0 p-0'
      style={{
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Row>
        <Col
          style={{
            display: isSmallDevice ? "none" : "block",
          }}
          lg={6}
        >
          <img
            src='/Images/NPO/Background.jpg'
            alt='Authentication'
            style={{ width: "100%", height: "100vh", objectFit: "fill" }}
          />
          <div
            style={{
              position: "absolute",
              backgroundColor: "rgba(0,0, 0, .4)",
              height: "100vh",
              width: "48%",
              zIndex: 10,
            }}
            className='top-0 left-0 d-flex justify-content-center align-items-center'
          >
            <span style={{ color: "white" }} className='w-75 fs-3 '>
              "Charity is not about giving to those who need it, but about
              coming to know those who give it." - Khaled Hosseini
            </span>
          </div>
        </Col>
        <Col lg={6}>
          <Form />
        </Col>
      </Row>
    </Container>
  );
}
