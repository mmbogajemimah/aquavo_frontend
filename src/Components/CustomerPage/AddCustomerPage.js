import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../styles/customers/addcustomerpage.css';

function AddCustomerPage() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_no: '',
        estate: '',
        house_number: '',
        username: '',
        password: '',
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/accounts/create-customer/', formData);
            console.log('Customer created:', response.data)
        } catch (error){
            console.log('Error Creating Customer:', error)
        }
    }
  return (
    <>
      <div className="header-container">
            <Link to="/customers" className="back-link">« Back</Link>
            <h1 className='header'>Add Customer To System</h1>
      </div>
      <div className='add-customer-container'>
        <form className='add-customer-form' onSubmit={handleSubmit}>
          
          <input type="text" name="first_name" placeholder='First Name' value={formData.first_name} onChange={handleChange} />
          <input type="text" name="last_name" placeholder='Last Name' value={formData.last_name} onChange={handleChange} />
          <input type="text" name="username" placeholder='User Name' value={formData.username} onChange={handleChange} />
          <input type="text" name="password" placeholder='Password' value={formData.password} onChange={handleChange} />
          <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} />
          <input type="tel" name="phone_no" placeholder='Phone' value={formData.phone_no} onChange={handleChange} />
          <input type="text" name="estate" placeholder='Estate' value={formData.estate} onChange={handleChange} />
          <input type="text" name="house_number" placeholder='House Number' value={formData.house_number} onChange={handleChange} />

          <button type='submit'>Add Customer</button>
        </form>
      </div>
    </>
  );
}

export default AddCustomerPage
