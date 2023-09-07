import { useContext } from "react";
import logo from "/logo.png";
import { useSelector } from "react-redux";
import { AiFillHome, AiOutlineQuestionCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RxCross2, RxDashboard } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
// import { useGetbaseApiByEmailQuery } from "../../redux/feature/baseApi";
import { AuthContext } from "../../Provider/AuthProvider";
import useAuth from "../../api/useAuth";
import { useGetbaseApiByEmailQuery } from "../../redux/feature/baseApi";
export const RightBar = ({ showRightBar, setShowRightBar }) => {
  const { user } = useSelector((state) => state?.user);
  // const { user } = useAuth();
  const {
    currentData: userRole = {},
    isFetching,
    refetch,
  } =useGetbaseApiByEmailQuery(`${user?.email}`,{ refetchOnMountOrArgChange: true });
  return (
    <div
      className={`h-full bg-white fixed right-0 z-50  transition-transform duration-500   lg:w-[350px] w-[260px]  ${
        showRightBar ? "translate-x-0 box-shadow" : "translate-x-[100%]"
      }`}>
      <span className="flex items-center justify-between p-5">
        <span className="flex items-center ">
          <img className="w-16" src={logo} alt="" />
          <h1 className="text-xl font-bold text-orange-500">TastyDrop</h1>
        </span>
        <RxCross2
          onClick={() => setShowRightBar(!showRightBar)}
          size={25}
          className="text-orange-500 font-bold cursor-pointer"
        />
      </span>
      <hr className="text-slate-300" />
      <div className="m-5">
        {user ? (
          <button
            onClick={() => logOut()}
            className="text-base md:text-lg btn-primary inline-flex items-center gap-2  absolute bottom-2 right-0">
            <AiFillHome size={18} />
            <Link>logout</Link>
          </button>
        ) : (
          <button
            onClick={() => setShowRightBar(!showRightBar)}
            className="btn  ">
            <AiFillHome size={18} />
            <Link to="/loginpage">Sign up or Log in</Link>
          </button>
        )}

        <div className="flex flex-col items-start  gap-2 mt-3">
          {user && (
            <Link to="/profile" className="w-full">
              <button
                onClick={() => setShowRightBar(!showRightBar)}
                className="btn">
                <FaUser /> Profile
              </button>
            </Link>
          )}
          {userRole?.role && (
            <Link to={`/dashboard/${userRole.role}`} className="w-full">
              {" "}
              <button
                onClick={() => setShowRightBar(!showRightBar)}
                className="btn">
                <RxDashboard /> Dashboard
              </button>
            </Link>
          )}
        </div>

        <button className="inline-flex items-center gap-2 mt-4 text-slate-600">
          <AiOutlineQuestionCircle size={23} />
          FAQs
        </button>
      </div>
    </div>
  );
};
