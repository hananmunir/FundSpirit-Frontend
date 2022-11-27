import "../styles/globals.css";
import Navbar from "../Components/Navigation/Navbar";
import Footer from "../Components/Navigation/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
