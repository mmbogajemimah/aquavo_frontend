import React from "react";
import AboutImage from '../../images/waterfall.jpg'
import '../../styles/home/about.css'

function About() {
  return (
    <div className="about-section">
      <img alt='aboutImage' src={AboutImage} className="about-image" />
      <div className="about-description">
        <h2 className="about-header">About AquaVo</h2>
        <p>Aquavo Water Vendors is your premier source for pure, refreshing hydration. Our commitment to cleanliness and customer satisfaction sets us apart. We source water from natural springs, guaranteeing purity, while also prioritizing sustainability and minimizing our environmental impact. With a user-friendly app and responsive customer service, obtaining clean water is effortless. Our innovative approach includes smart delivery solutions for your convenience. Choose Aquavo for a crisp and eco-conscious hydration experience. Clean Water for You, Today and Always!</p>
        <button className="about-button">Get In Touch</button>
      </div>
    </div>
  )
}

export default About
