import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/registration/registration.css';

function RegistrationForm() {
  return (
    <div className='registration-form-container'>
      <h2 className='form-title'>Create a New Account</h2>
      <p className='login-link'>Already Registered? <Link to='/login'>Login</Link> </p>
      <form className='registration-form'>
        <div className='form-group'>
            <label htmlFor='firstname'>First Name</label>
            <input type='text' id='firstname' className='form-control'/>
        </div>

        <div className='form-group'>
            <label htmlFor='lastname'>Last Name</label>
            <input type='text' id='lastname' className='form-control' />
        </div>

        <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' className='form-control' />
        </div>

        <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' className='form-control' />
        </div>
        <button className='btn-signup'> Sign Up </button>
      </form>
    </div>
  )
}

export default RegistrationForm
