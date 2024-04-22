import React, { useState } from 'react';
import axios from 'axios';

function CreateRefillPage() {
  const [customerUsername, setCustomerUsername] = useState('');
  const [amountLiters, setAmountLiters] = useState('');
  const [amountMoney, setAmountMoney] = useState('');


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
    } catch (error) {
      console.log('Error creating Refill:', error);
    }
  };

  return (
    <div>
      <h2>Create Refill</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='customerUsername'>Customer Username:</label>
          <input type='text' id='customerUsername' value={customerUsername} onChange={(e) => setCustomerUsername(e.target.value)}/>
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
