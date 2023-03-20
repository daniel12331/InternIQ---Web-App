import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { downloadFileThunk,uploadFileThunk, getAllAppliedJobsThunk, deleteApplicationThunk, setApplicantRequestThunk, createApplicationThunk, getApplicantsByJobIDThunk} from './allApplicationThunk';

const initialFiltersState = {
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const initialState = {
  isLoading: true,
  jobs: [],
  job: {},
  appliedjobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  file : null,

  ...initialFiltersState,
};

export const uploadFile = createAsyncThunk('files/uploadfiles', uploadFileThunk);

export const downloadFile = createAsyncThunk('files/downloadfile', downloadFileThunk);

export const createApplication = createAsyncThunk('applications/createApplication', createApplicationThunk);

export const getAllAppliedJobs = createAsyncThunk('applications/getAppliedJobs', getAllAppliedJobsThunk);

export const getApplicantsByJobID = createAsyncThunk('applications/getApplicantsByJob', getApplicantsByJobIDThunk);

export const setApplicantRequest = createAsyncThunk('job/addApplicant', setApplicantRequestThunk );

export const deleteApplication = createAsyncThunk('applications/deleteApplication', deleteApplicationThunk);


const allApplictionSlice = createSlice({
  name: 'applications',
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

    .addCase(downloadFile.pending, (state) => {
      //state.isLoading = true;
    })
    .addCase(downloadFile.fulfilled, (state, action) => {
      state.file = action.payload;
      
    })
    .addCase(downloadFile.rejected, (state, action) => {
      state.error = action.error.message;
      toast.error(action.error.message);
    })

    .addCase(createApplication.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(createApplication.fulfilled, (state) => {
      state.isLoading = false;
      toast.success('Application Successful');
    })
    .addCase(createApplication.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    })
      .addCase(getAllAppliedJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllAppliedJobs.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.appliedjobs = payload.appliedjobs;
        state.numOfPages = payload.numOfPages;
        state.totalJobs = payload.totalJobs;
      })
      .addCase(getAllAppliedJobs.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(getApplicantsByJobID.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getApplicantsByJobID.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.appliedjobs = payload.appliedjobs;
        state.numOfPages = payload.numOfPages;
        state.totalJobs = payload.totalJobs;
      })
      .addCase(getApplicantsByJobID.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(deleteApplication.fulfilled, (state, { payload }) => {
        toast.error("Application Successfully Deleted");
      })
      .addCase(deleteApplication.rejected, (state, { payload }) => {
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
} = allApplictionSlice.actions;

export default allApplictionSlice.reducer;