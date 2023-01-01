import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SupporterCard from "./SupporterCard";
import PurchaseCard from "./PurchaseCard";
import styles from "./index.module.css";

function RecentPurchases() {
  return (
    <Container>
      <div className='d-flex flex-row align-items-center justifty-content-center mt-5'>
        <span className={styles.orgGoals}>Recent Purchases</span>
      </div>

      <Row className='mt-1'>
        <PurchaseCard />
        <PurchaseCard />
        <PurchaseCard />
        <PurchaseCard />
        <PurchaseCard />
        <PurchaseCard />
        <PurchaseCard />
        <PurchaseCard />
      </Row>
    </Container>
  );
}

export default RecentPurchases;
