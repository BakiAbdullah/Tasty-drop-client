import React from "react";
import { FiLoader } from "react-icons/fi";

const Spinner = () => {
  return (
    <div className="min-h-[calc(100vh-200px)]   flex justify-center items-center">
      <FiLoader className="animate-spin" size={30} />
    </div>
  );
};

export default Spinner;
