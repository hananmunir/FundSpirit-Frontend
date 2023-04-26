import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import styles from './Index.module.css';
import backgroundImage from "../../../public/Images/Campaign-1.jpg";

export default function Searchbar() {
  return (
    <div className={styles.header} >
      <div className={styles.overlay}></div>
      <div className={styles.searchBarContainer}>
        <InputGroup className={styles.searchBar}>
          <FormControl
            placeholder="Type here.."
            aria-label="Type here..."
            aria-describedby="basic-addon2"
          />
          <Button variant="primary" id="button-addon2" style={{ backgroundColor: '#1d1ce5', border: '1px solid #1d1ce5' }}>
            Search
          </Button>
        </InputGroup>
        <div className={styles.subheader}>Search. Find. Get well.</div>
      </div>
      
    </div>
  )
}
