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
import UserStore from "../../Redux/User";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { logout, logoutNPO } from "../../Redux/User";

const DynamicAuth = dynamic(() => import("./Auth.js"), {
  ssr: true,
});

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

const Account = () => {
  const [show, setShow] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setShow(false);
  }, [router.pathname]);

  const handleShow = () => setShow(!show);

  const handleProfileNavigation = (link) => {
    setShow(false);
    router.push("/user/1");
  };
  const handleLogout = () => {
    setShow(false);
    UserStore.dispatch(logout());
    router.push("/");
  };
  return (
    <>
      <div
        className={"d-flex flex-column align-items-center " + styles.account}
      >
        <img
          className={"rounded-circle " + styles.accountImg}
          onClick={handleShow}
          src='https://pbs.twimg.com/profile_images/1354432287971147777/kIB1SPsA_400x400.jpg'
        />
        <div
          className={
            "d-flex flex-column " +
            styles.accountOptions +
            " " +
            (show && styles.showAccountOptions)
          }
        >
          <span
            className={styles.accountOption}
            onClick={handleProfileNavigation}
          >
            Profile
          </span>
          <span className={styles.accountOption} onClick={handleLogout}>
            Logout
          </span>
        </div>
      </div>
    </>
  );
};

export default function Navigationbar() {
  const [show, setShow] = useState(false);
  const [account, setAccount] = React.useState("");
  const [connected, setConnected] = React.useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [isNPO, setIsNPO] = useState(UserStore.getState().npo.loggedIn);
  const [isUser, setIsUser] = useState(UserStore.getState().user.loggedIn);

  useEffect(() => {
    console.log("Initiated");
    setIsNPO(UserStore.getState().npo.loggedIn);
    setIsUser(UserStore.getState().user.loggedIn);
  }, [UserStore.getState().npo.loggedIn, UserStore.getState().user.loggedIn]);

  let web3Modal;
  useEffect(() => {
    web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions,
    });
  }, []);
  useEffect(() => {
    setIsMobile(window.innerWidth < 786);
  }, []);

  const handleLogout = () => {
    UserStore.dispatch(logout());
    setIsUser(false);
  };
  const connectWallet = async () => {
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
  };

  return (
    <>
      <Navbar expand='lg' className={styles.ownNavbar}>
        <Container fluid className='p-1'>
          <Navbar.Brand>
            <Link href='/'>
              <img
                style={{ height: "50px", objectFit: "contain" }}
                className='link pointer'
                src={"/SiteLogo/logo-no-background.png"}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto align-items-center text-align-center justify-content-between'>
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

              <Nav className='ms-3'>
                <Link href='/contact'>
                  <span className='link pointer'>Contact</span>
                </Link>
              </Nav>
              {isMobile && (isUser || isNPO) && (
                <>
                  <Nav className='ms-3'>
                    <Link href='/user/1'>
                      <span className='link pointer'>Profile</span>
                    </Link>
                  </Nav>
                  <Nav className='ms-3'>
                    <Link href='/' onClick={handleLogout}>
                      <span className='link pointer'>Logout</span>
                    </Link>
                  </Nav>
                </>
              )}

              {isNPO || isUser ? (
                !isMobile && <Account />
              ) : (
                <div className={" " + styles.btnContainer}>
                  {!isNPO && (
                    <button
                      className={styles.btn + " " + styles.walletBtn}
                      onClick={connected ? () => {} : () => connectWallet()}
                    >
                      {connected ? "Disconnect" : "Connect Wallet"}
                    </button>
                  )}

                  {!isNPO && !isUser && (
                    <button
                      className={[styles.btn] + " " + (!isMobile && " ms-2 ")}
                      onClick={(e) => {
                        e.preventDefault();
                        setShow(true);
                      }}
                    >
                      Login
                    </button>
                  )}
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <DynamicAuth show={show} setShow={setShow} />
    </>
  );
}
