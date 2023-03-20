import axios from 'axios';
import { clearStore } from '../features/user/userSlice';
import { getUserFromLocalStorage, getEmployerFromLocalStorage } from './localStorage';

export const customFetch = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

export const customFetchU = axios.create({
  baseURL: 'http://localhost:8000/api/',
});



customFetch.interceptors.request.use((config) => {
  const employer = getEmployerFromLocalStorage();

  if (employer) {
    config.headers['Authorization'] = `Bearer ${employer.token}`;
  }
  
  return config;
});

customFetchU.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage();

  if (user) {
    config.headers['Authorization'] = `Bearer ${user.token}`;
  }
  
  return config;
});

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore());
    return thunkAPI.rejectWithValue('Unauthorized! Logging Out...');
  }
  return thunkAPI.rejectWithValue(error.response.data.msg);
};

