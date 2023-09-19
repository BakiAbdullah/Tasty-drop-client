import { baseApi } from "../feature/baseApi";

const restaurantApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRestaurant: builder.query({
      query: (id) => `singleRestaurant/${id}`,
    }),
    getAllRestaurant: builder.query({
      query: () => `restaurants`,
    }),
    deleteRestaurant: builder.mutation({
      query: (id) => ({
        url: `restaurants/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetRestaurantQuery,
  useGetAllRestaurantQuery,
  useDeleteRestaurantMutation,
} = restaurantApi;
