import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../styles/customers/customer-list.css'

function CustomerList() {

  const [searchTerm, setSearchTerm] = useState('');
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/accounts/all_users/');
      setCustomers(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const filteredCustomers = customers.filter((customer) =>
    (customer.name && customer.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (customer.email && customer.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (customer.phone && customer.phone.includes(searchTerm))
);


  const handleDeleteCustomer = (customerId) => {
    setCustomers(customers.filter(customer => customer.id !== customerId));
  };

  return (
    <div className='customer-list-container'>
      <h2 className='page-title'>Regular Customers List</h2>
      <Link to="/dashboard" className='back-button'>Back to Dashboard</Link>
      <input 
        type="text"
        placeholder="Search by name, email, phone_number"
        value={searchTerm}
        onChange={handleSearchChange}
        className='search-bar'
      />
      <table className='customer-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Estate</th>
            <th>House No</th>
            <th>Is Owner</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.username}</td>
              <td>{customer.email}</td>
              <td>{customer.phone_no}</td>
              <td>{customer.estate}</td>
              <td>{customer.house_number}</td>
              <td>{customer.is_shop_owner ? 'Yes' : 'No'}</td>
              <td>
                <div className='button-conntainer'>
                  <button className='btn-view'>View</button>
                  <button className='btn-update'>Update</button>
                  {/* <button className='btn-delete' onClick={() => handleDeleteCustomer(customer.id)}>Delete</button> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/create-customer" className='btn-add'>Add Customer</Link>
      
    </div>
  )
}

export default CustomerList
