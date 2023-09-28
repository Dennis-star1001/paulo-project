import { api } from '../api';
import { ENDPOINTS as e } from '../endpoints';

type DefaultResponse = { status: boolean; message: string };
type SignupResponse = DefaultResponse & {
  data: SignupData;
};

type SignupData = {
  email: string;
  referral_code: string;
  updated_at: string;
  created_at: string;
  id: number;
  roles: Role[];
};

type Role = {
  id: number;
  name: string;
  guard_name: string;
  created_at: string;
  updated_at: string;
};

type SignupRequest = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  phone: string;
  referral_code: string;
};

type VendorSignupResponse = DefaultResponse & { data: [] };

type LoginRequest = {
  email: string;
  password: string;
};
type LoginResponse = DefaultResponse & {
  data: [];
};

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: e.login,
        method: 'POST',
        body: credentials
      })
    }),
    personalSignup: build.mutation<SignupResponse, SignupRequest>({
      query: (credentials) => ({
        url: e.signup,
        method: 'POST',
        body: credentials
      })
    }),
    vendorSignup: build.mutation<VendorSignupResponse, FormData>({
      query: (credentials) => ({
        url: e.vendorSignup,
        method: 'POST',
        body: credentials
      })
    })
  })
});

export const { usePersonalSignupMutation, useVendorSignupMutation, useLoginMutation } = authApi;
