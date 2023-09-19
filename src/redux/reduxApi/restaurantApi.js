import { baseApi } from "../feature/baseApi";

const restaurantApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRestaurant: builder.query({
      query: (id) => `singleRestaurant/${id}`,
    }),
    getAllRestaurant: builder.query({
      query: () => `restaurants`,
    }),
  }),
});

export const { useGetRestaurantQuery, useGetAllRestaurantQuery } =
  restaurantApi;
