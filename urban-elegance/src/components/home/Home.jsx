import Header from "../header/Header";
import ContentHome from "../contentHome/ContentHome";
import "./Home.css";
// import SeccionBottom from "../seccionBoton/SeccionBoton"
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Ticker from "../tickers/Tickers";
import Card from "../card/Card";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Header />
        <div className="ticker-container">
          <Ticker />
        </div>

        <Link to="/store">
          <ContentHome />
          
          
          
        </Link>
        
      </div>
      <Card/>

      {/* <div className="container-carousel">
        <SeccionBottom />
        <SeccionBottom />
        
        </div> */}
      <Footer />
    </>
  );
};

export default Home;
