import { Link } from "react-router-dom";

const Button = ({ to, text }) => {
  return (
    // <div className="relative group px-7">
    //   {/* <span className="border-[4px] absolute -top-1/3 group-hover:px-12 border-pink  transition-all duration-300 px-[36px] py-6 rounded-xl"></span> */}

    // </div>
    <button className="bg-pink px-8 py-2 text-white rounded-lg font-semibold text-lg ">
      <Link to={to}>{text}</Link>
    </button>
  );
};
export default Button;
