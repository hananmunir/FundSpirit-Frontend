import React, { useState, useEffect } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import styles from "./Fund.module.css";

const AmountField = ({ amount }) => {
  return (
    <div
      className={
        "border py-2 rounded align-items-center d-flex justify-content-center mt-2 flex-row " +
        styles.amountField
      }
    >
      {" "}
      <span>${amount}</span> <span className={styles.currencyText}>USD</span>
    </div>
  );
};

export default function Fund() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Show
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='d-flex justify-content-center align-items-center'>
          <span className='fs-4'> Choose an amount to give</span>
        </Modal.Header>
        <Modal.Body>
          <Row className='px-3'>
            <Col lg={4}>
              <AmountField amount={10} />
            </Col>
            <Col lg={4}>
              <AmountField amount={25} />
            </Col>
            <Col lg={4}>
              <AmountField amount={50} />
            </Col>
            <Col lg={4}>
              <AmountField amount={100} />
            </Col>
            <Col lg={8}>
              <AmountField amount={50} />
            </Col>
            <Col lg={12}>
              <AmountField amount={50} />
            </Col>
          </Row>
        </Modal.Body>
        <button className={styles.btn}>Fund Now</button>
      </Modal>
    </>
  );
}
