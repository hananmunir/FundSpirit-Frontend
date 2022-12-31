import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BackedSection from "./BackedSection";
import LikedSection from "./LikedSection";
import TransactionsSection from "./FundHistory";
import StatisticsSection from "./StatisticsSection";
import styles from "./index.module.css";
export default function UserSectionHeader() {
  const [activeSection, setActiveSection] = useState("backed");
  return (
    <Container className='my-5'>
      <Row className=' d-flex flex-col'>
        <Col
          lg={6}
          className='  d-flex flex-row align-items-center justify-content-between'
        >
          <span
            className={styles.sectionHeader}
            onClick={() => setActiveSection("backed")}
          >
            Backed
          </span>
          <span
            className={styles.sectionHeader}
            onClick={() => setActiveSection("liked")}
          >
            Liked
          </span>
          <span
            className={styles.sectionHeader}
            onClick={() => setActiveSection("transactions")}
          >
            Transactions
          </span>
          <span
            className={styles.sectionHeader}
            onClick={() => setActiveSection("Stats")}
          >
            Statistics
          </span>
        </Col>
        <Col lg={12}>
          {activeSection === "backed" ? (
            <BackedSection />
          ) : activeSection === "liked" ? (
            <LikedSection />
          ) : activeSection === "transactions" ? (
            <TransactionsSection />
          ) : (
            <StatisticsSection />
          )}
        </Col>
      </Row>
    </Container>
  );
}
