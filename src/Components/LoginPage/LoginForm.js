import React, { useState } from 'react';
import '../../styles/authentication/login.css';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/accounts/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      
      if (response.ok) {
        // Login Successful, handle success
        console.log('Login was Successful')
        const data = await response.json()
        const token = data.token;
        // Save the token to local storage or session storage
        localStorage.setItem('token', token)
        // Navigate User to Customers Page
        navigate('/dashboard');
      } else {
        // Login Failed, handle error
        const data = await response.json();
        setError(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An unexpected error occurred');
    }
    // Reset the Form after Submission
    // setEmail('');
    // setPassword('')
  };


  return (
    <div className='login-container'>
      <h1 className='login-header'>Login</h1>
      <p className='register-link'>Not Registered? <Link to='/registration'>SignUp</Link></p>
      {error && <p className='error'>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className="label-text" htmlFor='username'>Username:</label>
          <input
            type="username"
            id="username"
            value={username}
            onChange={handleUsernameChange}
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
