import React from 'react';
import '../../styles/dashboard/dashboard-page.css';
import { Link } from 'react-router-dom';

function DashboardPage() {
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
        <h1>Welcome to the Dashboard</h1>
      </div>
    </div>
  )
}

export default DashboardPage;
