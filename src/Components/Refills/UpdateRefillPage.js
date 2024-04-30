import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/refills/updaterefill.css';

function UpdateRefillPage() {
  const { refill_id } = useParams()
  const [ refill, setRefill ] = useState({
    username: '',
    amount_liters: '',
    amount_money: '',
  });
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);
  // const [refillData, setRefillData] = useState(null)
  const navigate = useNavigate();

  // Fetch the original refill data when the component mounts
  useEffect(() => {
    const fetchRefill = async () => {
        try {
            const token = localStorage.getItem('token')
            const headers = {
                'Authorization': `Token ${token}`
            };

            const response = await axios.get(`http://127.0.0.1:8000/api/refills/refill_by_id/${refill_id}/`, {headers})
            console.log(response)
            const data = response.data.data;
            setRefill({
                username: data.customer.username,
                amount_liters: data.amount_liters,
                amount_money: data.amount_money,
                customer_refilling: data.customer_refilling,
            });

            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }

    fetchRefill();
  }, [refill_id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const token = localStorage.getItem('token');
        const headers = {
            'Authorization': `Token ${token}`,
            'Content-Type' : 'application/json',
        };

        const response = await axios.patch(`http://127.0.0.1:8000/api/refills/update_refills/${refill_id}/`, refill, {headers})
        console.log('Refill Updated: ', response.data)
        navigate('/refills')
    } catch (err) {
        console.error('Error updating Refill:', err);
    }
  };
  // Handle Changes in the form fields
  const handleChange = (event) => {
    const {name, value} = event.target;
    setRefill({ ...refill, [name]: value })
  };

  if (loading) {
    return <div>Loading ...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  const handleDelete = async () => {
    try {
      const headers = {
        'Authorization': `Token ${localStorage.getItem('token')}`,
      };

      await axios.delete(`http://127.0.0.1:8000/api/refills/delete_refills/${refill_id}/`, {headers});
      console.log("Refill Details deleted Successfully");

      navigate('/refills')
    } catch (error) {
      console.error ('Error Deleting Refill Details');
    }
  }

  return (
    <div className='update-container'>
      <h1 className='update-header'>Update Refill</h1>
      <form className='update-form' onSubmit={handleSubmit}>
        <div className='update-form-group'>
            <label className='update-label'>User Name:</label>
            <input className='update-input' type='string' name='user_name' value={refill.customer_refilling} onChange={handleChange} required/>
        </div>

        <div className='update-form-group'>
            <label className='update-label'>Amount Liters:</label>
            <input className='update-input' type='number' name='amount_liters' value={refill.amount_liters} onChange={handleChange} required/>
        </div>

        <div className='update-form-group'>
            <label className='update-label'>Amount Money:</label>
            <input className='update-input' type='number' name='amount_money' value={refill.amount_money} onChange={handleChange} required/>
        </div>

        <div className='buttons-container'>
          <button type='submit' className='update-button'>Update</button>
          <button onClick={handleDelete} className='delete-action-button'>Delete</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateRefillPage
