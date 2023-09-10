import React from "react";
import logo from "../../../public/logo.png";
import cancel from "../../assets/icon/cancel.svg";
import discount from "../../assets/icon/discount.svg";
import calendar from "../../assets/icon/calendar.svg";
import silver from "../../assets/icon/silver.svg";
import gold from "../../assets/icon/gold.svg";
import { FiLoader } from "react-icons/fi";
export const TastyDropPlus = () => {
  const isLoading = false;
  return (
    <div className="pt-24 bg-zinc-50 font-Fredoka">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 justify-center ">
          <img src={logo} className="w-28 " alt="TastyDrop" />{" "}
          <h1 className="text-3xl   tracking-wide">
            <span className="font-medium   ">TastyDrops</span>
            <span className="text-orange-500">plus</span>
          </h1>
        </div>

        <div className="space-y-20">
          <div className="text-center pt-20 lg:max-w-md mx-auto space-y-3">
            <h1 className="text-3xl font-medium  ">
              Get special deals and offers on the food you love
            </h1>
            <p className="text-zinc-500 px-7 ">
              Join Plus to skip the delivery fee at great restaurants and
              grocery shops
            </p>
          </div>

          {/* features section */}

          <div className="grid text-center lg:grid-cols-3 max-w-3xl mx-auto  place-items-center bg-white p-5 rounded-md">
            <div className=" flex flex-col items-center  justify-center h-48 w-52">
              <img className="w-20 " src={discount} alt="discount" />
              <h1 className="text-[17px] text-zinc-600">
                Save up to 100tk on delivery fees per order
              </h1>
            </div>
            <div className=" flex flex-col items-center justify-center h-48 w-52  ">
              <img className="w-20" src={calendar} alt="calendar" />
              <h1 className="text-[17px] text-zinc-600">
                Get special birthday gift
              </h1>
            </div>
            <div className=" flex flex-col items-center  h-48 w-52 justify-center">
              <img className="w-20" src={cancel} alt="cancel" />
              <h1 className="text-[17px] text-zinc-600">Cancel at anytime</h1>
            </div>
          </div>

          {/* plans area */}
          <div className="lg:max-w-3xl mx-auto text-center">
            <h1 className="div-title">Choose your plan</h1>
            <div className="flex flex-col gap-7 lg:flex-row pt-10">
              <div className="bg-white  shadow-lg rounded-md">
                <div className="bg-gradient-to-l from-orange-500 via-red-500 to-orange-800 p-4 ">
                  <img className="w-24 mx-auto " src={silver} alt="" />
                  <h1 className="text-white text-lg py-3 font-medium">
                    Free delivery on orders of Tk 49 or more
                  </h1>
                </div>
                <div className="space-y-4 mt-5 p-5">
                  <h1 className="text-2xl">Tk 399/month</h1>
                  <p>
                    Free delivery on the food you love – restaurants, takeaway
                    or groceries
                  </p>
                  <button
                    disabled={isLoading}
                    type="submit"
                    className={`
                          bg-orange-500
                     py-2   text-white font-medium rounded mt-5 px-3 hover:bg-orange-600 transition-all w-full`}>
                    {isLoading ? (
                      <FiLoader
                        className="animate-spin m-auto text-white "
                        size={24}
                      />
                    ) : (
                      "Subscribe silver for 30 days"
                    )}
                  </button>
                </div>
              </div>
              <div className="bg-white  shadow-lg rounded-md">
                <div className="bg-gradient-to-l from-orange-500 via-red-500 to-orange-800 p-4 ">
                  <img className="w-24 mx-auto " src={gold} alt="" />
                  <h1 className="text-white text-lg py-3 font-medium">
                    Free delivery on orders of Tk 99 or more
                  </h1>
                </div>
                <div className="space-y-4 mt-5 p-5">
                  <h1 className="text-2xl">Tk 999/month</h1>
                  <p>
                    Free delivery on the food you love – restaurants, takeaway
                    or groceries
                  </p>
                  <button
                    disabled={isLoading}
                    type="submit"
                    className={`
                          bg-orange-500
                     py-2   text-white font-medium rounded mt-5 px-3 hover:bg-orange-600 transition-all w-full`}>
                    {isLoading ? (
                      <FiLoader
                        className="animate-spin m-auto text-white "
                        size={24}
                      />
                    ) : (
                      "Subscribe gold for 30 days"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
