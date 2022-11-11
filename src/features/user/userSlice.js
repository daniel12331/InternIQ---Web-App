import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    isSideBarOpen:false,
    user:null,
};

export const registerUser = 
createAsyncThunk(
    'user/registerUser',
    async(user,thunkAPI)=>
{
    console.log(`Register User : ${JSON.stringify(user)}`);
});

export const loginUser = 
createAsyncThunk(
    'user/loginuser',
    async(user,thunkAPI)=>
{
    console.log(`Login User : ${JSON.stringify(user)}`);
});


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        toggleSidebar:(state) => {
            state.isSideBarOpen = !state.isSideBarOpen;
        }
    }
});

export const{toggleSidebar} = userSlice.actions
export default userSlice.reducer