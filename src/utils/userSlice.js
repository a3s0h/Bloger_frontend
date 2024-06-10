import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name : "user",
    initialState : {
        userInfo : null,
    },
    reducers : {
        setUserInfo : (state,action) => {
            state.userInfo =  action.payload;
        },
        removeUser : (state , action) => {
            state.userInfo =  null;
        },
        setAnalysis: (state, action) => {
            state.userInfo = { ...state.userInfo, analysis: action.payload }; // Append analysis data to user info
        }
    }

});

export const { setUserInfo , removeUser  , setAnalysis } = userSlice.actions;

export default userSlice.reducer;