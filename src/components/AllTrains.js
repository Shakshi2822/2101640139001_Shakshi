// AllTrains.js
import React, { useEffect, useState } from 'react';
import { getAllTrains } from '../services/ApiService';

const AllTrains = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await getAllTrains();
        setTrains(response.data);
      } catch (error) {
        console.error('Error fetching trains:', error);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      {/* Render the list of trains here */}
    </div>
  );
};

export default AllTrains;
