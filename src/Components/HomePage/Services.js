import React from 'react';
import DropletImage from '../../images/droplet.jpg';
import WaterTasting from '../../images/banner.jpg';
import AfterServices from '../../images/fountain2.jpg';
import '../../styles/home/services.css';

function Services() {
  return (
    <div className="services-container"> 
      <h1 className='services-header'>Services Offered</h1>
      <div className='service-section'>
        <div>
          <img src={DropletImage} alt='water-droplet' className='service-one'/>
          <div className='service-info'>
            <h4>Water Delivery</h4>
            <p>We deliver water in the comfort of your homes</p>
          </div>
        </div>
        <div>
          <img src={WaterTasting} alt='water-tasting' className='service-two'/>
          <div className='service-info'>
            <h4>Water Tasting</h4>
            <p>We allow our clients to taste our water before purchase</p>
          </div>
        </div>
        <div>
          <img src={AfterServices} alt='after-services' className='service-three'/>
          <div className='service-info'>
            <h4>After Services</h4>
            <p>We carry water jerricans for our clients</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
