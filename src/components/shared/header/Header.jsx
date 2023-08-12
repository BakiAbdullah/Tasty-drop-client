import { NavLink } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineClose, AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import Button from '../../Button/Button';


const Header = () => {
    const [searchOpen, setSearchOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(true)
    const navbar = [
        { path: '/', lebel: 'Home' },
        { path: '/', lebel: 'Menus' },
        { path: '/', lebel: 'Shops' },
        { path: '/', lebel: 'Contacts' },
        { path: '/', lebel: 'Blogs' },
    ]
    return (
      <div className="font-Fredoka md:px-14 py-4 shadow-md">
        {searchOpen && (
          <div className="absolute top-0 left-0  w-full bg-white text-center py-6 z-10 flex justify-center items-center ">
            <div className="relative w-[70%]  md:w-[60%] flex items-center  ">
              <input
                className="outline-none border-2 w-full py-2 px-3 border-black pe-10 md:pe-14"
                type="text"
                placeholder="Search"
              />{" "}
              <AiOutlineSearch
                className="absolute top-[10px] right-14"
                size={26}
              />
              <span
                onClick={() => setSearchOpen(false)}
                className="ms-4 cursor-pointer "
              >
                <AiOutlineClose size={23} />
              </span>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center bg-white   ">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="bolck md:hidden ps-4"
          >
            {isOpen ? (
              <AiOutlineMenu size={26} />
            ) : (
              <AiOutlineClose size={26} />
            )}
          </div>

          <span className="font-bold flex justify-center items-center text-4xl">
            <img className="w-[100px]" src="/logo.png" alt="" />
            Tasty<span className="text-pink">Drop</span>{" "}
          </span>

          <ul
            className={`flex md:flex-row font-semibold flex-col justify-center gap-8 lg:gap-12 z-40 md:z-0 ps-6 bg-white w-[90vw] md:w-1/2 border-t-4 border-pink md:border-none shadow-md md:shadow-none absolute md:static transition-all duration-300 rounded-e-xl top-[100px] md:top-0 py-4 ease-in ${
              !isOpen ? " left-0 " : "-left-[490px]"
            }`}
          >
            {navbar.map((i, index) => (
              <li className="text-lg" key={index}>
                <NavLink
                  to={i?.path}
                  className={({ isActive }) => (isActive ? "text-pink" : "")}
                >
                  {i?.lebel}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="relative text-pink flex items-center gap-2 md:gap-5 pe-4">
            <span className="hover:scale-125 transition-all duration-300">
              <AiOutlineSearch
                onClick={() => setSearchOpen(true)}
                className="cursor-pointer"
                size={26}
              />
            </span>
            <span className="cursor-pointer hover:scale-110 transition-all duration-300 ">
              <AiOutlineShoppingCart className="" size={26} />
            </span>
            <span className="lg:flex gap-4 hidden w-full">
              <Button colorRevert={false} label={"Login"} />
              <Button colorRevert={false} label={"Sign up"} />
            </span>
          </div>
        </div>
      </div>
    );
};

export default Header;