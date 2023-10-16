import { ResetPasswordFormValues, VerifyCodeFormValues } from '@/features/auth/schema/auth.schema';
import { api } from '../api';
import { ENDPOINTS as e } from '../endpoints';
import { DefaultResponse } from './@types';

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
export type User = {
  id: number | null;
  email: string;
  email_verified_at: string;
  role_id: string;
  status: string;
  referral_code: string;
  created_at: string;
  updated_at: string;
  roles: Role[];
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
  data: {
    token: string;
    token_type: string;
    role: string[];
    user: User;
  };
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
    forgotPassword: build.mutation<DefaultResponse, { email: string }>({
      query: (credentials) => ({
        url: e.forgotPassword,
        method: 'POST',
        body: credentials
      })
    }),
    resetPassword: build.mutation<DefaultResponse, ResetPasswordFormValues>({
      query: (credentials) => ({
        url: e.resetPassword,
        method: 'POST',
        body: credentials
      })
    }),
    verifyPasswordCode: build.mutation<DefaultResponse, VerifyCodeFormValues>({
      query: (credentials) => ({
        url: `${e.forgotPassword}/pin`,
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

export const {
  usePersonalSignupMutation,
  useVendorSignupMutation,
  useLoginMutation,
  useForgotPasswordMutation,
  useVerifyPasswordCodeMutation,
  useResetPasswordMutation
} = authApi;

export const {
  endpoints: { login }
} = authApi;
