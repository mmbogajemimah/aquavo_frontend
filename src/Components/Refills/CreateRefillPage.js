import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/refills/createrefill.css'
import { useNavigate } from 'react-router-dom'

function CreateRefillPage() {
  const [customerUsername, setCustomerUsername] = useState('');
  const [amountLiters, setAmountLiters] = useState('');
  const [amountMoney, setAmountMoney] = useState('');
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect (() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/accounts/all_users/');
        setUsers(response.data);
      } catch (error) {
        console.log('Error fetching users:', error);
      }
    }
    fetchUsers();
  }, []);

  // Function to handle Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sends data to the server using Axios
      const token = localStorage.getItem('token');
      const headers = {
        'Authorization': `Token ${token}`
      };

      const data = {
        customer_username : customerUsername,
        amount_liters : amountLiters,
        amount_money : amountMoney,
      };

      const response =await axios.post('http://127.0.0.1:8000/api/refills/create_refill/', data, {headers});

      // Handle success Response
      console.log('Refill Created:', response.data)

      // Navigate back to /refills/ route
      navigate('/refills/')
    } catch (error) {
      console.log('Error creating Refill:', error);
    }
  };

  return (
    <div className='create-refill-container'>
      <h2 className='create-refill-header'>Create Refill</h2>
      <form className='create-refill-form' onSubmit={handleSubmit}>
        <div>
        <label htmlFor='customerUsername'>Customer Username:</label>
          <select id='customerUsername' value={customerUsername} onChange={(e) => setCustomerUsername(e.target.value)}>
            <option value="">Select a user</option>
            {users.map(user => (
              <option key={user.id} value={user.username}>{user.username}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor='amountLiters'>Amount Liters:</label>
          <input type='number' id='amountLiters' value={amountLiters} onChange={(e) => setAmountLiters(e.target.value)}/>
        </div>

        <div>
          <label htmlFor='amountMoney'>Amount Money:</label>
          <input type='number' id='amountMoney' value={amountMoney} onChange={(e) => setAmountMoney(e.target.value)} />
        </div>

        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default CreateRefillPage
