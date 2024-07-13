import { baseApi } from '@/redux/api/baseApi';

const categoryApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAllBrands: builder.query({
      query: () => ({
        url: '/brands',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllBrandsQuery } = categoryApi;
