import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Campaign.module.css";

export default function Campaign() {
  return (
    <Container fluid className='px-5 mb-5'>
      <img src='/Images/Campaign-2.jpg' className={styles.img} />
      <div
        className={
          styles.contentContainer +
          " d-flex flex-row justify-content-between mt-3"
        }
      >
        <div className={styles.textContainer + " d-flex flex-column"}>
          <span className='fs-1'>Some Campaign Name</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            molestiae quasi soluta! Tempore natus architecto tenetur cupiditate
            dolorem. Sint repellendus ad commodi laborum magni illo, fugit est
            minus ipsa atque.
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            possimus totam beatae magnam ducimus. Tenetur, quae fugiat ab nam
            est culpa vitae nesciunt dolore earum, accusamus voluptas ipsum
            aliquid saepe? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Omnis
          </span>
        </div>
        <div
          className={
            styles.fundContainer +
            " d-flex flex-column align-items-center justify-content-center mt-4"
          }
        >
          <span className='fs-1 fw-bolder primaryColor'>$ 17,000</span>
          <button className={styles.btn}>Fund Now</button>
        </div>
      </div>
    </Container>
  );
}
