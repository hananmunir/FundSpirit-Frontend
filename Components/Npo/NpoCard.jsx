import React from "react";
import { Col } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import { AiOutlineTag } from "react-icons/ai";
import styles from "./index.module.css";
import { useRouter } from "next/router";

function NpoCard({ org, organization }) {
  const router = useRouter();
  const handleNavigate = () => {
    //redirect
    router.push("/npo/" + org.id);
  };

  console.log(organization);
  return (
    <Col md={6} lg={4} className='h-100'>
      <div
        className='d-flex flex-column mt-3 p-3  border h-100  '
        style={{
          position: "relative",
          cursor: "pointer",
        }}
        onClick={handleNavigate}
      >
        <img src={org.imageUrl} className={styles.NpoCardImage} />
        <div className='mt-3'>
          <span className='fs-4 mt-2'>{organization.name}</span>
          <div className='NpoDetails'>
            <div>
              <span className='fadeColor me-1'>
                <GoLocation color='#808080' />
              </span>
              <span className={styles.address}>{organization?.address}</span>
            </div>
            <div className='d-flex flex-row '>
              <span className='fadeColor me-1'>
                <AiOutlineTag color='#808080' />
              </span>
              <div className={styles.tagList}>
                <span className='me-1'>Education, </span> <span>Health</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default NpoCard;
