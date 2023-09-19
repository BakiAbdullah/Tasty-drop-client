import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import CheckoutForm from "../Forms/CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import MyModal from "./MyModal";

const CheckoutModal = ({ closeModal, isOpen, subscription, refetch }) => {
  const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_PUBLIC_KEY}`);
  return (
    <MyModal isOpen={isOpen} closeModal={closeModal}>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          refetch={refetch}
          closeModal={closeModal}
          subscription={subscription}
        />
      </Elements>
    </MyModal>
  );
};

export default CheckoutModal;
