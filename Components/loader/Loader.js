import React from "react";
import styles from "./loader.module.css";
import { Spinner } from "react-bootstrap";

const Loader = () => (
  <div className={styles.fallbackSpinner}>
    <div className={styles.loading}>
      <Spinner animation='grow' variant='primary' />
    </div>
  </div>
);
export default Loader;
