import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import styles from "./Header.module.css";

export default function Header() {
  const router = useRouter();

  const explore = () => {
    router.push("/campaigns");
  };
  return (
    <Container fluid className={`p-0 m-0 ${styles.container}`}>
      <Row className='h-100'>
        <Col
          sm={12}
          md={12}
          lg={6}
          className='p-0 m-0 d-flex flex-column justify-content-center align-items-center'
        >
          <div className={styles.headerTextContainer}>
            <span className={styles.headerText}>
              We Believe in{" "}
              <span style={{ color: "#1D1CE5" }}> Transparency </span>
            </span>
            <span className={styles.headerSubText}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              quas ipsa repellat numquam omnis neque eos dolorum eum hic aliquam
              dolorem velit ea rerum adipisci officiis, atque iure quibusdam
              quod.
            </span>
            <div className={styles.btnContainer}>
              <button className={styles.btn} onClick={explore}>
                Explore
              </button>
            </div>
          </div>
        </Col>
        <Col
          sm={12}
          md={12}
          lg={6}
          className='p-0 m-0 align-items-center d-flex justify-content-center'
        >
          <img src='/Images/charity-day-73.png' className={styles.img} />
        </Col>
      </Row>
    </Container>
  );
}
