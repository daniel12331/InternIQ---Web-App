import { checkForUnauthorizedResponse, customFetch } from '../../utils/axios';
import { clearAllJobsState } from '../allJobs/allJobSlice';
import { clearValues } from '../jobs/jobSlice';
import { logoutEmployer } from './employerSlice';

export const registerEmployerThunk = async (url, employer, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, employer);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginEmployerThunk = async (url, employer, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, employer);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateEmployerThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.patch(url, user);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(logoutEmployer(message));
    thunkAPI.dispatch(clearAllJobsState());
    thunkAPI.dispatch(clearValues());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};