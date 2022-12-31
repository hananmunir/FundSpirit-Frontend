import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Web3Modal from "web3modal";
import Authereum from "authereum";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";
import styles from "./Navigation.module.css";
import { useEffect } from "react";
import Modal from "./Model.js";
import Link from "next/link";

const providerOptions = {
  binancechainwallet: {
    package: true,
  },
  metamask: {
    package: true,
  },
  authereum: {
    package: Authereum, // required
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "ca8f70dd90834149890372b6101d35fe",
    },
  },
};

export default function Navigationbar() {
  const [show, setShow] = useState(false);
  const [account, setAccount] = React.useState("");
  const [connected, setConnected] = React.useState(false);
  let web3Modal;
  useEffect(() => {
    web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions,
    });
  }, []);

  async function connectWallet() {
    try {
      //web3Modal.clearCachedProvider();
      const web3ModalInstance = await web3Modal.connect();
      const web3Provider = new ethers.providers.Web3Provider(web3ModalInstance);
      const signer = web3Provider.getSigner();
      const address = await signer.getAddress();
      // setAccount(address);
      setConnected(true);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Navbar expand='lg' className={styles.ownNavbar}>
        <Container fluid className='p-3'>
          <Navbar.Brand>
            <Link href='/'>
              <span className='link pointer'>Fund Spirit</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto align-items-center justify-content-between'>
              <Nav className='ms-3'>
                <Link href='/'>
                  <span className='link pointer'>Home</span>
                </Link>
              </Nav>
              <Nav className='ms-3'>
                <Link href='/campaigns'>
                  <span className='link pointer'>Campaigns</span>
                </Link>
              </Nav>

              <Nav className='ms-3'>
                <Link href='/npos'>
                  <span className='link pointer'>NPO Partners</span>
                </Link>
              </Nav>

              <Nav className='ms-3'>
                <Link href='/about'>
                  <span className='link pointer'>About</span>
                </Link>
              </Nav>

              <Nav className='mx-3'>
                <Link href='/contact'>
                  <span className='link pointer'>Contact</span>
                </Link>
              </Nav>
              <div className={[styles.btnContainer]}>
                <button
                  className={styles.btn + " " + styles.walletBtn}
                  onClick={connected ? () => {} : () => connectWallet()}
                >
                  {connected ? "Disconnect" : "Connect Wallet"}
                </button>

                <button
                  className={[styles.btn]}
                  onClick={(e) => {
                    e.preventDefault();
                    setShow(true);
                  }}
                >
                  Login
                </button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} setShow={setShow} />
    </>
  );
}
