import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { AuthInitialType } from "./_core";
import { authBuilder } from "./authBuilder";
import { UserResponse } from "@supabase/supabase-js";

const initialState: AuthInitialType = {
  isLoading: false,
  user: null,
  token: null,
  errors: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      const {
        data: { user },
      } = action.payload as UserResponse;
      if (user?.email && user?.user_metadata?.full_name)
        state.user = {
          id: user?.id,
          email: user?.email as string,
          name: user?.user_metadata?.full_name,
        };
    },
    resetErrors(state) {
      state.errors = {};
    },
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
