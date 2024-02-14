import React from 'react';
import BannerImage from '../../images/banner.jpg';
import '../../styles/banner.css';

function Banner() {
  return (
    <div className='banner-container'>
      <img src={BannerImage} alt='banner' className='banner-image'/>
      <div className='banner-text'>
        <h2>CLEAN WATER FOR YOU</h2>
        <p>Quenching Your Thirst, Sourcing Purity – Aquavo Water Vendors: Clean Water for You!</p>
      </div>
    </div>
  )
}

export default Banner
