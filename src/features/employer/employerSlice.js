import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  addEmployerToLocalStorage,
  getEmployerFromLocalStorage,
  removeEmployerFromLocalStorage,
} from '../../utils/localStorage';

import {
  loginEmployerThunk,
  registerEmployerThunk,
  updateEmployerThunk,
  clearStoreThunk,
} from './employerThunk';


const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  employer: getEmployerFromLocalStorage(),
};

export const registerEmployer = createAsyncThunk(
  'employer/registerUser',
  async (employer, thunkAPI) => {
    return registerEmployerThunk('/employer/register', employer, thunkAPI);
  }
);

export const loginEmployer = createAsyncThunk(
  'employer/loginUser',
  async (employer, thunkAPI) => {
    return loginEmployerThunk('/employer/login', employer, thunkAPI);
  }
);

export const updateEmployer = createAsyncThunk(
  'user/updateUser',
  async (user, thunkAPI) => {
    return updateEmployerThunk('/auth/updateUser', user, thunkAPI);
  }
);

export const clearStore = createAsyncThunk('employer/clearStore', clearStoreThunk);

const employerSlice = createSlice({
  name: 'employer',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutEmployer: (state, { payload }) => {
      state.employer = null;
      state.isSidebarOpen = false;
      removeEmployerFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerEmployer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerEmployer.fulfilled, (state, { payload }) => {
        const { employer } = payload;
        state.isLoading = false;
        state.employer = employer;
        addEmployerToLocalStorage(employer);
        toast.success(`Hello There ${employer.organisationname}`);
      })
      .addCase(registerEmployer.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginEmployer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginEmployer.fulfilled, (state, { payload }) => {
        const { employer } = payload;
        state.isLoading = false;
        state.employer = employer;
        addEmployerToLocalStorage(employer);

        toast.success(`Welcome Back ${employer.organisationname}`);
      })
      .addCase(loginEmployer.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updateEmployer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateEmployer.fulfilled, (state, { payload }) => {
        const { employer } = payload;
        state.isLoading = false;
        state.user = employer;
        addEmployerToLocalStorage(employer);

        toast.success(`User Updated!`);
      })
      .addCase(updateEmployer.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(clearStore.rejected, () => {
        toast.error('There was an error..');
      });
  },
});

export const { toggleSidebar, logoutEmployer } = employerSlice.actions;
export default employerSlice.reducer;