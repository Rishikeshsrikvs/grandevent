import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'https://grandevents.onrender.com' // Set your base URL here
});

export default api;
