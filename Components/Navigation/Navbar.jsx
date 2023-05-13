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
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { addWallet, logout, logoutNPO, removeWallet } from "../../Redux/User";
import { useSelector, useDispatch } from "react-redux";

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
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    setShow(false);
  }, [router.pathname]);

  const handleShow = () => setShow(!show);

  const handleProfileNavigation = (link) => {
    setShow(false);

    router.push(state.npo.loggedIn ? "/account" : "/user/1");
  };

  const handleLogout = () => {
    setShow(false);

    dispatch(state.npo.loggedIn ? logoutNPO() : logout());
    window.location.href = "/";
  };
  return (
    <>
      <div
        className={"d-flex flex-column align-items-center " + styles.account}
      >
        <img
          className={"rounded-circle " + styles.accountImg}
          onClick={handleShow}
          src='/Images/account.jpeg'
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
            Account
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
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

  const [isNPO, setIsNPO] = useState(state.npo.loggedIn);
  const [isUser, setIsUser] = useState(state.user.loggedIn);
  let web3Modal, web3ModalInstance;

  console.log(state.npo);
  useEffect(() => {
    web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions,
    });
  }, []);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 786);

    checkMobile();

    window.addEventListener("resize", checkMobile);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    setIsUser(false);
    window.location.href = "/";
  };
  useEffect(() => {
    if (web3ModalInstance?.on) {
      const handleAccountsChanged = (accounts) => {
        dispatch(addWallet());
      };

      const handleChainChanged = (chainId) => {};

      const handleDisconnect = () => {
        dispatch(removeWallet());
      };

      web3ModalInstance.on("accountsChanged", handleAccountsChanged);
      web3ModalInstance.on("chainChanged", handleChainChanged);
      web3ModalInstance.on("disconnect", handleDisconnect);

      return () => {
        if (web3ModalInstance.removeListener) {
          web3ModalInstance.removeListener(
            "accountsChanged",
            handleAccountsChanged
          );
          web3ModalInstance.removeListener("chainChanged", handleChainChanged);
          web3ModalInstance.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, []);
  const connectWallet = async () => {
    try {
      const web3ModalInstance = await web3Modal.connect();
      const web3Provider = new ethers.providers.Web3Provider(web3ModalInstance);
      const signer = web3Provider.getSigner();
      const address = await signer.getAddress();
      dispatch(addWallet(address));
      // setAccount(address);
      setConnected(true);
    } catch (e) {
      console.log(e);
    }
  };

  const disConnectWallet = () => {
    dispatch(removeWallet());
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
                <Link href={isNPO ? "/estoreHome" : "/npos"}>
                  <span className='link pointer'>
                    {isNPO ? "EStore" : "NPO Partners"}
                  </span>
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
                    <span className='link pointer' onClick={handleLogout}>
                      Logout
                    </span>
                  </Nav>
                </>
              )}

              <div
                className={`ms-3 ${styles.btnContainer} ${
                  (isUser || isNPO) && styles.lessWidth
                } `}
              >
                {!isNPO && (
                  <button
                    className={styles.btn + " " + styles.walletBtn}
                    onClick={
                      state.user.walletAddress
                        ? () => disConnectWallet()
                        : () => connectWallet()
                    }
                  >
                    {state.user.walletAddress ? "Disconnect" : "Connect Wallet"}
                  </button>
                )}

                {!isNPO && !isUser ? (
                  <button
                    className={[styles.btn] + " " + (!isMobile && " ms-2 ")}
                    onClick={(e) => {
                      e.preventDefault();
                      setShow(true);
                    }}
                  >
                    Login
                  </button>
                ) : (
                  !isMobile && <Account />
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <DynamicAuth show={show} setShow={setShow} />
    </>
  );
}
