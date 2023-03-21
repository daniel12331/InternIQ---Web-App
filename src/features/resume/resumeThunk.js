import  { customFetch } from '../../utils/axios';


export const createResumeThunk = async (data, thunkAPI) => {
  try {
    const resp = await customFetch.post('/resume/createresume', data);
    
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
