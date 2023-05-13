import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Index.module.css";
import { getBalance } from "../../Web3/Organizations";
import { useSelector } from "react-redux";
export default function Header() {
  const state = useSelector((state) => state);
  const [user, setUser] = useState(state.user.user.user);
  const [npo, setNpo] = useState(state.user.npo);

  useEffect(() => {
    setUser(state.user.user.user);
  }, [user]);

  useEffect(() => {
    if (npo.loggedIn) {
      getBalance(npo.addressHash).then((res) => {
        setNpo({ ...npo, balance: res, totalDisbursed: 0 });
      });
    }
  }, []);

  return (
    <Container fluid className='px-5 mt-4' style={{ position: "relative" }}>
      <Row
        className={styles.headerDataContainer + " d-flex align-items-center  "}
      >
        <Col
          xs={12}
          md={12}
          lg={"auto"}
          className='d-flex align-items-center justify-content-center p-0 '
        >
          <img
            className={styles.headerImg}
            src={
              npo.loggedIn
                ? "/Logos/edhi.png"
                : "data:image/jpeg;base64,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"
            }
          />
        </Col>
        <Col
          xs={12}
          md={12}
          lg={"auto"}
          className={
            styles.userData +
            " d-flex flex-column align-items-start ms-lg-3 justify-content-center "
          }
        >
          <span className='fs-sm-1 fs-2   '>
            {user?.name?.charAt(0).toUpperCase() + user?.name?.slice(1) ||
              npo?.name?.charAt(0).toUpperCase() + npo?.name?.slice(1)}
          </span>
          <div
            className={
              styles.userFundData + " d-flex flex-row align-items-center   "
            }
          >
            <div className='me-lg-4  '>
              <div>
                <span
                  style={{
                    fontWeight: "500",
                  }}
                  className='fs-4 '
                >
                  {" "}
                  {user?.totalFunding || npo?.balance}
                </span>
                <span
                  style={{
                    fontWeight: "400",
                  }}
                  className='fs-4 '
                >
                  $
                </span>
                {"  "}
                <span>{npo.loggedIn ? "Funds" : "Donated"}</span>
              </div>
            </div>
            <div>
              <span
                style={{
                  fontWeight: "500",
                }}
                className=' fs-4 '
              >
                {user?.campaignsFunded?.length || npo?.campaigns?.length}
              </span>{" "}
              <span>
                {npo.loggedIn ? "Campaigns Enrolled" : "Campaigns Funded"}
              </span>
            </div>
            {npo.loggedIn && (
              <div>
                <span className=' ms-lg-4 fs-4 fw-bold'>
                  {npo?.totalDisbursed}
                </span>{" "}
                <span>Total Disbursed</span>
              </div>
            )}
          </div>
        </Col>
        {user && <button className={styles.editBtn}>Edit</button>}
      </Row>
    </Container>
  );
}
