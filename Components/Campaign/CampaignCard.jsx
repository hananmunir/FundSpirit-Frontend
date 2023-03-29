import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import styles from "./index.module.css";
import Fund from "./Fund/Fund";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useRouter } from "next/router";
import { getCampaign, getBalance } from "../../Web3/Campaign";
import Web3 from "web3";
export default function CampaignCard({
  liked,
  isBacked,
  cam,
  address,
  campaign,
}) {
  const router = useRouter();
  const [showFundModal, setShowFundModal] = useState(false);
  const [campaignData, setCampaignData] = useState();
  const [funds, setFunds] = useState(0);
  const [isLiked, setIsLiked] = useState(liked);
  const handleFundClick = () => {
    setShowFundModal(true);
  };
  const handleClick = (e) => {
    //check if clicked on fund button
    if (e.target.className.includes("btn")) {
      handleFundClick();
    } else {
      router.push("/campaign/" + campaign._id);
    }
  };

  useEffect(() => {
    if (campaign.address) {
      getBalance(campaign.address).then((res) => {
        //still have to make conversion dynamic
        setFunds(Web3.utils.fromWei(res.toString(), "ether") * 1800.2);
      });
    }
  }, [showFundModal]);
  return (
    <>
      <Col
        md={6}
        lg={4}
        className='mt-3 h-100'
        style={{
          zIndex: 1,
        }}
      >
        <div
          className={
            "d-flex flex-column p-3 border h-100 " + styles.cardContainer
          }
          onClick={handleClick}
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

          <img src={cam?.imageUrl} className={styles.cardImage} />

          <span className='fs-4 mt-2'>{campaign?.name}</span>
          <span className={styles.cardDesc}>
            {campaign?.description.slice(0, 130)}
            <span
              style={{ color: "#1d1ce5", fontWeight: 400, cursor: "pointer" }}
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
              <span>$ {funds.toFixed()}</span>
            </div>
            <div>
              <span className={styles.fadeColor + " me-1"}>All Time</span>
              <span>$ {cam?.totalFunds}</span>
            </div>
          </div>
          <button className={styles.btn + " mx-1 mt-3"}>
            {isBacked ? "Fund Again" : "Fund Now"}
          </button>
        </div>
      </Col>
      <Fund
        show={showFundModal}
        setShow={setShowFundModal}
        address={campaign?.address}
      />
    </>
  );
}
