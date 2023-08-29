import Header from "../header/Header"
import ContentHome from '../contentHome/ContentHome'
import './Home.css'

const Home = () => {
    return(
        
        
        <div className="home-container">
        <Header/>
            <ContentHome />
        </div>
        
    )
}

export default Home