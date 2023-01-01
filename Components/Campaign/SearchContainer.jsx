import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.css";

function SearchContainer({ npo }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <Container fluid className={styles.campaignHeader}>
      <Row className='w-100'>
        <Col className='d-flex flex-column align-items-center justify-content-center w-100'>
          <h1>Explore & Discover</h1>
          <span>
            {" "}
            {npo
              ? "Search Non Profit Organizations"
              : "Looking for a Specific Campaign?"}{" "}
          </span>
          <div className={styles.searchBarContainer}>
            <input
              placeholder={npo ? "Search NPO" : "Search Campaigns"}
              type='text'
              className={styles.searchBar}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className={styles.campaignHeaderSearchBtn}>Search</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchContainer;
