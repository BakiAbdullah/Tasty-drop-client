import { baseApi } from "../feature/baseApi";

const notesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: (email) => `notes/${email}`,
    }),
    addNote: builder.mutation({
      query: (body) => ({
        url: `notes`,
        method: "POST",
        body,
      }),
    }),
    deleteNote: builder.mutation({
      query: (id) => ({
        url: `notes/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetNotesQuery, useDeleteNoteMutation, useAddNoteMutation } =
  notesApi;
