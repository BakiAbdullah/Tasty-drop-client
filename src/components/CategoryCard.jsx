import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const AnimatedSection = ({ imageSrc, title, description, linkTo }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Percentage of element visible in the viewport
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
      transition={{ duration: 2, delay: 0.6 }}
    >
      <img className="rounded-3xl" src={imageSrc} alt={title} />
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

export default AnimatedSection;
