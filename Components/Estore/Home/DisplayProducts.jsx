import React from 'react';
import { Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

export default function DisplayProducts() {
  return (
    <div>
      <Row className="mx-auto my-4" style={{ width: '80%' }}>
        <ProductCard
          image="/Images/med1.jpeg"
          title="Product Title"
          description="This is the description of the product."
          buttonText="Buy Now"
          buttonText2= "Add to Cart"
        />
        <ProductCard
          image="/Images/med3.jpeg"
          title="Product Title"
          description="This is the description of the product."
          buttonText="Buy Now"
          buttonText2= "Add to Cart"
        />
        <ProductCard
          image="/Images/med2.jpeg"
          title="Product Title"
          description="This is the description of the product."
          buttonText="Buy Now"
          buttonText2= "Add to Cart"
        />
      </Row>
    </div>
  );
}
