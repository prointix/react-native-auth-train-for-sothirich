import axios from 'axios';

const api = axios.create({
  baseURL: 'https://blogserver.fly.dev',
});

export default api;
