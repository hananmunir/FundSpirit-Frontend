import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Web3Modal from "web3modal";
import Authereum from "authereum";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";
import styles from "./Navigation.module.css";
import { useEffect } from "react";

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
      web3Modal.clearCachedProvider();
      const web3ModalInstance = await web3Modal.connect();
      const web3Provider = new ethers.providers.Web3Provider(web3ModalInstance);
      const signer = web3Provider.getSigner();
      const address = await signer.getAddress();
      // setAccount(address);
      // setConnected(true);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Navbar bg='light' expand='lg' className={styles.ownNavbar}>
      <Container className='p-3'>
        <Navbar.Brand href='#home'>Fund Spirit</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Campaigns</Nav.Link>

            <Nav.Link href='#link'>Organizations</Nav.Link>

            <Nav.Link href='#link'>About</Nav.Link>

            <div className={[styles.btnContainer]}>
              <button
                className={styles.btn + " " + styles.walletBtn}
                onClick={connected ? () => {} : () => connectWallet()}
              >
                {connected ? "Disconnect" : "Connect Wallet"}
              </button>

              <button className={[styles.btn]}>Login</button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
