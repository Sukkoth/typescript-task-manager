import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { AuthInitialType } from "./_core";
import { getUserThunk, loginThunk, registerThunk } from "./authThunks";
import { AuthError } from "@supabase/supabase-js";

export const authBuilder = (
  builder: ActionReducerMapBuilder<AuthInitialType>
) => {
  //LOGIN
  builder.addCase(loginThunk.pending, (state) => {
    state.isLoading = true;
    state.errors = {};
  });
  builder.addCase(loginThunk.fulfilled, (state, action) => {
    state.isLoading = false;
    state.errors = {};
    state.user = {
      id: action.payload?.user.id,
      name: action.payload?.user?.user_metadata?.full_name || "",
      email: action.payload?.user?.email as string,
    };
  });
  builder.addCase(loginThunk.rejected, (state, action) => {
    const errors = action.payload as AuthError;
    state.isLoading = false;
    state.errors = {
      message: errors.message,
      code: errors.code,
    };
  });

  //REGISTER
  builder.addCase(registerThunk.pending, (state) => {
    state.isLoading = true;
    state.errors = {};
  });

  builder.addCase(registerThunk.fulfilled, (state, action) => {
    state.isLoading = false;
    state.errors = {};
    state.user = {
      id: action.payload.id,
      email: action.payload?.email || "",
      name: "",
    };
  });
  builder.addCase(registerThunk.rejected, (state, action) => {
    const errors = action.payload as AuthError;
    state.isLoading = false;
    state.errors = {
      message: errors.message,
      code: errors.code,
    };
  });

  //GET USER
  builder.addCase(getUserThunk.pending, (state) => {
    state.isLoading = true;
    state.errors = {};
  });
  builder.addCase(getUserThunk.fulfilled, (state, action) => {
    state.isLoading = false;
    state.errors = {};
    state.user = {
      id: action.payload.id,
      name: action.payload?.user_metadata?.full_name || "",
      email: action.payload?.email as string,
    };
  });

  builder.addCase(getUserThunk.rejected, (state, action) => {
    const errors = action.payload as AuthError;
    state.isLoading = false;
    state.errors = {
      message: errors.message as string,
      code: errors.code || `${errors.status}`,
    };
  });
};
