import React from "react";
// import { Link } from "react-router-dom";
import AquavoLogo from '../../images/aquavo_logo.svg';
import '../../styles/home/navigationbar.css'; // Import CSS file directly

function RegNavBar() {
    return(
        <>
            <nav className="navbar"> {/* Apply the class directly */}
                <div className="company-slogan">
                    <img className="company-logo" src={AquavoLogo} width={40} height={40} alt="Aquavo Logo" />
                    <h1 className="company-name">AquaVo</h1>
                </div>
            
            </nav>
        </>
    )
}

export default RegNavBar;

