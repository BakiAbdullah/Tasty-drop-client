import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import useAuth from "../../../api/useAuth";

export const Profile = () => {
  const { logOut, user, userRole } = useAuth();

  return (
    <>
      <div className="p-3">
        <hr className="pb-3 text-zinc-400" />
        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10 object-cover rounded-full mr-2"
            src={user?.photoURL}
            alt=""
          />
          <span>
            <h1 className="font-medium text-sm lg:text-base">
              {user?.displayName}
            </h1>
            <p className=" text-slate-600 text-sm ">
              {userRole?.charAt(0).toUpperCase() +
                userRole?.slice(1).toLowerCase()}
            </p>
            {/* it will make the first later of user role capitalized and rest of the letters will be in lower case */}
          </span>
        </div>
        <Link
          onClick={() => logOut()}
          to={"/"}
          className="flex items-center gap-2 ml-2 pt-5 pb-3 text-sm lg:text-base">
          <FiLogOut size={20} /> Log out
        </Link>
      </div>
    </>
  );
};
