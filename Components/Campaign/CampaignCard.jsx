import React, { Suspense, useState } from "react";
import { Col } from "react-bootstrap";
import styles from "./index.module.css";
import Fund from "./Fund/Fund";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useRouter } from "next/router";
export default function CampaignCard({ liked, isBacked }) {
  const router = useRouter();
  const [showFundModal, setShowFundModal] = useState(false);
  const [isLiked, setIsLiked] = useState(liked);
  const handleFundClick = () => {
    setShowFundModal(true);
  };
  const handleNavigate = () => {
    router.push("/campaign/1");
  };
  return (
    <>
      <Col md={6} lg={4} className='mt-3' onClick={handleNavigate}>
        <div
          className={"d-flex flex-column p-3 border " + styles.cardContainer}
        >
          {isLiked ? (
            <FaHeart
              className={styles.heartIcon}
              color='#e31b23'
              size={30}
              onClick={() => setIsLiked(!isLiked)}
            />
          ) : (
            <FiHeart
              className={styles.heartIcon}
              color='#fff'
              size={30}
              onClick={() => setIsLiked(!isLiked)}
            />
          )}

          <img src='/Images/Campaign-2.jpg' className={styles.cardImage} />

          <span className='fs-3 mt-2'>Card Title</span>
          <span className={styles.cardDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            eveniet sapiente, sunt, sequi accusamus vero qui earum quas
            provident perspiciatis deserunt suscip
            <span
              style={{ color: "#1d1ce5", fontWeight: 400 }}
              onClick={handleNavigate}
            >
              {" "}
              read more ...
            </span>
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
          <button
            className={styles.btn + " mx-1 mt-3"}
            onClick={handleFundClick}
          >
            {isBacked ? "Fund Again" : "Fund Now"}
          </button>
        </div>
      </Col>
      <Fund show={showFundModal} setShow={setShowFundModal} />
    </>
  );
}
