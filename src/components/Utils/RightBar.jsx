import logo from "/logo.png";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RxCross2, RxDashboard } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { BsJournalBookmark } from "react-icons/bs";
import useAuth from "../../api/useAuth";
import { MdWorkspacePremium } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { HiOutlineLogin } from "react-icons/hi";

export const RightBar = ({ showRightBar, setShowRightBar }) => {
  const { user, userRole, logOut } = useAuth();
  console.log(userRole);
  return (
    <div
      className={`h-full bg-white fixed right-0 z-50  transition-transform duration-500   lg:w-[350px] w-full  ${
        showRightBar ? "translate-x-0 box-shadow" : "translate-x-[100%]"
      }`}>
      <span className="flex items-center justify-between p-5">
        <span className="flex items-center ">
          <img className="w-16" src={logo} alt="" />
          <h1 className="text-2xl font-bold font-Fredoka text-orange-500">
            TastyDrop
          </h1>
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
          <>
            <button
              onClick={() => logOut()}
              className="text-base md:text-lg btn-primary inline-flex items-center gap-2  absolute bottom-2 right-0">
              Logout
              <BiLogOut size={18} />
            </button>
          </>
        ) : (
          <Link to={`/loginpage`} className="w-full">
            <button
              onClick={() => setShowRightBar(!showRightBar)}
              className="btn-bar text-left">
              <HiOutlineLogin size={20} className="text-zinc-500" />

              <p className="inline-flex flex-col text-[15px] hover:text-orange-500 transition-all ">
                Sign up or Log in
              </p>
            </button>
          </Link>
        )}
        {user && (
          <div className="flex flex-col items-start  gap-2 mt-3">
            {user &&
              userRole !== "customer" &&
              typeof userRole !== "undefined" && (
                <Link to={`/dashboard/${userRole}`} className="w-full">
                  <button
                    onClick={() => setShowRightBar(!showRightBar)}
                    className="btn-bar text-left">
                    <RxDashboard size={20} className="text-zinc-500" />

                    <p className="inline-flex flex-col text-[15px] hover:text-orange-500 transition-all ">
                      Dashboard
                    </p>
                  </button>
                </Link>
              )}
            <Link to="/profile" className="w-full">
              <button
                onClick={() => setShowRightBar(!showRightBar)}
                className="btn-bar text-left">
                <FaUser size={20} className="text-zinc-500" />{" "}
                <p className="inline-flex flex-col">
                  <span className="text-[15px] hover:text-orange-500 transition-all">
                    Account details
                  </span>
                  <span className="text-[13px] tracking-wide text-zinc-400">
                    {user?.email}
                  </span>
                </p>
              </button>
            </Link>
            <Link to="/order-history" className="w-full mt-3">
              <button
                onClick={() => setShowRightBar(!showRightBar)}
                className="btn-bar text-left">
                <BsJournalBookmark size={20} className="text-zinc-500" />

                <p className="inline-flex flex-col text-[15px] hover:text-orange-500 transition-all ">
                  Order history
                </p>
              </button>
            </Link>
            <Link to="/tastydrop-plus" className="w-full mt-3">
              <button
                onClick={() => setShowRightBar(!showRightBar)}
                className="btn-bar text-left">
                <MdWorkspacePremium size={20} className="text-zinc-500" />

                <span className="flex flex-col">
                  <p className="inline-flex flex-col text-[15px] hover:text-orange-500 transition-all ">
                    TastyDrop Plus
                  </p>
                  <p className="text-[13px] tracking-wide text-zinc-400">
                    Start your free trial now
                  </p>
                </span>
              </button>
            </Link>
          </div>
        )}
        <Link to="/faqs" className="w-full ">
          <button
            onClick={() => setShowRightBar(!showRightBar)}
            className="btn-bar text-left mt-3">
            <AiOutlineQuestionCircle size={20} className="text-zinc-500" />

            <p className="inline-flex flex-col text-[15px] hover:text-orange-500 transition-all ">
              FAQS
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
};
