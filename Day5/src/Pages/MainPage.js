import { Link } from "react-router-dom";
import '../assets//Css/MainPage.css'
import NavBar from "../components/NavBar";
const MainPage = () => {
    return(
        <div className="mainpage-wrapper">
            <NavBar/>
        <div className="quote">
            <h2>Our Progress as a nation can be no swifter than our progress in education.The human mind is our fundamental resource.</h2>
        </div>

        <h1>
            <div className="login_val">
           <Link to = '/login'> Login </Link>
           </div>
        </h1>
        
        </div>
    )
}
export default MainPage;