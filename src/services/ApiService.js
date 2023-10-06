// ApiService.js
import axios from 'axios';
// src/services/ApiService.js
import axios from 'axios';

const baseURL = 'http://20.244.56.144/train';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    // Include the authorization token in the headers
    'Authorization': 'Bearer YOUR_AUTH_TOKEN', // Replace with actual authorization token
  },
});

export const registerCompany = async (companyName) => {
  try {
    const response = await api.post('/register', { companyName });
    console.log('Company registration successful:', response.data);
  } catch (error) {
    console.error('Error registering the company:', error);
  }
};

export const getAuthToken = async () => {
  const requestData = {
    companyName: 'Train Central',
    clientID: '94f1010c-f41c-45c6-a090-17554310e73c',
    ownerName: 'Shakshi Mishra',
    ownerEmail: 'shakshimishra83@gmail.com',
    rollNo: '2101640139001',
    clientSecret: 'NwNQBqyozKVGenin',
  };

  try {
    const response = await api.post('/auth', requestData);
    const { access_token } = response.data;
    console.log('Authorization successful:', access_token);
    return access_token;
  } catch (error) {
    console.error('Error obtaining authorization token:', error);
  }
};

export const getAllTrains = async () => {
  try {
    const response = await api.get('/all-trains');
    return response.data; // This assumes the API returns an array of train details
  } catch (error) {
    console.error('Error fetching all trains:', error);
    throw error; // You might want to handle this error in your component
  }
};
