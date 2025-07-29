import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const ecommerceApi = createApi({
    reducerPath: "ecommerceApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://car-nextjs-api.cheatdev.online/"}),
    tagTypes:["cars"],
    endpoints: (build) => (
        {
            // get products
            getProducts: build.query({
                 query: ({page, limit}) => `/cars?skip=${page}&limit=${limit}`
            }),
            // getProducts: build.query({
            //     query: () => `/products`
            // }),
            // get product by id
            getProductById: build.query({
                query: (id) => `/cars/${id}`
            }),
            //create product
            createProduct: build.mutation({
                query: (newProduct) => ({
                    url: `/cars`,
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    },
                    body: newProduct
                }),
                invalidatesTags:["cars"]
            }),
            //update Product
            updateProduct: build.mutation({
                query: ({updateProduct, accessToken, id}) =>({
                    method: "PUT",
                    url: `/cars/${id}`,
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    }
                }),
                invalidatesTags: ["cars"]
            }),
            //delete product
            deleteProduct: build.mutation({
                query:({id, accessToken}) =>({
                    method: "DELETE",
                    url: `/cars/${id}`,
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    }
                }),
                invalidatesTags: ["cars"]
            })
        }
    )
})

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = ecommerceApi;
