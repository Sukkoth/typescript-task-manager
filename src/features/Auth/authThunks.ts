import { createAsyncThunk } from "@reduxjs/toolkit";
import { logInUser } from "../../supabase/services";

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

      if (error !== null) {
        throw error;
      } else {
        return data;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
