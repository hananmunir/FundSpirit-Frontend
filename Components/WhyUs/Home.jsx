import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.css";

const ItemContent = [
  {
    title: "Global",
    description: "Benefit NPO's by tapping into global funding",
    svg: "/SVG/global.svg",
  },
  {
    title: "Innovate",
    description: "Smart contracts for Crowd Funding",
    svg: "/SVG/innovate.svg",
  },
  {
    title: "Mission",
    description: "Revolutionize Philanthropy in Pakistan",
    svg: "/SVG/mission.svg",
  },
  {
    title: "Transparency",
    description: "Provide transparency and accountability to donors",
    svg: "/SVG/transparency.svg",
  },
];

const Item = ({ title, description, svg }) => {
  return (
    <Col className='d-flex flex-column align-items-center text-center px-5 mt-2'>
      <div className={styles.svg}>
        <img loading='lazy' src={svg} />
      </div>
      <span className='fs-5 my-2'>{title}</span>
      <span className={styles.homeDesc}>{description}</span>
    </Col>
  );
};

export default function Home() {
  return (
    <Container fluid className={styles.homeContainer + " px-2"}>
      <center>
        <span className='fs-1'>Why Us?</span>
      </center>
      <Row className='mt-5 pt-2'>
        {ItemContent.map((item) => (
          <Item {...item} />
        ))}
      </Row>
    </Container>
  );
}
