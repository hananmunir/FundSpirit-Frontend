import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BackedSection from "./BackedSection";
import LikedSection from "./LikedSection";
import TransactionsSection from "./FundHistory";
import StatisticsSection from "./StatisticsSection";
import styles from "./index.module.css";
const headers = ["backed", "liked", "transactions", "stats"];
export default function UserSectionHeader() {
  const [activeSection, setActiveSection] = useState("backed");
  useEffect(() => {
    //add class on active section

    headers.map((header) => {
      if (header !== activeSection) {
        document.getElementById(header).classList.remove(styles.active);
        if (header === "stats") return;
        document
          .getElementById(header + "Count")
          .classList.remove(styles.activeCount);
      } else {
        document.getElementById(header).classList.add(styles.active);
        if (header === "stats") return;
        document
          .getElementById(header + "Count")
          .classList.add(styles.activeCount);
      }
    });
    //remove class on inactive section
  }, [activeSection]);
  return (
    <Container className='my-5'>
      <Row className=' d-flex flex-col'>
        <Col
          lg={6}
          className='  d-flex flex-row align-items-center justify-content-between mb-4'
        >
          <div
            className={
              styles.sectionHeader +
              "  d-flex flex-row align-items-center justify-content-between "
            }
            onClick={() => setActiveSection("backed")}
          >
            <span id='backed'>Backed</span>
            <span className={styles.count} id='backedCount'>
              12
            </span>
          </div>
          <div
            className={
              styles.sectionHeader +
              "  d-flex flex-row align-items-center justify-content-between"
            }
            onClick={() => setActiveSection("liked")}
          >
            <span id='liked'>Liked</span>
            <span className={styles.count} id='likedCount'>
              12
            </span>
          </div>
          <div
            className={
              styles.sectionHeader +
              "  d-flex flex-row align-items-center justify-content-between"
            }
            onClick={() => setActiveSection("transactions")}
          >
            <span id='transactions'>Transactions</span>
            <span className={styles.count} id='transactionsCount'>
              12
            </span>
          </div>
          <div
            className={
              styles.sectionHeader +
              "  d-flex flex-row align-items-center justify-content-between"
            }
            onClick={() => setActiveSection("stats")}
          >
            <span id='stats'>Statistics</span>
          </div>
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
