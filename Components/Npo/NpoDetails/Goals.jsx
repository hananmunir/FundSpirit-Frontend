import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.css";
import { TbFileDescription } from "react-icons/tb";
import { GiBullseye } from "react-icons/gi";
function Goals() {
  return (
    <>
      <Container>
        <Row className='mt-5'>
          <Col lg={12} className='d-flex flex-column'>
            <div className='d-flex flex-row align-items-center justifty-content-center mb-2'>
              <span className={styles.orgGoals}>Organization Goals</span>
            </div>
            <span className='w-50'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              aperiam officiis adipisci qui commodi. Blanditiis sint rerum
              laudantium! Delectus nemo cum commodi earum dolorem perferendis
              accusantium corporis nihil, quia corrupti? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Velit beatae cupiditate,
              eligendi ex, eius perspiciatis suscipit consectetur consequatur
              architecto expedita consequuntur aut quae cumque nostrum minima
              accusamus tempora fuga quo!
            </span>
          </Col>
          <Col className='d-flex flex-column mt-5 mb-3'>
            <div className='d-flex flex-row align-items-center justifty-content-center mb-2'>
              <GiBullseye color='#1d1ce5' className='me-1' size={30} />{" "}
              <span className={styles.projectSubtitle}>Upcoming Projects</span>
            </div>
            <span className='w-50'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              aperiam officiis adipisci qui commodi. Blanditiis sint rerum
              laudantium! Delectus nemo cum commodi earum dolorem perferendis
              accusantium corporis nihil, quia corrupti? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Velit beatae cupiditate,
              eligendi ex, eius perspiciatis suscipit consectetur consequatur
              architecto expedita consequuntur aut quae cumque nostrum minima
              accusamus tempora fuga quo!
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Goals;
