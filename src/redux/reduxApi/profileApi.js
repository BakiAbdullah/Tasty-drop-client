import baseApi from "../baseApi";

export const profileApi = baseApi.injectEndpoints({});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useDeleteUserMutation,
} = profileApi;
