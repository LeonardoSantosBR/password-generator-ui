import { createSlice } from "@reduxjs/toolkit";

export const signSlice = createSlice({
  name: "sign",
  initialState: {
    value: false,
  },
  reducers: {
    setSign: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setSign } = signSlice.actions;
export default signSlice.reducer;
