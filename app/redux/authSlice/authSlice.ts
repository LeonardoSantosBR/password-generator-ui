import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: false,
  },
  reducers: {
    setAuth: (state) => {
      state.value = true;
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;