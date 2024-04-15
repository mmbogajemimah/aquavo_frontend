import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/customers/updateuserpage.css';

function UpdateUserPage() {
  // useParams(): Retrives the userId parameter from the URL.
  const { userId } = useParams();
  // Allows you to navigate to other pages upon successful user update.
  const navigate = useNavigate();

  // Define state to manage the users data
  const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_no: '',
        estate: '',
        house_number: '',
        username: '',
        password: '',
  });

  // Fetch the user data when the component mounts
  // Fetches user data based on userId when the component mounts and populates the form with the user's existing data.
  useEffect(() => {
    const fetchUserData = async () => {
      try {

        // Retrive Token From the Local Storage
        const token = localStorage.getItem('token')

        const headers = {
          'Authorization' : `Token ${token}`
        };
        
        console.log('Fetching user data for user ID:', userId);
        const response = await axios.get(`http://127.0.0.1:8000/api/accounts/user_by_id/${userId}`, {headers});
        console.log('Fetched user data:', response.data);
        setFormData(response.data[0]);
      } catch (error) {
        console.error('Error Fetching User Data:', error);
      }
    }

    fetchUserData();
  }, [userId]);

  // Handle Input Changes
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
     ...formData,
      [name]: value || "",
    });
  };

  // Handle form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token')
      const headers = {
        'Authorization' : `Token ${token}`
      }
      // Send the updated data to the Server
      const response = await axios.patch(`http://127.0.0.1:8000/api/accounts/update_user_by_id/${userId}/`, formData, {headers});
      console.log('User Updated: ', response.data);

      //Redirect user to the dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };


  return (
    <div className='update-user-container'>
      <h2>Update User</h2>
      <form className='update-user-form' onSubmit={handleSubmit}>
          <input type="text" name="first_name" placeholder='First Name' value={formData.first_name} onChange={handleChange} />
          <input type="text" name="last_name" placeholder='Last Name' value={formData.last_name} onChange={handleChange} />
          <input type="text" name="username" placeholder='User Name' value={formData.username} onChange={handleChange} />
          <input type="text" name="password" placeholder='Password' value={formData.password} onChange={handleChange} />
          <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} />
          <input type="tel" name="phone_no" placeholder='Phone' value={formData.phone_no} onChange={handleChange} />
          <input type="text" name="estate" placeholder='Estate' value={formData.estate} onChange={handleChange} />
          <input type="text" name="house_number" placeholder='House Number' value={formData.house_number} onChange={handleChange} />

          <button type="submit">Update User</button>
      </form>
    </div>
  )
}

export default UpdateUserPage