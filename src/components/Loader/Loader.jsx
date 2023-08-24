
import { IoFastFoodSharp } from "react-icons/io5";
import "./Loader.css"; // Import your CSS file for styling

const Loader = () => {
  return (
    <div className="loader-container">
      <IoFastFoodSharp className="text-pink animate-pulse" size={60} />
    </div>
  );
};

export default Loader;
