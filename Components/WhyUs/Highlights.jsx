import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.css";

const ItemContent = [
  {
    description:
      "Blockchain technology allows donors to trace transactions on a public platform in real time",
    svg: "/SVG/time.svg",
  },
  {
    description:
      "Donors can see how funds are spent and ensure they reach their final destination",
    svg: "/SVG/eye.svg",
  },
  {
    description: "Project results are shared for direct engagement with donors",
    svg: "/SVG/viewresults.svg",
  },
];

const Item = ({ title, description, svg }) => {
  return (
    <Col className='d-flex flex-column align-items-center text-center px-5 mt-5'>
      <div className={styles.svg}>
        <img loading='lazy' src={svg} />
      </div>

      <span className={styles.highlightsDesc + " mt-4 w-75 "}>
        {description}
      </span>
    </Col>
  );
};
export default function Highlights() {
  return (
    <Container fluid>
      <div className={styles.sectionHeading}>
        <h4>HIGHLIGHTS</h4>
      </div>
      <Row>
        {ItemContent.map((item, index) => (
          <Item {...item} key={index} />
        ))}
      </Row>
    </Container>
  );
}
