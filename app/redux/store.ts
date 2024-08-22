import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice/authSlice";
import signSlice from "./signSlice.ts/signSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    sign: signSlice,
  },
});
