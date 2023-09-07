import { useAuth } from "../../context/AuthContext"
import Card from "../card/Card";
import Footer from "../footer/Footer";

import HeaderStore from "../header/HeaderStore";
import Ticker from "../tickers/Tickers";

const Store = () => {
    const auth = useAuth()
    const { displayName } = auth.user;
    console.log(displayName);
    return (
        
        <div>
            <HeaderStore/>
            <Ticker />
        <h5>Bienvenido  {displayName}</h5>
        <Card />

        <Footer />
        </div>

        
    )
        
}

export default Store