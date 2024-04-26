import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/Auth/authSlice";

const store = configureStore({
  reducer: {
    authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type StateDispatchType = typeof store.dispatch;

export default store;
