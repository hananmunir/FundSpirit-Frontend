import React from 'react';
import Link from "next/link";
import styles from './Index.module.css';
import { Col, Card, Button } from 'react-bootstrap';

export default function ProductCard(props) {
  return (
    <Col md={4}>
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title className='text-center' >{props.title}</Card.Title>
          <Card.Text className='text-center'>{props.description}</Card.Text>
          <Link href='/payment'>
          <Button variant="primary" className="w-100" style={{ backgroundColor: '#1d1ce5', border: '1px solid #1d1ce5', marginBottom: ".5rem" }}>{props.buttonText}</Button>
          </Link>
          
          <Link href='/cart'>
           <Button variant="primary" className="w-100" style={{ backgroundColor: '#1d1ce5', border: '1px solid #1d1ce5' }}>{props.buttonText2}</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
