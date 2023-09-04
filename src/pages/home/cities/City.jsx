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
    <section className="md:mx-20 mt-10 md:mt-40 px-10 lg:px-0">
      <MainHeading
        title={"Find us in these cities and many more!"}></MainHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cities.map((city, index) => (
          <Link
            to={`city/${city?.name}`}
            key={index}
            className="relative group h-40 md:h-60 overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover transition-transform transform group-hover:scale-105 overflow-hidden  duration-500"
              src={city.image}
              alt={city.name}
            />
            <div className="absolute  inset-0 flex items-center justify-center rounded-md">
              <span className="absolute bottom-0 left-0 p-2 m-2 duration-500 bg-white/80 rounded-lg text-black text-lg font-semibold">
                {city.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default City;
