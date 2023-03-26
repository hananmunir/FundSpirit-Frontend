import "../styles/globals.css";
import Head from "next/head";
import dynamic from "next/dynamic";
import Footer from "../Components/Navigation/Footer";
import Navbar from "../Components/Navigation/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
// const Navbar = dynamic(() => import("../Components/Navigation/Navbar"), {
//   ssr: false,
// });
//change name of website

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FundSpirit</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
