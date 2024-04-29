import React, { useEffect, useState } from 'react';
import '../../styles/dashboard/dashboard-page.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import GraphComponent from './GraphComponent';

function DashboardPage() {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    fetchTotalUsers();
  }, []);

  const fetchTotalUsers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/accounts/total_users/'); // Use Axios to make a GET request
      // console.log(response.data)
      setTotalUsers(response.data); // Set totalUsers state with received data
    } catch (error) {
      console.error('Error fetching total users:', error);
    }
  };

  return (
    <div className='dashboard'>
      <div className='separator-line'></div>
      <div className='sidebar'>
        <Link to="/customers">Customers</Link>
        <Link to="/refills">Refills</Link>
        <Link to="/delivery">Delivery</Link>
        <Link to="/accounts">Accounts</Link>
      </div>

      <div className='content'>
        <h1 className='dashboard-header'>Aquavo Dashboard</h1>
        <h2 className='user-analytics-header'> User Analytics</h2>
        <div className='user-stats'>
          <div className='total-users-card'>
            <h3>Total Users</h3>
            <p>{totalUsers}</p>
          </div>
          <GraphComponent />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage;
