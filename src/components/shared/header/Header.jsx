import logo from "/logo.png";
import { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  // Changing Logo color and Partner with us button in Riders Page
  const logoColor = location.pathname.includes("riders");
  const TeamPageLogo = location.pathname.includes("teams");
  const partnersPageLogo = location.pathname.includes("partners");
  const hideSelector =
    location.pathname.includes("riders") ||
    location.pathname.includes("teams") ||
    location.pathname.includes("partners");

  const [scrolling, setScrolling] = useState(false);

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

  return (
    <div
      className={`flex justify-between items-center px-4 md:px-8 lg:px-10 py-4 fixed w-full z-10 ${
        scrolling ? "bg-black/50 transition duration-500" : ""
      }`}>
      <Link to="/" className="flex items-center justify-center">
        <img className="w-16 md:w-20" src={logo} alt="logo" />
        <span
          className={`text-xl md:text-3xl ${
            logoColor || TeamPageLogo || partnersPageLogo
              ? "text-white"
              : "text-orange-500"
          } font-bold ml-2`}>
          TastyDrop
        </span>
      </Link>
      <div className="flex items-center gap-2 md:gap-5">
        {/* Selector */}
        <select
          className={`px-3 py-2 rounded-md ${
            hideSelector ? "hidden" : "block"
          } custom-select`}>
          <option value="Partner With Us">Partner With Us</option>
          <option value="Riders">Riders</option>
          <option value="Carriers">Carriers</option>
        </select>

        {/* Buttons */}
        <button className="text-base md:text-lg btn-primary inline-flex items-center gap-2">
          <AiFillHome size={18} />
          <Link to="/loginpage">Sign up or Log in</Link>
        </button>
        <button className="text-base md:text-lg btn-primary duration-400 inline-flex items-center gap-2">
          <BiSolidUser size={18} />
          Profile
        </button>
      </div>
    </div>
  );
};

export default Header;
