import React from "react";
import { Col } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import { AiOutlineTag } from "react-icons/ai";
import styles from "./index.module.css";
import { useRouter } from "next/router";

function NpoCard({ organization }) {
  const router = useRouter();
  const handleNavigate = () => {
    //redirect
    router.push("/npo/" + organization.id);
  };
  return (
    <Col
      md={6}
      lg={4}
      className='d-flex flex-column mt-3 p-3 '
      style={{
        position: "relative",
        cursor: "pointer",
      }}
      onClick={handleNavigate}
    >
      <img src={organization.imageUrl} className={styles.NpoCardImage} />
      <span className='fs-4 mt-2'>{organization.name}</span>
      <div className='NpoDetails'>
        <div>
          <span className='fadeColor me-1'>
            <GoLocation />
          </span>
          <span style={{ fontSize: ".8rem" }}>{organization.address}</span>
        </div>
        <div className='d-flex flex-row '>
          <span className='fadeColor me-1'>
            <AiOutlineTag />
          </span>
          <div className={styles.tagList}>
            <span>Education, </span>
            <span>Health</span>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default NpoCard;
