import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.css";
import { TbFileDescription } from "react-icons/tb";
import { GiBullseye } from "react-icons/gi";
import { useSelector } from "react-redux";
import BackedSection from "../../Accounts/UserSections/BackedSection";
import { getBalance } from "../../../Web3/Organizations";
import Web3 from "web3";
import EthRate from "../../../Utilities/EthRate";
function Goals({ organization }) {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    if (organization)
      getBalance(organization.addressHash)
        .then((res) => {
          EthRate()
            .then((rate) =>
              setBalance(Web3.utils.fromWei(res.toString(), "ether") * rate)
            )
            .catch(() =>
              setBalance(Web3.utils.fromWei(res.toString(), "ether") * 1800.2)
            );
        })
        .catch((err) => console.log(err));
  }, [organization]);

  return (
    <>
      <Container>
        <Row className='mt-5'>
          <h2 className={styles.orgTitle}>Organization Overview</h2>
          <Col
            lg={6}
            className='d-flex flex-column'
            style={{ padding: "2rem" }}
          >
            <div className='d-flex flex-column'>
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <div className={styles.infoTitle}>Email</div>
                <div>{organization?.email}</div>
              </div>

              <div className='d-flex  flex-row justify-content-between align-items-center'>
                <div className={styles.infoTitle}>Address</div>
                <div className='ms-auto text-end'>{organization?.address}</div>
              </div>
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <div className={styles?.infoTitle}>Website</div>
                <div>{organization?.website}</div>
              </div>
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <div className={styles.infoTitle}>Registration Number</div>
                <div>{organization?.secp}</div>
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            className='d-flex flex-column'
            style={{ padding: "2rem" }}
          >
            <div className='d-flex flex-column'>
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <div className={styles.infoTitle}>Operating Category</div>
                <div>
                  {organization?.category[0].toUpperCase() +
                    organization?.category.slice(1)}
                </div>
              </div>
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <div className={styles.infoTitle}>Funds Collected</div>
                <div>{balance.toFixed(0)}$</div>
              </div>
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <div className={styles.infoTitle}>Campaigns Enrolled</div>
                <div>{organization?.campaigns.length}</div>
              </div>
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <div className={styles.infoTitle}>Funds Disbursed</div>
                <div>some value</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className=' d-flex flex-column'>
          <Col className='d-flex flex-column mt-5 mb-3'>
            <div className='d-flex flex-row align-items-center justifty-content-center mb-2'>
              <GiBullseye color='#1d1ce5' className='me-1' size={30} />{" "}
              <span className={styles.projectSubtitle}>Description</span>
            </div>
            <span className='w-50'>{organization?.description}</span>
          </Col>
          <Col className='d-flex flex-column mt-5 mb-3'>
            <div className='d-flex flex-row align-items-center justifty-content-center mb-2'>
              <GiBullseye color='#1d1ce5' className='me-1' size={30} />{" "}
              <span className={styles.projectSubtitle}>Goals</span>
            </div>
            <span className='w-50'>{organization?.goals}</span>
          </Col>
          <Col className='d-flex flex-column mt-5 mb-3'>
            <div className='d-flex flex-row align-items-center justifty-content-center mb-2'>
              <span className={styles.projectSubtitle}>Enrolled Campaigns</span>
            </div>
            <BackedSection campaignIds={organization?.campaigns} npoDisplay />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Goals;
