import React from "react";
import { Link } from "react-router-dom";
import AquavoLogo from '../../images/aquavo_logo.svg';
import '../../styles/home/navigationbar.css'; // Import CSS file directly

function RegNavBar() {
    return(
        <>
            <nav className="navbar"> 
                <div className="company-slogan">
                    <img className="company-logo" src={AquavoLogo} width={40} height={40} alt="Aquavo Logo" />
                    <h1 className="company-name"><Link to='/'>AquaVo</Link></h1>
                </div>
            
            </nav>
        </>
    )
}

export default RegNavBar;

