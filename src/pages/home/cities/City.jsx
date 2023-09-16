import { Link } from "react-router-dom";

import {
  barishal,
  brahmanbaria,
  chattagram,
  comilla,
  dhaka,
  gazipur,
  khulna,
  mymensingh,
  rajshahi,
  rangpur,
  savar,
  sylhet,
} from "../../../assets/asset";
import MainHeading from "../../../components/Utils/TitleTexts/MainHeading";
import { useEffect, useState } from "react";

import axios from "axios";
import SearchbarByLocation from "../../../components/SearchbarByLocation/SearchbarByLocation";

const cities = [
  { name: "Barishal", image: barishal },
  { name: "Brahmanbaria", image: brahmanbaria },
  { name: "Chattagram", image: chattagram },
  { name: "Comilla", image: comilla },
  { name: "Dhaka", image: dhaka },
  { name: "Gazipur", image: gazipur },
  { name: "Khulna", image: khulna },
  { name: "Mymensingh", image: mymensingh },
  { name: "Rajshahi", image: rajshahi },
  { name: "Rangpur", image: rangpur },
  { name: "Savar", image: savar },
  { name: "Sylhet", image: sylhet },
];

const City = () => {
  return (
    <section className="md:mx-24 mt-10 md:mt-40 px-10 lg:px-0">
      <MainHeading title={"Find us in these cities and many more!"} />
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cities.map((city, index) => (
          <Link
            to={`city/${city?.name}`}
            key={index}
            className="relative group h-40 md:h-96 overflow-hidden rounded-lg"
          >
            {/* City Image */}
            <img
              className="w-full h-full object-cover transition-transform transform group-hover:scale-105 duration-500"
              src={city.image}
              alt={city.name}
            />
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 transition-all duration-500 group-hover:opacity-40 "></div>
            {/* City Name */}
            <div className="absolute  bottom-10 group-hover:bottom-[35%] transition-all duration-500  group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 mt-10 flex items-center justify-start">
              <span className="text-white uppercase text-2xl font-extrabold border-b-2 border-white p-2 m-2 ">
                {city.name}
              </span>
            </div>
            {/* City description */}
            <p className="absolute hover bottom-6 left-2 right-2 p-2 text-white font-Fredoka transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
              City Description will be here. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatem, dolore!
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default City;
