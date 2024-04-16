import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate, useParams } from 'react-router-dom';
import '../../styles/customers/userprofilepage.css';


function UserProfilePage() {
    const { userId } = useParams();
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    const [reminders, setReminders] = useState([]);

    // Load existing reminders from local storage
    useEffect(() => {
      const savedReminders = localStorage.getItem('reminders');
      if (savedReminders) {
        setReminders(JSON.parse(savedReminders));
      }
    }, []);

    const handleDelete = async () => {
      try {
        const headers = {
          'Authorization' : `Token ${localStorage.getItem('token')}`,
        };

        await axios.delete(`http://127.0.0.1:8000/api/accounts/delete_user_by_id/${userId}/`, {headers});
        console.log('User Deleted Successfully');

        navigate('/customers');
      } catch (error) {
        console.error('Error Deleting User:', error);
      };
    }

    // Fetch the user's data when the component mounts
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const headers = {
                    'Authorization': `Token ${localStorage.getItem('token')}`,
                };
                const response = await axios.get(`http://127.0.0.1:8000/api/accounts/user_by_id/${userId}`, {headers});
                setUserData(response.data[0]);
            } catch (error) {
                console.error('Error Fetching User Data:', error);
            }
        };

        fetchUserData();
    }, [userId]);

    const handleDateChange = (date) => {
      setReminders([...reminders, date]);
      console.log('Reminder set for:', date)
    }
  return (
    <div className='user-profile-container'>
      {userData ? 
      (
        <>
          <div className='user-profile'>
              <h2>{`${userData.first_name} ${userData.last_name}`}</h2>
              <p><strong>Username:</strong> {userData.username}</p>
              <p><strong>Email:</strong> {userData.email}</p>
              <p><strong>Phone:</strong> {userData.phone_no}</p>
              <p><strong>Estate:</strong> {userData.estate}</p>
              <p><strong>House Number:</strong> {userData.house_number}</p>
          </div>
          <div className='calendar-container'>
            <h3>Set Water Order Reminders</h3>
            <Calendar onChange={handleDateChange} />
          </div>
          <button onClick={handleDelete} className='delete-button'>Delete User</button>
        </>
        
      ) 
      :
      (<p>Loading User data ...</p>)
      }
    </div>
  );
}

export default UserProfilePage
