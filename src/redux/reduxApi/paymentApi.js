import { baseApi } from "../feature/baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPaymentInfo: builder.query({
      query: (email) => `payment?email=${email}`,
    }),
    savePaymentInfo: builder.mutation({
      query: ({ email, paymentData }) => ({
        url: `payment/${email}`,
        method: "PUT",
        body: paymentData,
      }),
    }),
  }),
});

export const { useGetPaymentInfoQuery, useSavePaymentInfoMutation } =
  paymentApi;
