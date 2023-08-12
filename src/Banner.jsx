import React from "react";
import banner from "../src/assets/asset/Banner/Banner.jpg";
const Banner = () => {
  return (
    <div
      className="bg-cover bg-top min-h-[calc(100vh-98px)] relative "
      style={{ backgroundImage: `url("${banner}")` }}>
      <div className="absolute bg-black/40 inset-0 flex items-center justify-center ">
        <div>
          <h1 className="text-5xl tracking-wide font-semibold   text-center text-white">
            Satisfy your cravings with <br /> restaurant-quality{" "}
            <span className="text-orange-500">food</span>
          </h1>

          <div className=" relative w-[520px] mx-auto pt-5">
            <input
              className="px-8 py-5  w-full mt-4 rounded-full focus:outline-none "
              type="text"
              placeholder="Your Address"
            />
            <button class="absolute right-3 top-[50%] transform -translate-y-2 bg-orange-500 px-10 py-3 rounded-full">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
