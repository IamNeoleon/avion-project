import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICard, IResponseFetch } from "../@types";

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://641eb661a0edc326.mokky.dev/' }),
    endpoints: (build) => ({
        getProducts: build.query<IResponseFetch, string>({
            query: (params) => ({
                url: `/products${params.length > 0 ? `?${params}` : ''}`,
            })
        }),
        getProduct: build.query<ICard, string | undefined>({
            query: (id) => ({
                url: `/products/${id}`,
            })
        })
    })
});
