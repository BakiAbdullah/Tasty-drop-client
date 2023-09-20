import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const UserCategoryCard = ({ imageSrc, title, description, linkTo }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation triggers only once
    rootMargin: "-100px 0px", // Adjust this value to set the trigger offset
  });

  const controls = useAnimation();

  const animationVariants = {
    hidden: { opacity: 0.1, translateY: 25 },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
    >
      <img loading="lazy" className="rounded-3xl" src={imageSrc} alt={title} />
      <p className="my-5">{description}</p>
      <Link
        to={linkTo}
        className="bg-pink rounded-3xl py-2 px-4 text-white font-medium hover:bg-darkPink"
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default UserCategoryCard;
