import { baseApi } from "../feature/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (email) => `user/${email}`,
      providesTags: ["users"],
    }),
    updateProfile: builder.mutation({
      query: ({ email, data }) => ({
        url: `user/${email}`,
        method: "PATCH",
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

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useDeleteUserMutation,
} = userApi;
