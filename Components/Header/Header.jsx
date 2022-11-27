import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <Container fluid className='p-0 m-0'>
      <div className={styles.header}>
        <div className={styles.headerTextContainer}>
          <span className={styles.headerText}>
            We Believe in{" "}
            <span style={{ color: "#1D1CE5" }}> Transparency </span>
          </span>
          <span className={styles.headerSubText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            quas ipsa repellat numquam omnis neque eos dolorum eum hic aliquam
            dolorem velit ea rerum adipisci officiis, atque iure quibusdam quod.
          </span>
          <div className={styles.btnContainer}>
            <button className={styles.btn}>Explore</button>
            <button className={styles.btn}>Sign Up</button>
          </div>
        </div>
        <img
          src='/Images/headerImg.jpg'
          alt='Header'
          className={styles.headerImg}
        />
      </div>
    </Container>
  );
}
