import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice/authSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
  },
});
