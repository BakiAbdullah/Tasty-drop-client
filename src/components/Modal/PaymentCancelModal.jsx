import React from "react";
import MyModal from "./MyModal";
import { useForm } from "react-hook-form";
import useAuth from "../../api/useAuth";
import toast from "react-hot-toast";
import { useUnsubscribePaymentMutation } from "../../redux/reduxApi/paymentApi";

export const PaymentCancelModal = ({ isOpen, closeModal, children }) => {
  const [unsubscribe, { isLoading }] = useUnsubscribePaymentMutation();
  const { user, reAuthenticateUser, signIn, setLoading } = useAuth();
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;

    signIn(email, password)
      .then((res) => {
        unsubscribe(email).then((res) => {
          console.log(res);
          toast.success("You are successfully unsubscribed!");
          closeModal();
        });
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        if (err.message === "Firebase: Error (auth/wrong-password).") {
          toast.error("Wrong password! Please try again.");
        }
      });
  };

  return (
    <MyModal isOpen={isOpen} closeModal={closeModal}>
      <h1 className="text-xl font-bold mb-3">Please confirm your password!</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <fieldset disabled="disabled">
          <input
            required
            {...register("email")}
            name="email"
            type="text"
            className="input-style text-zinc-500"
            placeholder="Your email"
            defaultValue={user?.email}
          />
        </fieldset>
        <input
          required
          {...register("password")}
          name="password"
          type="password"
          className="input-style"
          placeholder="your password"
        />
        <button
          type="submit"
          className="bg-sky-100 py-2 w-full rounded font-semibold text-zinc-700">
          Unsubscribe now
        </button>
      </form>
    </MyModal>
  );
};
