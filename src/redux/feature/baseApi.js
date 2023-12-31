import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "dataApis",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_LIVE_URL}`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getbaseApiByEmail: builder.query({
      query: (email) => `userRole?email=${email}`,
    }),
    getCustomer: builder.query({
      query: (email) => `customer?email=${email}`,
    }),
    getMenuItem: builder.query({
      query: (email) => `restaurant-data?email=${email}`,
    }),
    getRating: builder.query({
      query : (id)=>`review/${id}`
    })
  }),
});

export const {
  useLazyGetProfilesQuery,
  useGetbaseApiByEmailQuery,
  useGetCustomerQuery,
  useGetMenuItemQuery,
  useGetRatingQuery
} = baseApi;
