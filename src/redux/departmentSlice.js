import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedDepartment: null, // e.g., 'Administration'
};

const departmentSlice = createSlice({
  name: "department",
  initialState,
  reducers: {
    selectDepartment: (state, action) => {
      state.selectedDepartment = action.payload; // name of department
    },
    clearDepartment: (state) => {
      state.selectedDepartment = null;
    },
  },
});

export const { selectDepartment, clearDepartment } = departmentSlice.actions;
export default departmentSlice.reducer;
