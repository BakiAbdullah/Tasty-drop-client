import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import useAuth from "../../../api/useAuth";
import { useSelector } from "react-redux";
import { useGetRoleApisByEmailQuery } from "../../../redux/feature/roleApis";

export const Profile = () => {
  const { logOut } = useAuth();
  const user = useSelector((state) => state.user.user);
  const { data: userRole = {} } = useGetRoleApisByEmailQuery(`${user?.email}`); //i got an issue here while finding the rule for the user

  return (
    <>
      <div className="p-3">
        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10 object-cover rounded-full mr-2"
            src={user?.photoURL}
            alt=""
          />
          <span>
            <h1 className="font-medium">{user?.displayName}</h1>
            <p className="text-sm text-slate-600">
              {userRole?.role?.charAt(0).toUpperCase() +
                userRole?.role?.slice(1).toLowerCase()}
            </p>
            {/* it will make the first later of user role capitalized and rest of the letters will be in lower case */}
          </span>
        </div>
        <Link
          onClick={() => logOut()}
          to={"/"}
          className="flex items-center gap-2 ml-2 pt-5">
          <FiLogOut size={20} /> Log out
        </Link>
      </div>
    </>
  );
};
