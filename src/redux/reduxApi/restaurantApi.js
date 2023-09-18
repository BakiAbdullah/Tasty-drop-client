import { baseApi } from "../feature/baseApi";

const restaurantApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRestaurant: builder.query({
      query: (id) => `singleRestaurant/${id}`,
    }),
  }),
});

export const { useGetRestaurantQuery } = restaurantApi;
