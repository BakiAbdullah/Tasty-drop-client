import { Link, useLocation, useNavigate } from "react-router-dom";

import { useForm, useWatch } from "react-hook-form";
import toast from "react-hot-toast";

import { FaEye } from "react-icons/fa";
import useAuth from "../../api/useAuth";
import { FiLoader } from "react-icons/fi";
import { useState } from "react";
import { uploadImage } from "../../api/utils";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const [isLoading, setLoading] = useState(false);
  const { createAccount, profileUpdate } = useAuth();

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const watchedPhoto = useWatch({
    control,
    name: "photo",
  });

  console.log();
  const onSubmit = async (data) => {
    setLoading(true);
    const { name, email, password, photo } = data;

    const imageData = photo[0];
    console.log(imageData);
    uploadImage(imageData)
      .then((imageData) => {
        const photoUrl = imageData.data.display_url;

        // create the account
        createAccount(email, password)
          .then(() => {
            // update the profile
            profileUpdate({ name, photoUrl })
              .then(() => {
                // post to backend
                axios
                  .post(`${import.meta.env.VITE_LIVE_URL}users`, {
                    name: data.name,
                    email: data.email,
                    number: data.number,
                    role: "customer",
                    imgUrl: photoUrl,
                  })
                  .then(() => {
                    toast.success("Login Success!");
                    navigate(from, { replace: true });
                  });
              })
              .catch((err) => {
                setLoading(false);
                console.log(err.message);
                toast.error(err.message);
              });
          })
          .catch((err) => {
            setLoading(false);
            if (
              err.message === "Firebase: Error (auth/email-already-in-use)."
            ) {
              toast.error("Email already in use");
            }
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  const handleImageChange = (image) => {
    setButtonText(image.name);
  };
  return (
    <div className="relative py-16 bg-slate-100">
      <div className="relative container m-auto px-6 py-20 text-gray-500 md:px-12 xl:px-20 ">
        <div className="m-auto md:w-8/12 lg:w-5/12 xl:w-[480px]   ">
          <div className="rounded-xl bg-white border  shadow-lg border-zinc-300">
            <div className="p-4 md:p-10">
              <div className="space-y-4">
                <h2 className="mb-8 text-2xl text-pink font-bold">
                  Sign up to continue
                </h2>
              </div>
              {/* Form here */}
              <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="pb-2 pt-4">
                  <label>
                    <span className="text-zinc-500 text-sm p-2 block">
                      Name
                    </span>
                    <input
                      required
                      type="text"
                      {...register("name", { required: true })}
                      id="name"
                      placeholder="your name"
                      className="block input-style "
                    />
                  </label>
                </div>
                <div className="pb-2 pt-4">
                  <span className="text-zinc-500 text-sm p-2 block ">
                    Phone number
                  </span>
                  <label>
                    <input
                      required
                      type="text"
                      {...register("number", { required: true })}
                      id="number"
                      // ref={emailRef}
                      placeholder="your number"
                      className="block input-style"
                    />
                  </label>
                </div>
                <div className="pb-2 pt-4">
                  <span className="text-zinc-500 text-sm p-2 block ">
                    Email
                  </span>
                  <label>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      id="email"
                      // ref={emailRef}
                      placeholder="your email"
                      className="block input-style"
                    />
                  </label>
                </div>

                <div className="pb-2 pt-4 relative">
                  <label>
                    <span className="text-zinc-500 text-sm p-2 block">
                      Password
                    </span>
                    <input
                      className="block input-style"
                      type={show ? "text" : "password"}
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        pattern:
                          /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
                      })}
                      id="password"
                      placeholder="Password"
                    />
                  </label>
                  <FaEye
                    onClick={handleShow}
                    className="absolute text-pink hover:text-rosered duration-200 cursor-pointer right-3 top-[70px]"></FaEye>

                  {/* Password Validation with RegEx */}
                  {errors.password?.type === "required" && (
                    <p className="text-red-700 text-sm pt-2">
                      Password is required
                    </p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-700 text-sm pt-2">
                      Password must be 6 characters or long
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-700 py-3 text-sm pt-2">
                      Password must have one uppercase, one lower case, one
                      number & Special Character
                    </p>
                  )}
                </div>
                <div className="pb-2 pt-4">
                  <label>
                    <input
                      type="file"
                      {...register("photo", { required: true })}
                      id="photo"
                      accept="image/*"
                      hidden
                      placeholder="Your Photo"
                      className="caret-pink cursor-pointer focus:outline-gray w-full h-12 ps-4 text-lg border rounded-lg border-pink bg-white hidden"
                    />
                    <div className=" caret-pink overflow-clip  flex items-center cursor-pointer focus:outline-gray w-full h-12 ps-2 text-lg border rounded-lg border-zinc-300">
                      <p className="text-pink    bg-lightGray font-medium text-sm rounded-md px-2 py-1">
                        {watchedPhoto ? watchedPhoto[0]?.name : "Upload Photo"}
                      </p>
                    </div>
                  </label>
                </div>

                <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                  {/* <button onClick={handleResetPassword}>Forgot password?</button> */}
                </div>
                <div className="pb-2 pt-4">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className={` block w-full h-12 text-base text-white font-semibold duration-200 rounded-md ${
                      isLoading
                        ? "bg-gray cursor-default"
                        : "bg-pink hover:bg-darkPink cursor-pointer"
                    } focus:outline-none `}>
                    {isLoading ? (
                      <FiLoader
                        className="animate-spin m-auto text-zinc-500"
                        size={24}
                      />
                    ) : (
                      "Sign up"
                    )}
                  </button>
                </div>

                <div className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden ">
                  <a href="#">
                    <svg
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
                <p className="px-6 mt-3 text-sm text-center text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="hover:underline hover:text-darkAmber font-medium text-pink">
                    Sign in
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
