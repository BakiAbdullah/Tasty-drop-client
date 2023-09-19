import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import "./CheckoutForm.css";

import axios from "axios";
import { toast } from "react-hot-toast";
import { ImSpinner3 } from "react-icons/im";
// import Spinner3 from "../shared/Spinner/Spinner3";

import useAuth from "../../../api/useAuth";
import {
  usePaymentIntentMutation,
  useSavePaymentInfoMutation,
} from "../../../redux/reduxApi/paymentApi";
import { FiLoader } from "react-icons/fi";
import { useUpdateProfileMutation } from "../../../redux/reduxApi/userApi";
const CheckoutForm = ({ closeModal, subscription }) => {
  const [updateProfileData] = useUpdateProfileMutation();
  const [cardError, setCardError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();

  console.log(subscription);

  const handleSubmit = async (event) => {
    setButtonLoading(true);
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("[error]", confirmError);
      setCardError(confirmError.message);
      setButtonLoading(false);
    } else {
      console.log("[paymentIntent]", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        const paymentInfo = {
          paymentIntentId: paymentIntent.id,
          time: new Date().toLocaleString(),
          isPlus: true,
          type: subscription.type,
        };
        // savePaymentInfo({ email: user?.email, paymentInfo }).then((data) => {
        //   closeModal();
        //   refetch();
        //   console.log(data);
        // });
        updateProfileData({ email: user?.email, data: { paymentInfo } }).then(
          (data) => {
            console.log(data);
            toast.success(
              <p className="text-sm">
                Payment Successful. Id:
                <span className="bg-gray-200 text-xs mx-3  p-1 rounded-full">
                  {paymentIntent.id}
                </span>
              </p>
            );
            closeModal();
          }
        );
      }
    }
  };
  useEffect(() => {
    setLoading(true);
    if (subscription?.price) {
      axios
        .post(`${import.meta.env.VITE_LIVE_URL}create-payment-intent`, {
          price: subscription.price,
        })

        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return "loading";
  }
  return (
    <>
      <h1 className="text-lg font-semibold text-gray-700 mb-4">Payment</h1>
      <div className="bg-gray p-5 rounded text-center mb-5">
        <img className="w-28 mx-auto" src={subscription?.img} alt="" />
        <h1 className=" mt-4  text-zinc-600">
          Purchase {subscription?.type} Pack
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="mt-4">
          <button
            disabled={!stripe || loading}
            type="submit
          "
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            // onClick={closeModal}>
          >
            {buttonLoading ? (
              <FiLoader size={22} className="animate-spin" />
            ) : (
              `Pay Tk ${subscription?.price}`
            )}
          </button>
        </div>
      </form>

      {cardError && (
        <p className="text-sm py-3 mr-2 text-red-600">{cardError}</p>
      )}
    </>
  );
};

export default CheckoutForm;
