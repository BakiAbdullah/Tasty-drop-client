import logo from "../../../../public/logo.png";
import { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
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
      className={`flex justify-between items-center px-10 py-4 fixed w-full z-10 ${
        scrolling ? "bg-black/50 transition duration-500" : ""
      }`}
    >
      <Link to="/">
        <div className="flex items-center justify-center">
          <img className="w-20" src={logo} alt="" />
          <span className="text-3xl text-orange-500 font-bold">
            TastyDrop
          </span>
        </div>
      </Link>
      <div className="flex items-center gap-5">
        <select className="px-3 py-2 rounded-md custom-select">
          <option value="Partner With Us"> Partner With Us</option>
          <option value="Riders">Riders</option>
          <option value="Carriers">Carriers</option>
        </select>
        <button className="text-lg btn-primary inline-flex items-center gap-2">
          <AiFillHome size={18} />
          <Link to="/login">Sign up or Log in</Link>
        </button>
        <button className="text-lg btn-primary duration-400 inline-flex items-center gap-2">
          <BiSolidUser size={18} />
          Profile
        </button>
      </div>
    </div>
  );
};

export default Header;

