import Head from 'next/head';
import {useState} from "react"
import styles from './Index.module.css';

function PaymentPage() {

    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(19.99);
  
    const handleQuantityChange = (event) => {
      const newQuantity = parseInt(event.target.value);
      setQuantity(newQuantity);
      setPrice(newQuantity * 19.99); // assuming the initial price is $19.99
    };
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Payment Page</title>
      </Head>
      <div className={styles.row}>
        <div className={styles.productColumn}>
        <h2 className={styles.productTitle}>Product Details</h2>
      <img className={styles.productImage} src="/Images/med1.jpeg" alt="Product Image" />
      <p className={styles.productName}>Product Name: Acefyl</p>
      <p className={styles.productPrice}>Total: ${price.toFixed(2)}</p>
      <p className={styles.productDescription}>Description: This is a description of the product.</p>
      <div className={styles.quantityContainer}>
        <label htmlFor="quantity">Quantity:</label>
        <input id="quantity" name="quantity" type="number" value={quantity} min="1" max="10" onChange={handleQuantityChange} />
      </div>
        </div>
        <div className={styles.formColumn}>
          <h2 className={styles.checkoutTitle}>Checkout Form</h2>
          <form>
            <input id="name" name="name" type="text" className={styles.input} placeholder="Name" />
            <input id="email" name="email" type="email" className={styles.input} placeholder="Email" />
            <input id="address" name="address" type="text" className={styles.input} placeholder="Address" />
            <input id="city" name="city" type="text" className={styles.input} placeholder="City" />
            <input id="cardNumber" name="cardNumber" type="text" className={styles.input} placeholder="Card Number" />
            <input id="cardExpiration" name="cardExpiration" type="text" className={styles.input} placeholder="Card Expiration" />
            <input id="cardCVC" name="cardCVC" type="text" className={styles.input} placeholder="Card CVC" />
            <button type="submit" className={styles.submitButton}>Submit Payment</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
