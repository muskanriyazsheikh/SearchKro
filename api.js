import axios from 'axios';

// Create an instance with your backend's base URL
const API = axios.create({
  baseURL: 'https://searchkaro-production.up.railway.app/api/', // Replace with your backend URL
});

// Add a request interceptor to attach the Token (JWT) automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Define your API calls
export const login = (formData) => API.post('/auth/login', formData);
export const signup = (formData) => API.post('/auth/signup', formData);
export const getReports = () => API.get('/reports');
// export const getCategories = () => API.get('/categories');

export default API;