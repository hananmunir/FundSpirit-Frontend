import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Contact.module.css";

export default function ContactUs() {
  return (
    <Container className={styles.contactUs}>
      <Row>
        <Col xs={12}>
          <iframe
            title='Map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.413975938804!2d74.2104454151027!3d31.402718481408684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ffd0bc7c5f71%3A0x879e9b82857bcd94!2sCOMSATS%20University%2C%20Lahore%20Campus!5e0!3m2!1sen!2s!4v1621386363905!5m2!1sen!2s'
            className={styles.gmap}
            style={{ border: "0" }}
            allowFullScreen=''
            loading='lazy'
          ></iframe>
        </Col>
        <Col>
          <Row>
            <Col xs={12} md={6}>
              <div className={styles.contactCol}>
                <div>
                  <i className='fa fa-home' aria-hidden='true'></i>
                  <span>
                    <h5>ABC Building ABC Street</h5>
                    <p>city, province, country</p>
                  </span>
                </div>
                <div>
                  <i className='fa fa-phone' aria-hidden='true'></i>
                  <span>
                    <h5>+92 XXXXXXXXXX</h5>
                    <p>Monday to Friday, 9AM to 5PM</p>
                  </span>
                </div>
                <div>
                  <i className='fa fa-envelope-o' aria-hidden='true'></i>
                  <span>
                    <h5>example@given.com</h5>
                    <p>Email us your query</p>
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className={styles.contactCol}>
                <form action=''>
                  <input
                    type='text'
                    className='name'
                    placeholder='Enter Your Full Name'
                    required
                  />
                  <input
                    type='email'
                    className='email'
                    placeholder='Enter your Email'
                    required
                  />
                  <input
                    type='text'
                    className='subject'
                    placeholder='Enter Subject'
                    required
                  />
                  <textarea rows='10' placeholder='Message' required></textarea>
                  <button className={styles.contactFormBtn}>Submit</button>
                </form>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
