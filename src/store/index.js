import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import authSlice from "./slices/authSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});
