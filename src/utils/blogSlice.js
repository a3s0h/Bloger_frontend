import { createSlice } from "@reduxjs/toolkit";

const blogSlice =  createSlice({
    name : "blogs" ,
    initialState : {
        posts : null,
        specificPost  : null,
    } , 
    reducers : {
        addPosts : (state,action) =>{
            state.posts = action.payload;
        },
        addSpecificPost : (state,action) => {
            state.specificPost = action.payload
        },
        resetSpecificPost: (state) => {
            state.specificPost = null;
          },
    }
})


export const {addPosts,addSpecificPost,resetSpecificPost} = blogSlice.actions;
export default blogSlice.reducer;