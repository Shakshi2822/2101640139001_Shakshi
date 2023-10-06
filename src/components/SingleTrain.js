// SingleTrain.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleTrain } from '../services/ApiService';

const SingleTrain = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchTrain = async () => {
      try {
        const response = await getSingleTrain(trainId);
        setTrain(response.data);
      } catch (error) {
        console.error('Error fetching train:', error);
      }
    };

    fetchTrain();
  }, [trainId]);

  return (
    <div>
      <h1>Single Train</h1>
      {/* Render the details of the single train here */}
    </div>
  );
};

export default SingleTrain;
