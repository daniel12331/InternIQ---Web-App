import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  getUserFromLocalStorage,
} from '../../utils/localStorage';

import {
  createResumeThunk,
} from './resumeThunk';


const initialState = {
  gptData: { },
  isLoading: false,
  completedResume: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage(),
};


export const createResume = createAsyncThunk('/resume/createresume', createResumeThunk);

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createResume.pending, (state) => {
        state.isLoading = true;
 
      })
      .addCase(createResume.fulfilled, (state, { payload }) => {
        state.gptData = payload;
        state.isLoading = false;
        state.completedResume = true;
        toast.success(`Sucessfully created`);
      })
      .addCase(createResume.rejected, (state, { payload }) => {
        state.isLoading = false;
       
      })
  },
});

export const { toggleSidebar } = resumeSlice.actions;
export default resumeSlice.reducer;