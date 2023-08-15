import { FaFacebook, FaGithub } from "react-icons/fa";
const Login = () => {
  return (
    <div className="relative py-16">
      <div className="relative container m-auto px-6 py-20 text-gray-500 md:px-12 xl:px-20">
        <div className="m-auto md:w-8/12 lg:w-5/12 xl:w-[480px] min-h-[calc(70vh)]">
          <div className="rounded-xl bg-white border border-lightGray shadow-lg">
            <div className="p-4 md:p-10">
              <div className="space-y-4">
                <h2 className="mb-8 text-2xl text-pink font-bold">
                  Sign up or log in
                </h2>
              </div>
              <div className="mt-16 grid space-y-4">
                <button className="h-12 px-6 bg-blue-600/90 text-white rounded-lg transition duration-300">
                  <div className="relative flex items-center space-x-4 justify-center">
                    <FaFacebook
                      className="absolute left-0 text-white"
                      size={22}
                    ></FaFacebook>
                    <span className="block w-max font-medium tracking-wide text-gray-700 text-sm transition duration-300 sm:text-base">
                      Continue with Facebook
                    </span>
                  </div>
                </button>
                <button
                  className="h-12 px-6 border border-gray-300 rounded-lg transition duration-300 
 hover:border-blue-400 focus:bg-blue-50"
                >
                  <div className="relative flex items-center space-x-4 justify-center">
                    <img
                      src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                      className="absolute left-0 w-[22px]"
                      alt="google logo"
                    />
                    <span className="block w-max font-medium tracking-wide text-black/80 text-sm transition duration-300 sm:text-base">
                      Continue with Google
                    </span>
                  </div>
                </button>
                <button
                  className="h-12 px-6 bg-black/90 text-white border border-gray-300 rounded-lg transition duration-300 hover:border-blue-400"
                >
                  <div className="relative flex items-center space-x-4 justify-center">
                    <FaGithub
                      className="absolute left-0 text-white"
                      size={22}
                    ></FaGithub>
                    <span className="block w-max font-medium tracking-wide text-gray-700 text-sm transition duration-300 sm:text-base">
                      Continue with Github
                    </span>
                  </div>
                </button>
              </div>

              <div className="flex flex-col mt-3 space-y-3 justify-center items-center">
                <span className="text-black/50">or</span>
                <button className="h-12 w-full bg-pink text-white border border-gray-300 rounded-lg transition duration-300">
                  <span className="block font-medium tracking-wide text-gray-700 text-sm transition duration-300 sm:text-base">
                    Log in
                  </span>
                </button>

                <button className="h-12 w-full bg-white border-pink text-pink border border-gray-300 rounded-lg transition duration-300">
                  <span className="block font-medium tracking-wide text-gray-700 text-sm transition duration-300 sm:text-base">
                    Sign up
                  </span>
                </button>
              </div>

              <div className="mt-12 space-y-4 text-gray-600 text-center sm:-mb-8">
                <p className="text-sm">
                  By signing up, you agree to our{" "}
                  <span className="text-pink font-medium">
                    Terms and Conditions
                  </span>{" "}
                  and{" "}
                  <span className="text-pink font-medium">Privacy Policy.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
