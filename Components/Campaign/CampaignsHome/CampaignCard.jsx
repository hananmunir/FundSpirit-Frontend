import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import styles from "./Campaign.module.css";
import { gsap } from "gsap";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useRouter } from "next/router";

export default function CampaignCard({ lg }) {
  const router = useRouter();
  const ref = React.useRef(null);
  const [show, setShow] = React.useState(false);
  const descRef = React.useRef(null);
  const handeClick = () => {
    //redirect
    router.push("/campaigns");
  };

  useEffect(() => {
    if (show) {
      // show desc
      gsap.to(descRef.current, {
        duration: 0.4,
        height: "auto",
        opacity: 1,
        ease: "power3.easeOut",
      });
    } else {
      // hide desc
      gsap.to(descRef.current, {
        duration: 0.4,
        height: 0,
        opacity: 0,
        ease: "power3.easeOut",
      });
    }
  }, [show]);

  return (
    <Col
      lg={lg ? 6 : 4}
      className={styles.campaignContainer + " mt-3 relative"}
    >
      <img ref={ref} src='/Images/Campaign-1.jpg' className={styles.img} />
      <div
        className={styles.overlay}
        style={{ width: lg ? "95.8%" : "94%" }}
      ></div>
      <div className={styles.campaignTextContainer}>
        <span className={styles.heading}>
          Campaign{" "}
          {show ? (
            <BsChevronDown className='pointer' onClick={() => setShow(false)} />
          ) : (
            <BsChevronUp className='pointer' onClick={() => setShow(true)} />
          )}
        </span>
        <div className='d-flex flex-column' ref={descRef}>
          <span className={styles.subHeading}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            voluptates impedi ...
          </span>
          <button className={styles.btn} onClick={handeClick}>
            View More
          </button>
        </div>
      </div>
    </Col>
  );
}
