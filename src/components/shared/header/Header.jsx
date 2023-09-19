import logo from "/logo.png";
import { useState, useEffect, useContext } from "react";
import { BiLogIn, BiLogOut, BiSolidUser } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
import DropdownMenu from "../../Utils/HeaderMenuToggle";
import useAuth from "../../../api/useAuth";
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = ({ showRightBar, setShowRightBar }) => {
  const location = useLocation();
  const { logOut } = useAuth();
  const hideSelector =
    location.pathname.includes("riders") ||
    location.pathname.includes("business") ||
    location.pathname.includes("partners");

  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setOpen] = useState(false);
  // const isMounted = useRef(true);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { user } = useContext(AuthContext);

  return (
    <div
      className={`lg:flex justify-between  items-center px-4 md:px-8 lg:px-10 py-4 fixed w-full z-20 ${
        scrolling ? "bg-black/50 transition duration-500" : ""
      }`}>
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center justify-center">
          <img className="w-20 md:w-24" src={logo} alt="logo" />
          <span
            className={`text-2xl md:text-3xl font-Fredoka ${
              hideSelector ? "text-white" : "text-pink"
            } font-bold`}>
            TastyDrop
          </span>
        </Link>
        <span
          onClick={() => setOpen(!isOpen)}
          className="block md:hidden bg-black/10 rounded-lg">
          <Hamburger
            color="white"
            size={25}
            toggled={isOpen}
            toggle={() => setOpen(false)}
          />
        </span>
      </div>

      <div
        className={`${
          isOpen ? "left-0" : "-left-[600px]"
        }  w-2/3 lg:w-auto bg-black/90 lg:bg-transparent h-[100vh] lg:h-auto absolute lg:sticky top-0  p-10 lg:p-0 transition-all duration-300`}>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 md:gap-5 ">
          {/* Navbar Dropdown menu */}
          <DropdownMenu />
          {user ? (
            <button
              onClick={() => logOut()}
              className="text-base md:text-lg btn-primary inline-flex items-center gap-2">
              <BiLogOut size={18} />
              Logout
            </button>
          ) : (
            <button
              onClick={() => setOpen(!isOpen)}
              className="text-base md:text-lg btn-primary inline-flex items-center gap-2">
              <BiLogIn size={18} />
              <Link to="/loginpage">Sign up or Log in</Link>
            </button>
          )}
          {/* it will navigate the user to his dashboard based on his role  */}
          <button
            onClick={() => setShowRightBar(!showRightBar)}
            className="text-base md:text-lg btn-primary duration-400 inline-flex items-center gap-2">
            <BiSolidUser size={18} />
            Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
