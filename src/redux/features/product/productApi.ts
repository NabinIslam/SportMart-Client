import { baseApi } from '@/redux/api/baseApi';

const productApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    addProduct: builder.mutation({
      query: productInfo => ({
        url: '/products',
        method: 'POST',
        body: productInfo,
      }),
      invalidatesTags: ['Product'],
    }),

    getAllProducts: builder.query({
      query: ({ category, brand, sortBy }) => {
        const params = new URLSearchParams();

        if (category) {
          params.append('category', category);
        }

        if (brand) {
          params.append('brand', brand);
        }

        if (sortBy) {
          params.append('sortBy', sortBy);
        }

        return {
          url: `/products`,
          method: 'GET',
          params: params,
        };
      },
      providesTags: ['Product'],
    }),

    getASingleProductBySlug: builder.query({
      query: slug => ({
        url: `/products/slug/${slug}`,
        method: 'GET',
      }),
    }),

    deleteProduct: builder.mutation({
      query: id => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetAllProductsQuery,
  useGetASingleProductBySlugQuery,
  useDeleteProductMutation,
} = productApi;
