import { checkForUnauthorizedResponse, customFetchU } from '../../utils/axios';
import { showLoading, hideLoading, getAllAppliedJobs } from './allApplictionSlice';

export const uploadFileThunk = async ({formData, appID}, thunkAPI) => {
  try {
    const resp = await customFetchU.post('/file/upload', formData, { 
      headers: { 'Content-Type': 'multipart/form-data' },
      params: { appID }
    });

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const  downloadFileThunk = async (_id, thunkAPI) => {
  
  let url = `/file/download/${_id}`;
  try {
    const resp = await customFetchU.get(url, { responseType: 'arraybuffer' });
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const createApplicationThunk = async (application, thunkAPI) => {
  try {
    const resp = await customFetchU.post('/application/registerapplication', application);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getAllAppliedJobsThunk = async (_, thunkAPI) => {
  const { page, search, searchStatus, searchType, sort } =
    thunkAPI.getState().applications;

  let url = `/application?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
  if (search) {
    url = url + `&search=${search}`;
  }
  try {
    const resp = await customFetchU.get(url);
    console.log(resp)
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const  getApplicantsByJobIDThunk = async (_id, thunkAPI) => {
  
  let url = `/application/${_id}`;
  try {
    const resp = await customFetchU.get(url);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const deleteApplicationThunk = async (_id, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const resp = await customFetchU.delete(`/application/${_id}`);
    thunkAPI.dispatch(getAllAppliedJobs());
    return resp.data.msg;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};


export const setApplicantRequestThunk = async ({ _id, application }, thunkAPI) => {
  try {
    const resp = await customFetchU.patch(`/application/${_id}`, application);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};