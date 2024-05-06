import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_USER, REGISTER_USER, logInUser } from "../../supabase/services";
import { UserRegisteration } from "../../components/shared/types";
import { AuthError, User, UserResponse } from "@supabase/supabase-js";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const { data, error } = await logInUser(
        credentials.email,
        credentials.password
      );
      if (error) throw error;

      return data;
    } catch (error) {
      return rejectWithValue(error as AuthError);
    }
  }
);

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (data: UserRegisteration, { rejectWithValue }) => {
    try {
      const response = await REGISTER_USER(data);
      if (response.error) {
        throw response.error;
      }
      return response.data.user as User;
    } catch (error) {
      return rejectWithValue(error as AuthError);
    }
  }
);

export const getUserThunk = createAsyncThunk(
  "auth/get",
  async (_, { rejectWithValue }) => {
    try {
      const response: UserResponse = await GET_USER();
      if (response.error) {
        throw response.error;
      }
      return response.data.user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
