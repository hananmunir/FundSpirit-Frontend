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
            This is a <span style={{ color: "#1D1CE5" }}> Funding </span> App
          </span>
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
