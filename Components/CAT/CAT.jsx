import React from "react";
import { Container } from "react-bootstrap";
import styles from "./CAT.module.css";
export default function CAT() {
  return (
    <Container
      className={
        styles.container +
        " d-flex flex-row justify-content-between align-items-center ps-5 my-5"
      }
    >
      <div className='d-flex flex-column'>
        <span className='fs-3'>
          Help <span style={{ color: "#1d1ce5" }}>Humanity</span> Believe Again
        </span>
        <button className={styles.btn}>Fund Now</button>
      </div>
      <img src='/Images/CAT.jpg' className={styles.img} />
    </Container>
  );
}
