import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Will.module.css";

const ItemContent = [
  {
    description: "Reward good actors in nonprofit sector",
    svg: "/SVG/reward.svg",
  },
  {
    description: "Educate donors about effective outcomes",
    svg: "/SVG/good.svg",
  },
  {
    description:
      "Identify & avoid fraudulent activities along traditional paths",
    svg: "/SVG/identify.svg",
  },
];

const Item = ({ title, description, svg }) => {
  return (
    <Col className='d-flex flex-column align-items-center text-center px-5 mt-5'>
      <div className={styles.svg}>
        <img loading='lazy' src={svg} />
      </div>

      <span className={styles.willDesc + " mt-4 w-75 "}>{description}</span>
    </Col>
  );
};
export default function Will() {
  return (
    <Container fluid className='mb-5 pb-3'>
      <div className={styles.sectionWillHeading}>
        <h4>FUNDSPIRIT WILL</h4>
      </div>
      <Row>
        {ItemContent.map((item, index) => (
          <Item {...item} key={index} />
        ))}
      </Row>
    </Container>
  );
}
