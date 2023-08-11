// import { Link } from "react-router-dom";

// const Button = ({ to, text, colorRevert }) => {
//   return (
//     // <div className="relative group px-7">
//     //   {/* <span className="border-[4px] absolute -top-1/3 group-hover:px-12 border-pink  transition-all duration-300 px-[36px] py-6 rounded-xl"></span> */}

//     // </div>
//     <button
//       // className={`bg-pink px-5 py-2 text-white rounded-lg font-semibold text-lg`}
//     >
//       <Link to={to}>{text}</Link>
//     </button>
//   );
// };

const Button = ({ label, colorRevert, disabled, onClickHandler, payload }) => {
  const handleClick = () => {
    if (typeof onClickHandler === "function") {
      onClickHandler(payload);
    }
  };
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`
      disabled:opacity-40
        disabled:cursor-not-allowed
        bg-pink px-5 py-2 rounded-lg font-semibold text-lg
        ${colorRevert ? "bg-white text-pink" : "text-white"}
      `}
    >
      {label}
    </button>
  );
};
export default Button;
