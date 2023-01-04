import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./CTA.module.css";
import { useRouter } from "next/router";

const ItemContent = [
  {
    title: "Donate",
    description: "Explore projects to contribute to around the world.",
    svg: "/SVG/donate.svg",
    btnText: "Discover",
    url: "/campaigns",
  },
  {
    title: "Raise",
    description: "Nonprofits ready to fundraise can start a project here",
    svg: "/SVG/raise.svg",
    btnText: "Fundraise",
    url: "/npo",
  },
];

const Item = ({ title, description, svg, btnText, url }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(url);
  };
  return (
    <Col
      lg={6}
      md={6}
      sm={12}
      className='d-flex flex-column align-items-center text-center px-5 mt-4  mb-5 h-100 '
    >
      <div className={styles.svg}>
        <img loading='lazy' src={svg} />
      </div>
      <span className='fs-4 my-3'>{title}</span>
      <span className={styles.desc}>{description}</span>
      <button className={styles.btn + "  mt-3"} onClick={handleClick}>
        {btnText}
      </button>
    </Col>
  );
};

export default function CAT() {
  return (
    <Container
      fluid
      className={
        styles.container +
        " d-flex flex-column justify-content-between align-items-center ps-5 my-5 py-5"
      }
    >
      <center>
        <span className={styles.heading + " fs-1"}>Ready to Start?</span>
      </center>
      <Row className='w-100 h-100 py-5'>
        {ItemContent.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </Row>
    </Container>
  );
}
