import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    user: null,
    isAuthenticated: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {},
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
