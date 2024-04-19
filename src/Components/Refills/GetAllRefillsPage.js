import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/refills/getallrefills.css';

function GetAllRefillsPage() {
  // State variables for refills data and loading/error status
  const [refills, setRefills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // Fetch all Refills when the component Mounts
  useEffect(() => {
    const fetchRefills = async () => {
        try {
            const token = localStorage.getItem('token');
            const headers = {
                'Authorization': `Token ${token}`
            };

            const response = await axios.get('http://127.0.0.1:8000/api/refills/all_refills/', {headers});
            setRefills(response.data.data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };
    fetchRefills();
  }, []);

  // Function to format date as 'DD/MM/YYY'
  // Function to format date as 'DD/MM/YYYY'
  const formatDate = (dateString) => {
    if (!dateString) return ''; // Check if dateString is falsy (e.g. null, undefined)
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

  if (loading) {
    return <div>Loading ...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='container'>
      <h2 className='header'>All Refills</h2>
      <table className='table' border='1'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Customer UserName</th>
                <th>Amount Liters</th>
                <th>Amount Money</th>
                <th>Refill date</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {refills.map((refill, index) => (
                <tr key={refill.id}>
                    <td>{index + 1}</td>
                    <td>{refill.customer.username}</td>
                    <td>{refill.amount_liters}</td>
                    <td>{refill.amount_money}</td>
                    <td>{formatDate(refill.created_at)}</td>
                    <td className='action-buttons'>
                        <button className='delete-action-button'>Delete</button>
                        <button className='update-action-button'>Update</button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default GetAllRefillsPage