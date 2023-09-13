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
    paymentIntent: builder.mutation({
      query: (price) => ({
        url: `create-payment-intent`,
        method: "POST",
        body: price,
      }),
    }),
    unsubscribePayment: builder.mutation({
      query: (email) => ({
        url: `unsubscribe/${email}`,
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  useGetPaymentInfoQuery,
  useSavePaymentInfoMutation,
  usePaymentIntentMutation,
  useUnsubscribePaymentMutation,
} = paymentApi;
// axios.post(`${import.meta.env.VITE_LIVE_URL}create-payment-intent`, {
//   price: subscription.price,
// });
