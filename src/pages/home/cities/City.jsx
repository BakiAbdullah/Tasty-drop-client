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

const cities = [
  { 
    name: "Barishal", 
    image: barishal, 
    description: "Known for its serene beauty and lush green landscapes, Barishal is a city of tranquility." 
  },
  { 
    name: "Brahmanbaria", 
    image: brahmanbaria, 
    description: "Brahmanbaria, where tradition meets modernity, is famous for its rich cultural heritage." 
  },
  { 
    name: "Chattagram", 
    image: chattagram, 
    description: "Chattagram, the bustling port city, is the gateway to scenic hills and pristine beaches." 
  },
  { 
    name: "Comilla", 
    image: comilla, 
    description: "Comilla, a city steeped in history, is home to ancient relics and archaeological wonders." 
  },
  { 
    name: "Dhaka", 
    image: dhaka, 
    description: "Dhaka, the capital city, is a vibrant metropolis known for its bustling streets and rich culture." 
  },
  { 
    name: "Gazipur", 
    image: gazipur, 
    description: "Gazipur, the industrial hub, is renowned for its manufacturing and economic activities." 
  },
  { 
    name: "Khulna", 
    image: khulna, 
    description: "Khulna, the gateway to the Sundarbans, offers a unique blend of nature and industry." 
  },
  { 
    name: "Mymensingh", 
    image: mymensingh, 
    description: "Mymensingh, with its agricultural landscapes, is a city of fertile plains and biodiversity." 
  },
  { 
    name: "Rajshahi", 
    image: rajshahi, 
    description: "Rajshahi, known as the Silk City, is famous for its silk industry and historical sites." 
  },
  { 
    name: "Rangpur", 
    image: rangpur, 
    description: "Rangpur, an agricultural hub, is known for its contribution to the nation's food production." 
  },
  { 
    name: "Savar", 
    image: savar, 
    description: "Savar, a city of education, houses prominent educational institutions and research centers." 
  },
  { 
    name: "Sylhet", 
    image: sylhet, 
    description: "Sylhet, a land of tea gardens and natural beauty, is a paradise for nature enthusiasts." 
  },
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
            className="relative group h-72 md:h-96 overflow-hidden rounded-lg"
          >
            {/* City Image */}
            <img
              className="w-full h-full object-cover transition-transform transform group-hover:scale-105 duration-500"
              src={city.image}
              alt={city.name}
            />
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-10 transition-all duration-500 group-hover:opacity-50 "></div>
            {/* City Name */}
            <div className="absolute bottom-10 group-hover:bottom-[30%] transition-all duration-500  group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 mt-10 flex items-center justify-start">
              <span className="text-white uppercase text-2xl font-extrabold border-b-2 border-white p-2 m-2 ">
                {city.name}
              </span>
            </div>
            {/* City description */}
            <p className="absolute hover bottom-6 left-2 right-2 p-2 text-white font-Fredoka transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
             {city.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default City;
