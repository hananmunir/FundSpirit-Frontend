import React from "react";
import { Col } from "react-bootstrap";
import styles from "./Stats.module.css";
import CountUp from "react-countup";
export default function StatCard({ src, figure, text }) {
  return (
    <Col
      sm={12}
      md={6}
      lg={4}
      className='d-flex flex-column  align-items-center p-4 mt-5'
    >
      <img src={src} alt='charity-icon' className={styles.charityIcon} />
      <span className={styles.statFigure + " mt-4 mb-2"}>
        <CountUp
          start={0}
          end={parseInt(figure)}
          duration={2.75}
          separator=','
          prefix='$'
          // suffix='k'
          onEnd={() => console.log("Ended! 👏")}
          onStart={() => console.log("Started! 💨")}
        />
      </span>
      <span className={styles.statSubText}>{text}</span>
    </Col>
  );
}
