import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:8000/v1',
  headers: { 'Content-Type': 'application/json' }
});

const successInterceptor = (config) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers.common.Authorization = `Bearer ${token}`;
  }
  return config;
};
const errorInterceptor = (error) => {
  return Promise.reject(error);
};

api.interceptors.request.use(successInterceptor, errorInterceptor);

api.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);
});

export default api;