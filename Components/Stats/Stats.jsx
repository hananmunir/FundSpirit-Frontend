import React from "react";
import { Container, Row } from "react-bootstrap";
import StatCard from "./StatCard";
import styles from "./Stats.module.css";
const statCards = [
  {
    src: "/Images/donationRecieved.png",
    figure: 21000,
    text: "Donations Recieved",
  },
  {
    src: "/Images/donationTransferred.png",
    figure: 2121000,
    text: "Donations Transferred",
  },
  {
    src: "/Images/totalCampaigns.png",
    figure: 1000,
    text: "Total Campaigns",
  },
];
export default function Stats() {
  return (
    <Container className={styles.stats + " d-flex flex-column"}>
      <div className={styles.headingContainer + " d-flex flex-column"}>
        <span className={styles.heading + " fs-1"}>Donation Statistics</span>
        <span className={styles.subText}>
          Lorem ipsum some text exists here Lorem ipsum some text exists here
        </span>
      </div>
      <Row>
        {statCards.map((statCard, index) => (
          <StatCard
            key={index}
            src={statCard.src}
            figure={statCard.figure}
            text={statCard.text}
          />
        ))}
      </Row>
    </Container>
  );
}
