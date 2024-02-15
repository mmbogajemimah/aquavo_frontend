import React from 'react';
import GlassWater from '../../images/banner.jpg';
import Droplet from '../../images/droplet.jpg';
import Fountain from '../../images/fountain.jpg'
import '../../styles/footer.css';

function Footer() {
  return (
    <div className='footer-section'>
      <div className='footer-images'>
        <img src={GlassWater} alt='water in glass' />
        <img src= {Droplet} alt='water droplet' />
        <img src={Fountain} alt ='water fountain'/>
      </div>
      
      <div className='footer-descriptions'>
        <h2 className='footer-desc-header'>Partner with Us</h2>
        <div className='footer-description'>
          <div className='footer-desc'>
            <h6>Mailing Address</h6>
            <p>Riara University Way</p>
          </div>
          <div className='footer-desc'>
            <h6>Email Address</h6>
            <p>aquavovender@gmail.com</p>
          </div>
          <div className='footer-desc'>
            <h6>Phone Number</h6>
            <p>+2547987654134</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
