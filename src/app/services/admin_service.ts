import { api } from '../api';
import { ENDPOINTS as e } from '../endpoints';
import type { DefaultResponse } from './@types';

type VendorServiceResponse = DefaultResponse;
export const serviceApi = api.injectEndpoints({
  endpoints: (build) => ({
    addService: build.mutation<VendorServiceResponse, FormData>({
      query: (credentials) => ({
        url: e.vendorService,
        method: 'POST',
        body: credentials
      })
    })
  })
});

export const { useAddServiceMutation } = serviceApi;
