import { Link } from "react-router-dom";

import {
  barishal,
  brahmanbaria,
  chattagram,
  comilla,
  dhaka,
  gazipur,
  khulna,
  rajshahi,
  rangpur,
  savar,
  sylhet,
} from "../../../assets/asset";
import MainHeading from "../../../components/TitleTexts/MainHeading";

const cities = [
  { name: "Barishal", image: barishal },
  { name: "Brahmanbaria", image: brahmanbaria },
  { name: "Chattagram", image: chattagram },
  { name: "Comilla", image: comilla },
  { name: "Dhaka", image: dhaka },
  { name: "Gazipur", image: gazipur },
  { name: "Khulna", image: khulna },
  { name: "Rajshahi", image: rajshahi },
  { name: "Rangpur", image: rangpur },
  { name: "Savar", image: savar },
  { name: "Sylhet", image: sylhet },
];

const City = () => {
<<<<<<< HEAD
    return (
      <section className=' md:mx-20 mt-10 md:mt-40'>
            <MainHeading title={'Find us in these cities and many more!'}></MainHeading>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
    {cities.map((city, index) => (
        <Link to={`city/${city.name.toLowerCase()}`} key={index} className="relative group">
        <img className="w-full h-40 md:h-60 object-cover rounded-lg transition-transform transform group-hover:scale-105" src={city.image} alt={city.name} />
        <div className="absolute inset-0 flex items-center justify-center rounded-md">
          <span className="absolute bottom-0 left-0 p-2 m-2 bg-white rounded-lg text-black text-lg font-semibold">{city.name}</span>
        </div>
      </Link>
    ))}
  </div>

  {/* extar btn */}
  <Link to="/restaurant">
  <button className='bg-slate-300 p-2 rounded-lg'>restaurant</button>
  </Link>
=======
  return (
    <section className="md:mx-20 mt-10 md:mt-40">
      <MainHeading
        title={"Find us in these cities and many more!"}></MainHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cities.map((city, index) => (
          <Link
            to={`city/${city.name.toLowerCase()}`}
            key={index}
            className="relative group h-40 md:h-60 overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover transition-transform transform group-hover:scale-105 overflow-hidden  duration-500"
              src={city.image}
              alt={city.name}
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-md">
              <span className="absolute bottom-0 left-0 p-2 m-2 duration-500 bg-white rounded-lg text-black text-lg font-semibold">
                {city.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
>>>>>>> 24a2a0dc43e4ffe093990630e2a8b17fc9af4564
    </section>
  );
};

export default City;
