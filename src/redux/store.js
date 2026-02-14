import { configureStore } from "@reduxjs/toolkit";
import userReducer from './authSlice'
import departmentReducer from './departmentSlice'
export const store=configureStore({
    reducer:{
   user:userReducer,
   department:departmentReducer
    }
 

})