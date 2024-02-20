import React, { useState } from 'react';
import '../../styles/authentication/login.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset the Form after Submission
    setEmail('');
    setPassword('')
  }


  return (
    <div className='login-container'>
      <h1 className='login-header'>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className="label-text" htmlFor='email'>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            className='form-control'
            placeholder='Email Address'
           />
        </div>

        <div className='form-group'>
          <label className="label-text" htmlFor='password'>Password:</label>
          <input 
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className='form-control'
            placeholder='Password'
          />
        </div>

        <div className='btn-container'>
          <button type="submit" className='login-btn'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
