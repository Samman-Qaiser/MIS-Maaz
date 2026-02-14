import { createSlice } from "@reduxjs/toolkit";
const initialState={
    person:"",
    username:"",
    password:"",
    role:"",
    status:"",
    modules:[]
}
const userSlice=createSlice({
    initialState,
    reducers:{
        setUpdateUser:(state,action)=>{
          state.person=action.payload.employee,
          state.password=action.payload.password,
          state.username=action.payload.username,
          state.role=action.payload.role,
          state.status=action.payload.status,
          state.modules=action.payload.modules
        }
    }
})
export const {setUpdateUser}=userSlice.actions
export default userSlice.reducer
//no need of this right now as we have noot stored this much data in array ok