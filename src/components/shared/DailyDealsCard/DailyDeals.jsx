import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import burgerImg from "../../../assets/asset/dailyDealsCardImg/burgers.jpg";
import pancakes from "../../../assets/asset/dailyDealsCardImg/pancakes.jpg";
import pizzaImg from "../../../assets/asset/dailyDealsCardImg/pizzaa.jpg";
import plateBiriyani from "../../../assets/asset/dailyDealsCardImg/plate-biryani.jpg";
import chickenImg from "../../../assets/asset/dailyDealsCardImg/chicken-skewers.jpg";
import MainHeading from "../../Utils/TitleTexts/MainHeading";
import crispy from "../../../assets/asset/dailyDealsCardImg/crispy-fried.jpg";

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
    <div className="m-5 md:m-10 lg:m-20">
      <MainHeading title={"Daily Deals"}></MainHeading>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
        <AnimatePresence initial={false} custom={activeIndex}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`card w-full h-40 rounded-xl object-cover m-2 ${
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
              <img
              loading="lazy"
                className="w-full h-full rounded-xl object-cover"
                src={image}
                alt={`Deal ${index + 1}`}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DailyDeals;
