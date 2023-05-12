import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import styles from "./Header.module.css";
import { Typewriter } from "react-simple-typewriter";
import { gsap } from "gsap";

export default function Header() {
  const router = useRouter();
  const imageRef = useRef();
  const textRef = useRef();
  const explore = () => {
    router.push("/campaigns");
  };

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        y: 300,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 1.5,
        duration: 2,
        ease: "power2.easeOut",
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        delay: 1,
        duration: 2,
        ease: "power2.easeOut",
      }
    );
  }, []);
  return (
    <Container fluid className={`p-0 m-0 ${styles.container}`}>
      <Row className='h-100'>
        <Col
          sm={12}
          md={12}
          lg={6}
          className='p-0 m-0 d-flex flex-column justify-content-center align-items-center'
        >
          <div className={styles.headerTextContainer} ref={textRef}>
            <span className={styles.headerText}>
              We Believe in{" "}
              <span style={{ color: "#1d1ce5" }}>
                <Typewriter
                  words={["Transparency", "Traceability", "Trust"]}
                  loop={5}
                  cursor
                  cursorStyle='_'
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={1100}
                />
              </span>
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
          <img
            ref={imageRef}
            src='/Images/charity-day-73.png'
            className={styles.img}
          />
        </Col>
      </Row>
    </Container>
  );
}
