import React, { useState, useEffect, useRef } from "react";
import {
  Modal,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import styles from "./Fund.module.css";
import EthRate from "../../../Utilities/EthRate";
import { fundCampaign } from "../../../Web3/Campaign";
import { toast } from "react-toastify";
const AmountField = ({ amount, amountState, setAmount }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (amountState === amount && ref.current) {
      ref.current.style.backgroundColor = "#1d1ce5";
      ref.current.style.color = "#fff";
    } else {
      ref.current.style.backgroundColor = "#F3F3EC";
      ref.current.style.color = "#000";
    }
  }, [amountState, ref.current]);
  return (
    <div
      className={
        "border py-2 rounded align-items-center d-flex justify-content-center mt-2 flex-row " +
        styles.amountField
      }
      ref={ref}
      //change backgroun color of this field
      onClick={(e) => {
        setAmount(amount);
      }}
    >
      {" "}
      <span>${amount}</span> <span className={styles.currencyText}>USD</span>
    </div>
  );
};

export default function Fund({ show, setShow, address }) {
  const [amount, setAmount] = useState(25);
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
  const handleFund = () => {
    if (amount <= 0) return alert("Please choose an amount to give");
    EthRate()
      .then((res) => {
        let eth = amount / res;
        fundCampaign(address, eth).then((res) => {
          if (res) {
            toast(
              "You have successfully funded this campaign, thank you for your support",
              {
                type: "success",
                pauseOnHover: false,
                autoClose: 5000,
              }
            );
            setShow(false);
          }
        });
      })
      .catch((err) => {
        toast("Something went wrong, please try again later", {
          type: "error",
        });
        setShow(false);
      });
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='d-flex justify-content-center align-items-center'>
          <span className='fs-4'> Choose an amount to give</span>
        </Modal.Header>
        <Modal.Body>
          <Row className='px-3'>
            <Col lg={4}>
              <AmountField
                amount={10}
                setAmount={setAmount}
                amountState={amount}
              />
            </Col>
            <Col lg={4}>
              <AmountField
                amount={25}
                setAmount={setAmount}
                amountState={amount}
              />
            </Col>
            <Col lg={4}>
              <AmountField
                amount={50}
                setAmount={setAmount}
                amountState={amount}
              />
            </Col>
            <Col lg={4}>
              <AmountField
                amount={100}
                setAmount={setAmount}
                amountState={amount}
              />
            </Col>
            <Col lg={8}>
              <AmountField
                amount={500}
                setAmount={setAmount}
                amountState={amount}
              />
            </Col>
            <Col lg={12} className='mt-3'>
              <InputGroup>
                <FormControl
                  aria-label='Amount (to the nearest dollar)'
                  placeholder='500'
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                  type='number'
                  //remove the default up and down arrows

                  inputMode='numeric'
                  pattern='[0-9]*'
                  style={{
                    appearance: "textfield",
                    WebkitAppearance: "textfield",
                    MozAppearance: "textfield",
                    focus: "none",
                    //remove borders on focus
                    outline: "none",
                  }}
                  className={styles.input}
                />
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </Modal.Body>
        <button className={styles.btn} onClick={handleFund}>
          Fund Now
        </button>
      </Modal>
    </>
  );
}
