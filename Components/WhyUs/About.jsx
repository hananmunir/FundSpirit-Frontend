import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.css";

const ItemContent = [
  {
    icon: "/Images/traditional.png",
    title: "Traditional NPO's",
    items: [
      "Long Wait Times",
      "Transaction & Service Fees",
      "Vulnerability to Fraud",
      "Limited Financial Services",
      "Lack of Transparency",
    ],
  },
  {
    icon: "/Images/solution.png",
    title: "Our Solution",
    items: [
      "Low Wait Times",
      "Low to no fees",
      "Cryptographic security",
      "Cryptographic security",
      "Transparency in real time",
    ],
  },
];

const Item = ({ icon, items, title }) => {
  return (
    <Col className='d-flex align-items-center justify-content-center flex-column'>
      <div className={styles.icon}>
        <img loading='lazy' src={icon} className='h-75' />
      </div>
      <span className={"fs-3 my-2"}>{title}</span>
      <ul className={styles.aboutList}>
        {items.map((item) => (
          <li className={styles.aboutListItems}>{item}</li>
        ))}
      </ul>
    </Col>
  );
};

export default function About() {
  return (
    <Container fluid className={styles.homeContainer}>
      <center>
        <span className={styles.headingWhyUsHome + " fs-1"}>Why Us?</span>
      </center>
      <Row>
        {ItemContent.map((item, index) => (
          <Item {...item} key={index} />
        ))}
      </Row>
    </Container>
  );
}
