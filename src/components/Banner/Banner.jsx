import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../../src/assets/asset/banner-Image/banner1.jpg";
import banner2 from "../../../src/assets/asset/banner-Image/banner2.jpg";
import banner3 from "../../../src/assets/asset/banner-Image/banner3.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

export default function Banner() {
  // Banner Data
  const bannerData = [
    {
      image: banner1,
      text: "Culinary Delights, Delivered to You",
      description:
        "Experience culinary excellence like never before. Our carefully crafted gourmet dishes are now available for delivery.",
    },
    {
      image: banner2,
      text: "Savor Every Bite, Anytime, Anywhere",
      description:
        "Embark on a gastronomic journey with our diverse menu, offering a delightful array of dishes that are both mouthwatering and convenient.",
    },
    {
      image: banner3,
      text: "Epicurean Delights, Delivered Fresh",
      description:
        "Elevate your culinary experience with our meticulously curated menu, artfully prepared and promptly delivered to your doorstep.",
    },
  ];
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        {bannerData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="relative ">
              <img
                className="w-full object-cover h-[calc(100vh-100px)]  "
                src={data.image}
                alt=""
              />
              <div className="absolute inset-0 flex bg-black/30  items-center px-12">
                <div className="space-y-3">
                  <h1 className="lg:text-5xl text-3xl font-bold lg:w-[600px]  tracking-wider text-white">
                    {data.text}
                  </h1>
                  <p className="lg:w-1/2 text-gray-100">{data.description}</p>
                  <button className="text-lg bg-rose-600 font-semibold    rounded-lg px-4 py-2 text-white">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
