import { api } from '../api';
import { ENDPOINTS as e } from '../endpoints';
import type { DefaultResponse } from './@types';

export type Service = {
  id: number;
  user_id: string;
  title: string;
  description: string;
  slot: string;
  type_id: string;
  image: string;
  amount: string;
  created_at: string;
  updated_at: string;
};
type CreateVendorServiceResponse = DefaultResponse & { data: Service };
type ServiceResponse = DefaultResponse & { data: Service[] };
type SingleServiceResponse = DefaultResponse & { data: Service };
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
interface EditServiceResponse {
  status: boolean;
  message: string;
  data: { service: Service };
}

export const serviceApi = api.injectEndpoints({
  endpoints: (build) => ({
    addVendorService: build.mutation<CreateVendorServiceResponse, FormData>({
      query: (credentials) => ({
        url: e.vendorService,
        method: 'POST',
        body: credentials
      })
    }),
    getVendorServices: build.query<ServiceResponse, void>({
      query: () => ({
        url: `${e.vendorService}/all`,
        method: 'GET'
      })
    }),
    getVendorServiceDetails: build.query<ServiceResponse, { id: string }>({
      query: ({ id }) => ({
        url: `${e.vendorService}/${id}`,
        method: 'GET'
      })
    }),
    editVendorService: build.mutation<EditServiceResponse, { id: string; data: FormData }>({
      query: ({ id, data }) => ({
        url: `${e.vendorService}/${id}/edit`,
        method: 'POST',
        body: data
      })
    }),
    getVendorServiceCategories: build.query<VendorServiceCategoryResponse, void>({
      query: () => ({
        url: e.vendorServiceCategory,
        method: 'GET'
      })
    }),
    getServices: build.query<ServiceResponse, void>({
      query: () => ({
        url: `${e.service}/all`,
        method: 'GET'
      })
    }),
    getServiceDetails: build.query<SingleServiceResponse, { id: string }>({
      query: ({ id }) => ({
        url: `${e.service}/${id}`,
        method: 'GET'
      })
    })
  })
});

export const {
  useAddVendorServiceMutation,
  useGetServicesQuery,
  useGetVendorServiceCategoriesQuery,
  useGetVendorServicesQuery,
  useGetServiceDetailsQuery,
  useGetVendorServiceDetailsQuery,
  useEditVendorServiceMutation
} = serviceApi;
