import {configureStore} from "@reduxjs/toolkit"
import blogSlice from "./blogSlice";
import userSlice from "./userSlice"
import authSlice from "./authSlice";

const appStore = configureStore(
    {
        reducer  :{
            blogs : blogSlice,
            user : userSlice,
            auth : authSlice,
        }
    }
)


export default appStore;