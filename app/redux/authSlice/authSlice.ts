import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchToken = createAsyncThunk("auth/fetchToken", async () => {
  const storedToken = await AsyncStorage.getItem("@token");
  return storedToken;
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: null as string | null,
  },
  reducers: {
    setAuth: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchToken.fulfilled, (state, action) => {
      state.value = action.payload;
    })
  }
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
