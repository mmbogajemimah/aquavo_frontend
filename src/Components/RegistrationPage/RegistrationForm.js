import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/registration/registration.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/accounts/register_user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Registration successful, redirect or display a success message
        console.log('Registration successful');
      } else {
        // Registration failed, handle error
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='registration-form-container'>
      <h2 className='form-title'>Create a New Account</h2>
      <p className='login-link'>Already Registered? <Link to='/login'>Login</Link> </p>
      <form className='registration-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='firstname'>First Name</label>
          <input type='text' id='firstname' className='form-control' value={formData.firstname} onChange={handleChange} />
        </div>

        <div className='form-group'>
          <label htmlFor='lastname'>Last Name</label>
          <input type='text' id='lastname' className='form-control' value={formData.lastname} onChange={handleChange} />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' className='form-control' value={formData.email} onChange={handleChange} />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' className='form-control' value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit" className='btn-signup'> Sign Up </button>
      </form>
    </div>
  )
}

export default RegistrationForm;
