import banner from "../../assets/asset/Banner/Banner.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MainBanner = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search-results?term=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div
      className="bg-cover bg-top min-h-[550px] relative"
      style={{ backgroundImage: `url("${banner}")` }}
    >
      <div className="absolute bg-black/40 inset-0 flex items-center justify-center ">
        <div>
          <motion.h1
            className="text-3xl md:text-6xl tracking-wide font-semibold text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Satisfy your cravings with <br /> restaurant-quality{" "}
            <span className="text-orange-500">food</span>
          </motion.h1>

          <motion.div
            className=" relative md:w-[600px] mx-auto pt-5"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
            <p className="text-center text-gray-200 text-white pt-3 text-base">
              Enter your location to see what we deliver to your area!
            </p>
            <form
              onSubmit={handleSearch}
              className="flex items-center relative"
            >
              <input
                className="px-6 py-4 w-full mt-4 rounded-full text-lg"
                type="text"
                placeholder="Enter your location for restaurants and cuisines"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-2 btn-rounded top-[29%]"
              >
                Search
              </button>
            </form>
            <p className="pt-3 text-center text-gray">
              <Link to={"/login"} className="text-orange-500 font-semibold">
                Login
              </Link>{" "}
              for your recent addresses.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
