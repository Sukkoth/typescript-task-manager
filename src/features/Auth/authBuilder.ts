import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { AuthInitialType } from "./_core";
import { loginThunk } from "./authThunks";
import LocalStorage from "../../utils/LocalStorage";
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
      name: action.payload?.user?.user_metadata?.full_name || "",
      email: action.payload?.user?.email as string,
    };
    state.token = action.payload?.session?.access_token as string;
    LocalStorage.setItem("auth", {
      user: state.user,
      token: state.token,
    });
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
};
