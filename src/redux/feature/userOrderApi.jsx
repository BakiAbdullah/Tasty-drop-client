import { baseApi } from "./baseApi";

const userOrderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      getOrders: builder.query({
        query: (email) =>`orders?email=${email}`,
      }),
    }),
  });
  
  export const { useGetOrdersQuery } = userOrderApi;