import React from "react";
import { Container, Row } from "react-bootstrap";
import StatCard from "./StatCard";
import styles from "./Stats.module.css";
const statCards = [
  {
    src: "/Images/donationRecieved.png",
    figure: 27000,
    text: "Donations Recieved",
  },
  {
    src: "/Images/donationTransferred.png",
    figure: 25000,
    text: "Donations Transferred",
  },
  {
    src: "/Images/totalCampaigns.png",
    figure: 30,
    text: "Total Campaigns",
  },
];
export default function Stats() {
  return (
    <Container className={styles.stats + " d-flex flex-column mt-5"}>
      <div className={styles.headingContainer + " d-flex flex-column"}>
        <span className={styles.heading + " fs-1"}>Donation Statistics</span>
      </div>
      <Row className='align-items-center justify-content-center'>
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
