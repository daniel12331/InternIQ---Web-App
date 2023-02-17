import { configureStore} from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import allJobsSlice from "./features/allJobs/allJobSlice";
import jobSlice from "./features/jobs/jobSlice";
import educationData from "./resumeBuilder/Reducer/Education/educationData";
import profileData from "./resumeBuilder/Reducer/Profile/profileData";
import projectsData from "./resumeBuilder/Reducer/Project/projectsData";
import skillsData from "./resumeBuilder/Reducer/Skills/skillsData";
import socialData from "./resumeBuilder/Reducer/Social/socialData";
import employerSlice from "./features/employer/employerSlice";

export const store = configureStore({
    reducer:{
        user : userSlice,
        employer : employerSlice,
        job : jobSlice,
        allJobs : allJobsSlice,
        Education : educationData,
        Profile: profileData,
        Skills: skillsData,
        Social: socialData,
        Project: projectsData
    }
});



export default store;
