import "../styles/globals.css";
import dynamic from "next/dynamic";
import Footer from "../Components/Navigation/Footer";
import Navbar from "../Components/Navigation/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { MoralisProvider } from "react-moralis";
// const Navbar = dynamic(() => import("../Components/Navigation/Navbar"), {
//   ssr: false,
// });
function MyApp({ Component, pageProps }) {
  return (
    <>
      <MoralisProvider initializeOnMount={false}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </MoralisProvider>
    </>
  );
}

export default MyApp;
