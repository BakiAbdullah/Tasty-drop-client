import banner from "../../assets/asset/Banner/Banner.jpg";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../api/useAuth";

const MainBanner = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSearch = (event) => {
    event.preventDefault();
    {
      searchTerm &&
        navigate(`/search-results?term=${encodeURIComponent(searchTerm)}`);
    }
  };

  // Custom TypeWriter
  const [placeholder, setPlaceholder] = useState("");
  const words = [
    "Enter your location for restaurants, cuisines and dishes",
    "dhaka",
    "chattagram",
    "khulna",
    "barishal",
  ];
  const wordIndexRef = useRef(0);

  useEffect(() => {
    const typewriter = setInterval(() => {
      const wordIndex = wordIndexRef.current;
      const currentWord = words[wordIndex];
      const charIndex = placeholder.length;

      if (charIndex < currentWord.length) {
        setPlaceholder(
          (prevPlaceholder) => prevPlaceholder + currentWord[charIndex]
        );
      } else {
        setTimeout(() => {
          wordIndexRef.current = (wordIndex + 1) % words.length;
          setPlaceholder("");
        }, 600);
      }
    }, 30);

    return () => clearInterval(typewriter);
  }, [placeholder, words]);

  return (
    <div
      className="bg-cover bg-top min-h-[550px] relative"
      style={{ backgroundImage: `url("${banner}")` }}>
      <div className="absolute bg-black/50 inset-0 flex items-center justify-center ">
        <div>
          <motion.h1
            className="text-3xl md:text-6xl tracking-wide font-semibold text-center text-white font-Fredoka"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}>
            Satisfy your cravings with <br /> restaurant-quality{" "}
            <span className="text-orange-500">food</span>
          </motion.h1>

          <motion.div
            className=" relative md:w-[600px] mx-auto pt-5"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}>
            <p className="text-center text-gray-200 text-white pt-3  px-5 lg:text-base text-sm">
              Enter your location to see what we deliver to your area!
            </p>
            <form
              onSubmit={handleSearch}
              className="flex items-center relative lg:mx-0 mx-1">
              <input
                className="lg:px-6 lg:py-4 w-full mt-4 rounded-full lg:text-base text-sm py-2 mx-5"
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="absolute lg:text-base text-sm right-3 btn-rounded top-[31%] lg:top-[23%]">
                Search
              </button>
            </form>
            {!user && (
              <p className="pt-3 text-center text-gray">
                <Link
                  to={"/loginpage"}
                  className="text-orange-500 font-semibold">
                  Login
                </Link>{" "}
                for your recent addresses.
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
