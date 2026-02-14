import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  role: "",
  departments: [],
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username || ""; // use payload key correctly
      state.role = action.payload.role || "";
      state.departments = action.payload.departments || [];
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.username = "";
      state.role = "";
      state.departments = [];
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
