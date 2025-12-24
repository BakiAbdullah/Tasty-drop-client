import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import burgerImg from "../../../assets/asset/dailyDealsCardImg/burgers.jpg";
import pancakes from "../../../assets/asset/dailyDealsCardImg/pancakes.jpg";
import pizzaImg from "../../../assets/asset/dailyDealsCardImg/pizzaa.jpg";
import plateBiriyani from "../../../assets/asset/dailyDealsCardImg/plate-biryani.jpg";
import chickenImg from "../../../assets/asset/dailyDealsCardImg/chicken-skewers.jpg";
import MainHeading from "../../Utils/TitleTexts/MainHeading";
import crispy from "../../../assets/asset/dailyDealsCardImg/crispy-fried.jpg";
import { SproutIcon } from "lucide-react";

const images = [
  chickenImg,
  pancakes,
  crispy,
  burgerImg,
  plateBiriyani,
  pizzaImg,
];

const DailyDeals = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Auto-sliding in every 2 seconds
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="m-5 md:m-10 lg:m-20 ">
      {/* Background decorative elements */}
      {/* <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300 rounded-full opacity-15 blur-3xl -z-10"></div> */}

      <MainHeading title={"Daily Deals"}></MainHeading>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
        <AnimatePresence initial={false} custom={activeIndex}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`card w-full h-40 rounded-xl object-cover m-2 relative overflow-hidden group cursor-pointer ${
                activeIndex === index ? "scale-100" : "scale-90"
              }`}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: 1,
                scale: activeIndex === index ? 1 : 0.9,
              }}
              exit={{ opacity: 0.6 }}
              transition={{ duration: 0.5 }}
            >
              {/* Image */}
              <img
                loading="lazy"
                className="w-full h-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-110"
                src={image}
                alt={`Deal ${index + 1}`}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

              {/* Active indicator ring */}
              {activeIndex === index && (
                <div className="absolute inset-0 border-2 border-orange-500 rounded-xl shadow-lg shadow-orange-500/30 animate-pulse"></div>
              )}

              {/* Shine effect on active card */}
              {activeIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine rounded-xl"></div>
              )}

              {/* Hot deal badge for active card */}
              {activeIndex === index && (
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10"
                >
                  <SproutIcon size={23}/> HOT
                </motion.div>
              )}

              {/* Hover content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                  <p className="text-sm font-bold text-gray-800">
                    Special Deal
                  </p>
                  <p className="text-xs text-orange-500">Order Now!</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "w-8 bg-orange-500"
                : "w-2 bg-orange-200  hover:bg-orange-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DailyDeals;
