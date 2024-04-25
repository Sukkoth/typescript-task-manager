import { createSlice } from "@reduxjs/toolkit";
import {
  User,
  UserLogin,
  UserRegisteration,
} from "../../../components/shared/types";
import { RootState } from "../../store";
import Helpers from "../../../utils/Helpers";

const users: UserRegisteration[] = [
  {
    name: "Sukkoth",
    email: "sukkoth@gmail.com",
    password: "password",
  },
];

const initialState: initialType = {
  user: null,
  token: null,
  errors: {},
};

type initialType = {
  user: null | User;
  token: null | string;
  errors: {
    message?: string;
    code?: number;
  };
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.errors = {};
      const { email, password } = action.payload as UserLogin;
      const userFound =
        users.filter(
          (user) =>
            user.email.toLowerCase() === email.toLowerCase() &&
            user.password === password
        )[0] || null;

      if (userFound !== null) {
        state.user = userFound;
        state.token = Helpers.GenerateToken();
      } else {
        state.errors.message = "NO USER FOUND";
      }
    },
    register(state, action) {
      state.errors = {};
      const { email, name } = action.payload as UserRegisteration;
      state.user = { email, name };
      state.token = Helpers.GenerateToken();
    },
    logout(state) {
      state.errors = {};
      state.user = null;
      state.token = null;
    },
  },
});

export const authReducer = authSlice.reducer;

export const authSelector = (state: RootState) => state.authReducer;
export const userSelector = (state: RootState) => state.authReducer.user;
export const tokenSelector = (state: RootState) => state.authReducer.token;
export const authErrorSelector = (state: RootState) => state.authReducer.errors;
export const authActions = authSlice.actions;
