/* eslint-disable */

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
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { makeStore } from "../Redux/Index";

const { store, persistor } = makeStore();
// const Navbar = dynamic(() => import("../Components/Navigation/Navbar"), {
//   ssr: false,
// });
//change name of website

function MyApp({ Component, pageProps }) {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    fetchAllCampaigns()
      .then((res) => {
        useCampaignStore.dispatch(reduxFetchCampaigns(res.data));
      })
      .catch((err) => console.log(err));
    fetchAllNPOs()
      .then((res) => {
        useNPOStore.dispatch(reduxFetchNPOs(res.data));
      })
      .catch((err) => console.log(err));
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

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {!isAuth && <Navbar />}
          <Component {...pageProps} />
          {!isAuth && <Footer />}
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
