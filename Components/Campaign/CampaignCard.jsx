import React, { Suspense } from "react";
import { Col } from "react-bootstrap";
import Image from "next/image";
import styles from "./Campaign.module.css";

export default function CampaignCard() {
  return (
    <Col md={6} lg={4} className='d-flex flex-column mt-3 p-3 '>
      <Suspense fallback={<div>Loading...</div>}>
        <Image
          src='/Images/Campaign-2.jpg'
          style={styles.cardImage}
          height={200}
          width={150}
          blurDataURL='data:...'
          placeholder='blur'
        />
      </Suspense>
      <span className='fs-3 mt-2'>Card Title</span>
      <span className={styles.cardDesc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        eveniet sapiente, sunt, sequi accusamus vero qui earum quas provident
        perspiciatis deserunt suscip
      </span>
      <div
        className={
          "d-flex flex-row align-items-center justify-content-between w-100 px-1 align-self-center mt-2 " +
          styles.cardStats
        }
      >
        <div>
          <span className={styles.fadeColor + " me-1"}>Current</span>
          <span>$ 17,000</span>
        </div>
        <div>
          <span className={styles.fadeColor + " me-1"}>All Time</span>
          <span>$ 17,000</span>
        </div>
      </div>
      <button className={styles.btn + " mx-1 mt-3"}>Fund Now</button>
    </Col>
  );
}
