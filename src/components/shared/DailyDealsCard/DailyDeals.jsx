import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import burgerImg from "../../../assets/asset/dailyDealsCardImg/burgers.jpg";
import pizzaImg from "../../../assets/asset/dailyDealsCardImg/pizzaa.jpg";
import chickenImg from "../../../assets/asset/dailyDealsCardImg/chicken-skewers.jpg";
import MainHeading from "../../Utils/TitleTexts/MainHeading";

const images = [pizzaImg, chickenImg, burgerImg, chickenImg, pizzaImg];

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
    <div className="m-10 md:m-20">
      <MainHeading title={"Daily Deals"}></MainHeading>
      <div className="cards-container flex flex-col lg:flex-row items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} custom={activeIndex}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`card`}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: 1,
                scale: activeIndex === index ? 1 : 0.9,
              }}
              exit={{ opacity: 0.6 }}
              transition={{ duration: 0.5 }}>
              <img
                className={`w-[290px] h-40 rounded-xl object-cover`}
                src={image}
                alt={` ${index + 1}`}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DailyDeals;
