import React from "react";
import "./loader.css";
import { Spinner } from "react-bootstrap";

const Loader = () => (
  <div className='fallback-spinner'>
    <div className='loading'>
      <Spinner animation='grow' variant='danger' />
    </div>
  </div>
);
export default Loader;
