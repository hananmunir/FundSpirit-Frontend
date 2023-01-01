import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RiShareBoxFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import styles from "./index.module.css";

function Updates() {
  return (
    <Container>
      <Row className='mt-5'>
        <Col lg={12} className='d-flex flex-column'>
          <div className='d-flex flex-row align-items-center justifty-content-center mb-2'>
            <span className={styles.orgGoals}>Read Our Last Update</span>
          </div>
          <img
            src='/Images/Campaign-1.jpg'
            alt='update'
            style={{
              width: "50%",
              height: "auto",
            }}
          />
          <span
            className='w-50'
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            aperiam officiis adipisci qui commodi. Blanditiis sint rerum
            laudantium! Delectus nemo cum commodi earum dolorem perferendis
            accusantium corporis nihil
            <br /> <br />
            quia corrupti? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Velit beatae cupiditate, eligendi ex, eius perspiciatis
            suscipit consectetur consequatur architecto expedita consequuntur
            aut quae cumque nostrum minima accusamus tempora fuga quo!
          </span>
          <div className='d-flex flex-row align-items-center'>
            <RiShareBoxFill color='#474747' className='me-1' size={30} />{" "}
            <span
              style={{
                color: "#474747",

                fontSize: "1.2rem",
              }}
            >
              Share Update
            </span>
          </div>
          <div
            className='d-flex flex-row align-items-center mt-4'
            style={{
              fontSize: "1.5rem",
              width: "10%",
              justifyContent: "space-between",
            }}
          >
            <BsFacebook color='#1d1ce5' className='me-1' size={30} />{" "}
            <FcGoogle color='#1d1ce5' className='me-1' size={30} />{" "}
            <FaTwitter color='#1d1ce5' className='me-1' size={30} />{" "}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Updates;
