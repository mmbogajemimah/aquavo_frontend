import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../../styles/refills/getallrefills.css';
import RefillsNavBar from './RefillsNavBar';

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
            console.log(response.data.data)
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

  return (
    <>
      <RefillsNavBar />
      <div className='container'>
        <h2 className='header'>All Refills</h2>
        <Link className='refills-back-button' to={'/dashboard'}>Back</Link>
        <table className='table' >
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Vendor Username</th>
                  <th>Customer Username</th>
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
                      <td>{refill.customer_refilling}</td>
                      <td>{refill.amount_liters}</td>
                      <td>{refill.amount_money}</td>
                      <td>{formatDate(refill.created_at)}</td>
                      <td className='action-buttons'>
                          <Link to={`/update_refill/${refill.id}/`} className='update-action-button'>View</Link>
                      </td>
                  </tr>
              ))}
          </tbody>
        </table>
        <div className='create-button-div'>
          <Link to={`/create_refill/`} className='create-refill-button' >Create Refill</Link>
        </div>
        
      </div>
    </>
  )
}

export default GetAllRefillsPage
