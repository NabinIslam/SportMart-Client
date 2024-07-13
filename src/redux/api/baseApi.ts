import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sportmart-server.vercel.app/api',
  }),
  tagTypes: ['Product', 'Category', 'Brand'],
  endpoints: () => ({}),
});
