import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export const removeUserInfo = () => {
  Cookies.remove('token');
};

const initialState = {
  token: ''
} as { token: string };

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    }
  }
});

export const { logout: logoutAction } = slice.actions;
export default slice.reducer;
