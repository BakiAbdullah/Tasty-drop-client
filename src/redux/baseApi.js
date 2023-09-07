import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseApi = createApi({
  reducerPath: "api",
  tagTypes: ["users"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_LIVE_URL,
  }),
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: ({ email }) => `user/${email}`,
      providesTags: ["users"],
    }),
    updateProfile: builder.mutation({
      query: ({ email, data }) => ({
        url: `user/${email}`,
        method: "PUT",
        body: data,
      }),
      providesTags: ["users"],
    }),
    deleteUser: builder.mutation({
      query: ({ email }) => ({
        url: `user/${email}`,
        method: "DELETE",
      }),
      providesTags: ["users"],
    }),
  }),
});
// cant getting the suggestion
export const { use } = baseApi;
export default baseApi;
