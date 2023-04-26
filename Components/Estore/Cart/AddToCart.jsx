import React,{useState} from 'react';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import styles from './Index.module.css';
import RecommendedProducts from './RecommendedProducts';

export default function AddToCart() {

    const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className={styles.container}>
      <Row className="justify-content-center my-4" >
        <Col md={6}>
          <Image src="/Images/med1.jpeg" className={styles.productImage} />
        </Col>
        <Col md={6}>
          <div className={styles.productDetails}>
            <h3>Product Name</h3>
            <p className={styles.productDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nulla sagittis fermentum velit quis faucibus. 
              Nulla vel felis posuere, accumsan libero sed, semper libero.
            </p>
            <div className={styles.counter}>
              <Button variant="secondary"  onClick={handleDecrement}>-</Button>
              <span>{quantity}</span>
              <Button variant="secondary" onClick={handleIncrement}>+</Button>
            </div>
            <Button variant="primary" style={{ backgroundColor: '#1d1ce5', border: '1px solid #1d1ce5'}}>
              Add to Cart
            </Button>
          </div>
          <RecommendedProducts/>
        </Col>
        
      </Row>
    </div>
  );
}
