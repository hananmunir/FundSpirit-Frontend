import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { Col } from "react-bootstrap";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import styles from "./index.module.css";
import Fund from "./Fund/Fund";
import { getBalance } from "../../Web3/Campaign";
import { enrollCampaign } from "../../Api/NPOs";
import EthRate from "../../Utilities/EthRate";
const BASE_URL_DEV = "http://localhost:8800/api/campaigns/images/";
export default function CampaignCard({ liked, isBacked, cam, campaign }) {
  const router = useRouter();
  const state = useSelector((state) => state.user);
  const [showFundModal, setShowFundModal] = useState(false);
  const [funds, setFunds] = useState(0);
  const [isLiked, setIsLiked] = useState(liked);
  const isNPO = state.npo.loggedIn;
  const [user, setUser] = useState(state.user.user);
  const handleFundClick = () => {
    setShowFundModal(true);
  };
  const handleClick = (e) => {
    //check if clicked on fund button
    console.log();
    if (typeof e.target.className === "object") {
      console.log("Call Like Dislike");
      return;
    }
    if (e.target.className.includes("btn")) {
      if (isNPO) {
        handleEnroll();
      } else {
        handleFundClick();
      }
    } else {
      router.push("/campaign/" + campaign._id);
    }
  };

  const handleEnroll = () => {
    enrollCampaign(
      {
        campaignId: campaign._id,
        id: state.npo._id,
      },
      state.npo.token
    )
      .then((res) => {
        toast("You are Successfully Enrolled in this Campaign", {
          type: "success",
        });
      })
      .catch((err) => {
        toast(err.response?.data?.message || "Error Enrolling", {
          type: "error",
        });
      });
  };
  useEffect(() => {
    if (campaign.address) {
      getBalance(campaign.address).then((res) => {
        //still have to make conversion dynamic
        EthRate()
          .then((rate) => {
            setFunds(Web3.utils.fromWei(res.toString(), "ether") * rate);
          })
          .catch((err) => {
            setFunds(Web3.utils.fromWei(res.toString(), "ether") * 1800.2);
          });
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
          {user &&
            (isLiked ? (
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
            ))}

          <img
            src={campaign.image ? BASE_URL_DEV + campaign.image : cam?.imageUrl}
            className={styles.cardImage}
          />

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
              <span>$ {campaign?.totalFundings}</span>
            </div>
          </div>

          {isBacked && isNPO ? (
            ""
          ) : (
            <button className={styles.btn + " mx-1 mt-3"}>
              {isNPO ? "Enroll" : isBacked ? "Fund Again" : "Fund Now"}
            </button>
          )}
        </div>
      </Col>
      <Fund
        show={showFundModal}
        setShow={setShowFundModal}
        campaign={campaign}
      />
    </>
  );
}
