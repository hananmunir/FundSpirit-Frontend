import React,{useEffect, useState} from 'react';
import Head from 'next/head';
import styles from './Index.module.css';
import { useSelector } from "react-redux";
import { getBalance } from "../../../Web3/Organizations";
import Web3 from "web3";
import EthRate from "../../../Utilities/EthRate";

function PaymentPage() {


    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(19.99);
    const [balance, setBalance] = useState(100);
     //to get npo id from redux store
    // const npoId = useSelector((state) => state.user.npo._id);
    // console.log(npoId);

    //to get all details of npoId
    const npo = useSelector((state) => state.user.npo);
    console.log(npo);

    //to get balance of npo
    // useEffect(() => {
    //   if (npo)
    //     getBalance(npo.addressHash)
    //       .then((res) => {
    //         EthRate()
    //           .then((rate) =>
    //             setBalance(Web3.utils.fromWei(res.toString(), "ether") * rate)
    //           )
    //           .catch(() =>
    //             setBalance(Web3.utils.fromWei(res.toString(), "ether") * 1800.2)
    //           );
    //       })
    //       .catch((err) => console.log(err));
    // }, [npo]);
    // console.log(balance);

    //to convert eth to dollar
    
    
  
    const handleQuantityChange = (event) => {
      const newQuantity = parseInt(event.target.value);
      setQuantity(newQuantity);
      setPrice(newQuantity * 19.99); // assuming the initial price is $19.99
    };
  
    //to enable payment button if balance is greater than price
    const isPaymentEnabled = () => {
      if (balance >= price) {
        return true;
      } else {
        return false;
      }
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
          <h2 className={styles.checkoutTitle}>Organization Details</h2>
          {/*to get npo details*/}
        <span className={styles.checkoutName}>Organization Name: </span>
        <p className={styles.checkoutInfoText}>{npo.name}</p>
        <span className={styles.checkoutAddress}>Organization Address: </span>
        <p className={styles.checkoutInfoText}>{npo.address}</p>
        <span className={styles.checkoutBalance}>Organization Balance: </span>
        <p className={styles.checkoutInfoText}>{balance}$ </p>
        <div className={styles.checkoutButtonContainer}>
        <button
          className={styles.payNow}
          disabled={!isPaymentEnabled()}
          style={{ opacity: isPaymentEnabled() ? 1 : 0.5 }}
        >
          Pay Now
        </button>

        </div>
        </div>
        
      </div>
    </div>
  );
}

export default PaymentPage;
