import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { RootState } from '../store';
import { User, login } from '../services/auth';

export const removeUserInfo = () => {
  Cookies.remove('token');
  localStorage.removeItem('user');
};

const initialState = {
  token: '',
  user: {
    id: null,
    email: '',
    email_verified_at: '',
    role_id: '',
    status: '',
    referral_code: '',
    created_at: '',
    updated_at: '',
    roles: []
  }
} as { token: string; user: User };

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      removeUserInfo();
      return initialState;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(login.matchFulfilled, (state, { payload }) => {
      const token = payload.data.token;
      // const user = { user: payload.data.user };
      // merge roles into user
      const user = { ...payload.data.user, user: payload.data.role };

      Cookies.set('token', token, {
        sameSite: 'strict'
      });
      localStorage.setItem('user', JSON.stringify(user));

      state.token = token;
      state.user = user;
    });
    builder.addDefaultCase((state) => {
      // read the "user" cookie and update the state accordingly
      const _user = localStorage.getItem('user');
      if (_user) {
        state.user = JSON.parse(_user);
      }

      const tokenCookie = Cookies.get('token');
      if (tokenCookie) {
        state.token = tokenCookie;
      }
    });
  }
});

export const { logout: logoutAction } = slice.actions;
export default slice.reducer;

export const selectUser = (state: RootState) => state.auth.user;
export const userRole = (state: RootState) => state.auth.user.roles[0].name;

export const isVendor = (state: RootState) =>
  state.auth.user.roles.some((role) => role.name === 'Vendor');
export const isCustomer = (state: RootState) =>
  state.auth.user.roles.some((role) => role.name === 'Customer');

export const isSignedIn = (state: RootState) => !!state.auth.token;
