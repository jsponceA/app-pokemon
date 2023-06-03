import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import authSlice from "./slices/authSlice";
import configSlice from "./slices/configSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
    config: configSlice,
  },
});
