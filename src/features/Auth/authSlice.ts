import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import LocalStorage from "../../utils/LocalStorage";
import { AuthInitialType } from "./_core";
import { authBuilder } from "./authBuilder";

const localUser = LocalStorage.getLocalAuth();

const initialState: AuthInitialType = {
  isLoading: false,
  user: localUser?.user || null,
  token: localUser?.token || null,
  errors: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.errors = {};
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: authBuilder,
});

export const authReducer = authSlice.reducer;

//selectors
export const authSelector = (state: RootState) => state.authReducer;
export const userSelector = (state: RootState) => state.authReducer.user;
export const tokenSelector = (state: RootState) => state.authReducer.token;
export const authErrorSelector = (state: RootState) => state.authReducer.errors;

//actions
export const authActions = authSlice.actions;
