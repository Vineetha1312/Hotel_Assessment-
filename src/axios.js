import axios from 'axios';

// Set up Axios instance with interceptors
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // JSON server's base URL
});

axiosInstance.interceptors.request.use((config) => {
  // Optional: Add any headers if necessary
  config.headers['Content-Type'] = 'application/json';
  return config;
}, (error) => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  console.error('API error: ', error);
  return Promise.reject(error);
});

export default axiosInstance;
