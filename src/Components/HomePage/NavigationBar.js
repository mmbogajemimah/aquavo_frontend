import React from "react";
import { Link } from "react-router-dom";
import AquavoLogo from '../../images/aquavo_logo.svg';
import '../../styles/home/navigationbar.css'; // Import CSS file directly

function NavigationBar() {
    return(
        <>
            <nav className="navbar"> {/* Apply the class directly */}
                <div className="company-slogan">
                    <img className="company-logo" src={AquavoLogo} width={40} height={40} alt="Aquavo Logo" />
                    <h1 className="company-name">AquaVo</h1>
                </div>
                <div>
                    <ul className="nav-list">
                        <li className="nav-item">About Us</li>
                        <li className="nav-item">Services</li>
                        <li className="nav-item">Contact</li>
                        <li className="nav-item"><Link to="/login">Sign In</Link></li>
                        <li className="nav-item"><Link to="/registration">Sign Up</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar;
