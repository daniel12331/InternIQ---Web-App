import { checkForUnauthorizedResponse, customFetch } from '../../utils/axios';
import { showLoading, hideLoading } from './allJobSlice';
import { useParams} from 'react-router-dom';


export const getAllJobsThunk = async (_, thunkAPI) => {
  const { search, jobType } =
    thunkAPI.getState().allJobs;

  let url = `/jobs?`;
  if (search) {
    url = url + `&search=${search}`;
  }
  if (jobType) {
    url = url + `&jobType=${jobType}`;
  }
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const  getJobThunk = async (_id, thunkAPI) => {
  
  let url = `/jobs/${_id}`;
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
