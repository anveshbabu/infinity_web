import axios from 'axios';
// import { history } from '../';

export const axiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
   
  }
});


export const logout = () => {
  axiosInstance.defaults.headers.common['Authorization'] = '';
  localStorage.clear();
  // history.push('/');
  window.location.reload(true);
};
