import { baseApi } from "../../baseApi";

export const ecommerceApi = baseApi.injectEndpoints({
  // reducerPath: "ecommerceApi",
  // baseQuery: fetchBaseQuery({baseUrl: "https://car-nextjs-api.cheatdev.online/"}),
  // tagTypes:["cars"],
  endpoints: (build) => ({
    // get products
    getCar: build.query({
      query: () => "cars",
    }),
    // getProducts: build.query({
    //     query: () => `/products`
    // }),
    // get product by id
    getProductById: build.query({
      query: (id) => `/cars/${id}`,
      providesTags: ["cars"],
    }),
    //create product
    createProduct: build.mutation({
      query: (newProduct) => ({
        url: `/cars`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: newProduct,
      }),
      invalidatesTags: ["cars"],
    }),
    //update Product
    updateProduct: build.mutation({
      query: ({ accessToken, id }) => ({
        method: "PUT",
        url: `/cars/${id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      invalidatesTags: ["cars"],
    }),
    //delete product
    deleteProduct: build.mutation({
      query: ({ id, accessToken }) => ({
        method: "DELETE",
        url: `/cars/${id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      invalidatesTags: ["cars"],
    }),
    searchProducts: build.query({
      query: (name) => `cars/search/${name}`,
    }),
  }),
});

export const {
  useGetCarQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useSearchProductsQuery,
} = ecommerceApi;
