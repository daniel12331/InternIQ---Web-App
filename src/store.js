import { configureStore} from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import allJobsSlice from "./features/jobs/jobSlice";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../src/resumeBuilder/Reducer/index";

export const store = configureStore({
    reducer:{
        user : userSlice,
        allJobs : allJobsSlice 
    }
});


const initialState = {};
const middleware = [thunk];

const stores = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
  // compose(
  //   applyMiddleware(...middleware),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);
export default stores;