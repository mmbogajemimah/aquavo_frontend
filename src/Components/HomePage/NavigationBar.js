import React from "react";
import AquavoLogo from '../../images/aquavo_logo.svg';
import '../../styles/navigationbar.css'; // Import CSS file directly

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
                        <li className="nav-item">Sign In</li>
                        <li className="nav-item">Sign Up</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar;
