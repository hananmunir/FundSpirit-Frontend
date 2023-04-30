import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import BackedSection from "./BackedSection";
import LikedSection from "./LikedSection";
import TransactionsSection from "./FundHistory";
import StatisticsSection from "./StatisticsSection";
import styles from "./index.module.css";
const headers = ["backed", "liked", "transactions", "stats"];
const npoHeaders = ["backed", "transactions", "stats"];
export default function UserSectionHeader() {
  const state = useSelector((state) => state.user);
  const [activeSection, setActiveSection] = useState("backed");
  const [user, setUser] = useState(state.user.user);
  const [npo, setNpo] = useState(state.npo);
  console.log(npo);
  useEffect(() => {
    setUser(state.user.user);
  }, [user]);
  useEffect(() => {
    //add class on active section

    const highlightHeader = (header) => {
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
    };
    if (npo.loggedIn) {
      npoHeaders.map((header) => {
        highlightHeader(header);
      });
    } else {
      headers.map((header) => {
        highlightHeader(header);
      });
    }

    //remove class on inactive section
  }, [activeSection]);
  return (
    <Container className='my-5'>
      <Row className=' d-flex flex-col'>
        <Col
          lg={6}
          className={
            styles.headerTitles +
            "  d-flex flex-row align-items-center justify-content-between mb-4 flex-wrap"
          }
        >
          <div
            className={
              styles.sectionHeader +
              "  d-flex flex-row align-items-center justify-content-between "
            }
            onClick={() => setActiveSection("backed")}
          >
            <span id='backed'>{npo.loggedIn ? "Enrolled" : "Backed"}</span>
            <span className={styles.count} id='backedCount'>
              {user?.campaignsFunded?.length || npo?.campaigns?.length}
            </span>
          </div>
          {user && (
            <div
              className={
                styles.sectionHeader +
                "  d-flex flex-row align-items-center justify-content-between"
              }
              onClick={() => setActiveSection("liked")}
            >
              <span id='liked'>Liked</span>
              <span className={styles.count} id='likedCount'>
                {user?.campaignsLiked?.length}
              </span>
            </div>
          )}

          <div
            className={
              styles.sectionHeader +
              "  d-flex flex-row align-items-center justify-content-between"
            }
            onClick={() => setActiveSection("transactions")}
          >
            <span id='transactions'>
              {npo.loggedIn ? "Orders" : "Transactions"}
            </span>
            <span className={styles.count} id='transactionsCount'>
              {user?.transactions?.length || 0}
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
            <BackedSection
              campaignIds={npo.loggedIn ? npo.campaigns : user?.campaignsFunded}
            />
          ) : activeSection === "liked" ? (
            <LikedSection campaignIds={user?.campaignsLiked} />
          ) : activeSection === "transactions" ? (
            <TransactionsSection
              transactions={npo.loggedIn ? npo?.orders : user?.transactions}
            />
          ) : (
            <StatisticsSection />
          )}
        </Col>
      </Row>
    </Container>
  );
}
