import { api } from '../api';
import { ENDPOINTS as e } from '../endpoints';
import type { DefaultResponse } from './@types';

type VendorServiceResponse = DefaultResponse;
type VendorServiceCategory = {
  name: string;
  slug: string;
  updated_at: string;
  created_at: string;
  id: number;
};
type VendorServiceCategoryResponse = DefaultResponse & {
  data: VendorServiceCategory[];
};

export const serviceApi = api.injectEndpoints({
  endpoints: (build) => ({
    addVendorService: build.mutation<VendorServiceResponse, FormData>({
      query: (credentials) => ({
        url: e.vendorService,
        method: 'POST',
        body: credentials
      })
    }),
    getVendorServices: build.query<DefaultResponse, void>({
      query: () => ({
        url: `${e.vendorService}/all`,
        method: 'GET'
      })
    }),
    getVendorServiceCategories: build.query<VendorServiceCategoryResponse, void>({
      query: () => ({
        url: e.vendorServiceCategory,
        method: 'GET'
      })
    }),
    getServices: build.query<DefaultResponse, void>({
      query: () => ({
        url: e.service,
        method: 'GET'
      })
    })
  })
});

export const {
  useAddVendorServiceMutation,
  useGetServicesQuery,
  useGetVendorServiceCategoriesQuery
} = serviceApi;
