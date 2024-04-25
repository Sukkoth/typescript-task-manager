import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../components/shared/types';

const initialState: initialType = {
  user: null,
  token: null,
};

type initialType = {
  user: null | User;
  token: null | string;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      console.log('LOGIN USER', action.payload);
    },
    register(state, action) {
      console.log('REGISTER USER');
    },
    logout(state) {
      console.log('LOGOUT USER');
    },
  },
});

export const authReducer = authSlice.reducer;

export const authSelector = (state: initialType) => state;
export const userSelector = (state: initialType) => state.user;
export const tokenSelector = (state: initialType) => state.token;
export const authActions = authSlice.actions;
