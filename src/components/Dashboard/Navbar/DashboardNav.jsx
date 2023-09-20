import { CiMail } from "react-icons/ci";
import { HiOutlineMenuAlt2, HiOutlineMenu } from "react-icons/hi";
import { PiBellSimpleRingingLight } from "react-icons/pi";

import useAuth from "../../../api/useAuth";
import { Link } from "react-router-dom";
import Toggle from "../../Utils/Toggle";
export const DashboardNav = ({
  showSidebar,
  setShowSidebar,
  showQuickBar,
  setShowQuickBar,
}) => {
  const { user } = useAuth();
  return (
    <div className="flex justify-between items-center lg:p-2 z-50 p-1 dark-bar">
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="hover:bg-black/20 transition-all rounded-full p-2 dark-icon">
        {showSidebar ? (
          <HiOutlineMenu size={24} />
        ) : (
          <HiOutlineMenuAlt2 size={24} />
        )}
      </button>
      <div className="flex  items-center lg:space-x-8  space-x-2">
        <div className="lg:hidden">
          <Toggle enabled={showQuickBar} setEnabled={setShowQuickBar} />
        </div>
        <Link to={"/profile"}>
          <button className="hover:bg-black/20 transition-all rounded-full p-2">
            {/* <BiUser size={24} /> */}
            <img
              title="Profile"
              className="h-10 w-10 object-cover rounded-full"
              src={user?.photoURL}
              alt="avatar"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};
