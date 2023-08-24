import logo from "/logo.png";
import { useState, useEffect, useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useSelector } from "react-redux";

const Header = () => {
  const location = useLocation();
  const { logOut } = useContext(AuthContext);
  // Changing Logo color and Partner with us button in Riders Page
  const logoColor = location.pathname.includes("riders");
  const TeamPageLogo = location.pathname.includes("business");
  const partnersPageLogo = location.pathname.includes("partners");
  const hideSelector =
    location.pathname.includes("riders") ||
    location.pathname.includes("business") ||
    location.pathname.includes("partners");

  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setOpen] = useState(false);
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
  const user = useSelector((state) => state.user.user);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div
      className={`lg:flex justify-between  items-center px-4 md:px-8 lg:px-10 py-4 fixed w-full z-10 ${
        scrolling ? "bg-black/50 transition duration-500" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <Link onClick={()=>window.location.reload()} to="/" className="flex items-center justify-center">
          <img className="w-20 md:w-24" src={logo} alt="logo" />
          <span
            className={`text-2xl md:text-3xl ${
              logoColor || TeamPageLogo || partnersPageLogo
                ? "text-white"
                : "text-pink"
            } font-bold ml-1`}
          >
            TastyDrop
          </span>
        </Link>
        <span
          onClick={() => setOpen(!isOpen)}
          className="block md:hidden bg-black/10 rounded-lg"
        >
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
        }  w-2/3 lg:w-auto bg-black/90 lg:bg-transparent h-[100vh] lg:h-auto absolute lg:sticky top-0  p-10 lg:p-0 transition-all duration-300`}
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 md:gap-5 ">
          {/* Selector */}
          <select
            className={`px-3 py-2 rounded-md ${
              hideSelector ? "hidden" : "block "
            } custom-select w-full lg:w-auto`}
          >
            <option value="Partner With Us">Partner With Us</option>
            <option value="Riders">Riders</option>
            <option value="Carriers">Business</option>
          </select>

          {user ? (
            <button
              onClick={handleLogout}
              className="text-base md:text-lg btn-primary inline-flex items-center gap-2"
            >
              <AiFillHome size={18} />
              <Link>logout</Link>
            </button>
          ) : (
            <button
              onClick={() => setOpen(!isOpen)}
              className="text-base md:text-lg btn-primary inline-flex items-center gap-2"
            >
              <AiFillHome size={18} />
              <Link to="/loginpage">Sign up or Log in</Link>
            </button>
          )}
          <Link to='/dashboard'>
            <button
              onClick={() => setOpen(!isOpen)}
              className="text-base md:text-lg btn-primary duration-400 inline-flex items-center gap-2"
            >
              <BiSolidUser size={18} />
              Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
