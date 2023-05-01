import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.css";

function SearchContainer({
  npo,
  searchQuery,
  setSearchQuery,
  handleSearch,
  searched,
  handleClear,
}) {
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
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            <button
              className={styles.campaignHeaderSearchBtn}
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          {searched && (
            <div
              style={{
                marginLeft: "8rem",
              }}
              className='w-50  d-flex align-items-end justify-content-end cursor-pointer '
            >
              <span
                style={{
                  position: "absolute",
                  marginBottom: ".5rem",
                  cursor: "pointer",
                }}
                onClick={handleClear}
                className='cursor-pointer'
              >
                Clear Search
              </span>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default SearchContainer;
