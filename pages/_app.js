import "../styles/globals.css";
import { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Footer from "../Components/Navigation/Footer";
import Navbar from "../Components/Navigation/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import useCampaignStore from "../Redux/Campaigns";
import useNPOStore from "../Redux/NPOs";
import { fetchAllCampaigns } from "../Api/Campaigns";
import { fetchAllCampaigns as reduxFetchCampaigns } from "../Redux/Campaigns";
import { fetchAllNPOs } from "../Api/NPOs";
import { fetchAllNPOs as reduxFetchNPOs } from "../Redux/NPOs";
// const Navbar = dynamic(() => import("../Components/Navigation/Navbar"), {
//   ssr: false,
// });
//change name of website

function MyApp({ Component, pageProps }) {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    fetchAllCampaigns().then((res) => {
      useCampaignStore.dispatch(reduxFetchCampaigns(res.data));
    });
    fetchAllNPOs().then((res) => {
      useNPOStore.dispatch(reduxFetchNPOs(res.data));
    });
  }, [useCampaignStore]);
  useEffect(() => {
    setIsAuth(
      String(window.location.href).includes("npo/auth") ||
        String(window.location.href).includes("npo/login")
    );
  });
  return (
    <>
      <Head>
        <title>FundSpirit</title>
      </Head>
      <ToastContainer />
      {!isAuth && <Navbar />}
      <Component {...pageProps} />
      {!isAuth && <Footer />}
    </>
  );
}

export default MyApp;
