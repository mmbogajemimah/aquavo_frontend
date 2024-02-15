import React from 'react';
import '../../styles/testimonials.css'

function Testimonials() {
  return (
    <div>
      <div className='testimonial-container'>
        <div className='testimonial-content'>
          <h1 className='testimonial-header'>Satisfied Clients</h1>
          <div className='testimonial-items'>
            <div className='testimonial-item'>
              <p>My real estate agent was with me and my wife every step of the way. She kept us updated throughout the process.</p>
              <h6>John Doe</h6>
            </div>

            <div className='testimonial-item'>
              <p>I always rely on Qaiba Homes to take care of my real estate needs, no matter the location, square footage, or budget.</p>
              <h6>Jane Homes</h6>
            </div>

            <div className='testimonial-item'>
              <p>Our agent went above and beyond what was expected of her. We're thankful for her excellent service and assistance.</p>
              <h6>Hannah Bristols</h6>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Testimonials
