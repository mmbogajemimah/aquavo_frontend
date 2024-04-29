import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function GraphComponent() {
  
    const [userData, setUserData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/accounts/all_users/');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    const processData = () => {
      const userJoinDates = userData.map(user => {
        return new Date(user.date_joined).toLocaleDateString();
      });
  
      const userCounts = userJoinDates.reduce((acc, date) => {
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {});
  
      const labels = Object.keys(userCounts);
      const data = Object.values(userCounts);
  
      return { labels, data };
    };
  
    const chartData = processData();
    console.log(chartData)

    // let options = {
    //     scales: {
    //         y: {
    //             max: 20,
    //             min: 0,
    //             ticks: {
    //                 stepSize: 0.5
    //             }
    //         }
    //     }
    // };

    const data = {
        labels: chartData.labels,
        datasets: [
          {
            label: 'Users Joined',
            data: chartData.data,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      };

  return (
    
    <div>
      <Line data={data} />
    </div>
  )
}

export default GraphComponent
