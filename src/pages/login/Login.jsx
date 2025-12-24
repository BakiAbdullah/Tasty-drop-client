/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiLoader } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../../api/useAuth";

const DEMO_CREDENTIALS = {
  admin: {
    email: "tasty@gmail.com",
    password: "Tasty12!",
  },
  partner: {
    email: "imran@gmail.com",
    password: "Imran12!",
  },
  rider: {
    email: "rider5@gmail.com",
    password: "Rider12!",
  },
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { signIn } = useAuth();

  const [isLoading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  // // Default login system
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleShow = () => {
    setShow(!show);
  };

  const {
    register,
    handleSubmit,
    setValue, // For demo credentials
    formState: { errors },
  } = useForm();

  const fillDemoCredentials = (role) => {
    setValue("email", DEMO_CREDENTIALS[role].email);
    setValue("password", DEMO_CREDENTIALS[role].password);

    toast.success(`Demo ${role} credentials filled`);
  };

  const onSubmit = (data) => {
    setLoading(true);
    // console.log(data.password)
    signIn(data.email, data.password)
      .then(() => {
        setLoading(false);
        toast.success("Login Succes!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        if (err.message === "Firebase: Error (auth/wrong-password).") {
          toast.error("Wrong Password!");
        } else if (err.message === "Firebase: Error (auth/user-not-found).") {
          toast.error("User not found!");
        }
      });
  };

  return (
    <div className="relative h-screen bg-slate-100 lg:bg-[url('/delivery-man2.jpg')] bg-cover bg-fixed">
      <div className="relative container m-auto px-10 lg:pt-20 pt-28 text-gray-500 ">
        <div className="lg:ms-[55vw] px-2 lg:mt-16 lg:px-0 md:w-8/12 lg:w-5/12 xl:w-[480px] min-h-[calc(70vh)]">
          <div className="rounded-xl bg-white border border-lightGray shadow-lg ">
            <div className="p-7 md:p-10">
              <div className="space-y-4">
                <h2 className="mb-8 text-2xl text-pink font-bold">
                  Log in with your email
                </h2>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="pb-2 pt-4">
                  <input
                    required
                    type="email"
                    {...register("email")}
                    id="email"
                    placeholder="Email"
                    className="input-login"
                  />
                </div>
                <div className="pb-2 pt-4 relative">
                  <input
                    required
                    className=" input-login"
                    type={show ? "text" : "password"}
                    {...register("password")}
                    id="password"
                    placeholder="Password"
                  />
                  <FaEye
                    onClick={handleShow}
                    className="absolute text-pink hover:text-rosered duration-200 cursor-pointer right-3 top-8"
                  ></FaEye>
                </div>
                <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                  {/* <button onClick={handleResetPassword}>Forgot password?</button> */}
                </div>
                <div className="pt-4 mb-5">
                  <button
                    type="submit"
                    className="cursor-pointer block w-full h-12 text-base tracking-wide text-white font-medium duration-200 rounded-full bg-pink hover:bg-darkPink focus:outline-none"
                  >
                    {isLoading ? (
                      <FiLoader className="animate-spin m-auto" size={24} />
                    ) : (
                      "Sign In"
                    )}
                  </button>

                  <p className="px-6 mt-5 text-md text-center text-gray-400">
                    Do not have an account yet?{" "}
                    <Link
                      to="/signup"
                      className="hover:underline hover:text-darkPink font-medium text-pink"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>

                <div className="border border-slate-100 w-96 mx-auto"></div>

                {/* 🔽 Enhanced Demo Credentials Section */}
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                  <p className="mb-5 mt-5 text-center text-sm text-slate-600">
                    Demo Credentials
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Admin */}
                    <button
                      type="button"
                      onClick={() => fillDemoCredentials("admin")}
                      className="group rounded-xl border border-pink/40 p-4 text-left transition
               hover:bg-pink hover:border-pink hover:shadow-lg hover:shadow-pink/30"
                    >
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-pink leading-none group-hover:text-white">
                        Admin
                        </p>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-gray-400 group-hover:text-pink-100">
                        Full system access & more
                      </p>
                    </button>

                    {/* Partner */}
                    <button
                      type="button"
                      onClick={() => fillDemoCredentials("partner")}
                      className="group rounded-xl border border-pink/40 p-4 text-left transition
               hover:bg-pink hover:border-pink hover:shadow-lg hover:shadow-pink/30"
                    >
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-pink leading-none group-hover:text-white">
                          Partner
                        </p>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-gray-400 group-hover:text-pink-100">
                        Manage orders & menus
                      </p>
                    </button>

                    {/* Rider */}
                    <button
                      type="button"
                      onClick={() => fillDemoCredentials("rider")}
                      className="group rounded-xl border border-pink/40 p-4 text-left transition
               hover:bg-pink hover:border-pink hover:shadow-lg hover:shadow-pink/30"
                    >
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-pink leading-none group-hover:text-white">
                          Rider
                        </p>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-gray-400 group-hover:text-pink-100">
                        Deliver & track orders
                      </p>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
