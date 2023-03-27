import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAllJobsThunk, getJobThunk} from './allJobsThunk';

const initialFiltersState = {
  search: '',
  jobType: ''
};

const initialState = {
  isLoading: true,
  jobs: [],
  job: {},
  appliedjobs: {},
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  ...initialFiltersState,
};



export const getAllJobs = createAsyncThunk('allJobs/getJobs', getAllJobsThunk);

export const getJob = createAsyncThunk('allJobs/getJob', getJobThunk);

const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    handleChange: (state, { payload: { name, value } }) => {
      state.page = 1;
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...initialFiltersState };
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    clearAllJobsState: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
    .addCase(getJob.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getJob.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.job = payload.job;
    })
    .addCase(getJob.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    })

      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.jobs = payload.jobs;
        state.numOfPages = payload.numOfPages;
        state.totalJobs = payload.totalJobs;
      })
      .addCase(getAllJobs.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
  },
});

export const {
  showLoading,
  hideLoading,
  handleChange,
  clearFilters,
  changePage,
  clearAllJobsState,
} = allJobsSlice.actions;

export default allJobsSlice.reducer;