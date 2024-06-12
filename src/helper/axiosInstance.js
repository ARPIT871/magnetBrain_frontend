import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:9000/api', 
  timeout: 10000, 
//   headers: {
//     'Content-Type': 'application/json', 
//   },
});
