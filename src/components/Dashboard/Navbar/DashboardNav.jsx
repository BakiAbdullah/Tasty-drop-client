import { CiMail } from "react-icons/ci";
import { HiOutlineMenuAlt2, HiOutlineMenu } from "react-icons/hi";
import { PiBellSimpleRingingLight } from "react-icons/pi";

import useAuth from "../../../api/useAuth";
export const DashboardNav = ({ showSidebar, setShowSidebar }) => {
  const { user } = useAuth();
  return (
    <div className="flex justify-between items-center p-4 ">
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="hover:bg-black/20 transition-all rounded-full p-2">
        {showSidebar ? (
          <HiOutlineMenu size={24} />
        ) : (
          <HiOutlineMenuAlt2 size={24} />
        )}
      </button>
      <div className="flex  items-center lg:space-x-8  space-x-2">
        <button className="hover:bg-black/20 transition-all rounded-full p-2">
          <CiMail size={24} />
        </button>
        <button className="hover:bg-black/20 transition-all rounded-full p-2">
          <PiBellSimpleRingingLight size={24} />
        </button>
        <button className="hover:bg-black/20 transition-all rounded-full p-2">
          {/* <BiUser size={24} /> */}
          <img
            className="h-10 w-10 object-cover rounded-full"
            src={user?.photoURL}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};
