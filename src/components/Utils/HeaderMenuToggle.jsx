import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  FaUserFriends,
  FaUtensils,
  FaBriefcase,
  FaChevronDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const menuOptions = [
  { icon: FaUserFriends, label: "Riders", path: "riders" },
  { icon: FaUtensils, label: "Restaurant", path: "restaurant" },
  { icon: FaBriefcase, label: "Careers", path: "careers" },
];

export default function MenuToggle() {
  return (
    <div className="lg:w-56  w-full lg:text-right ">
      <Menu as="div" className="relative inline-block ">
        <div>
          <Menu.Button className="inline-flex w-full items-center  rounded-lg bg-black/30 backdrop-blur-sm  text-white px-2 lg:px-4  py-[10px]  font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Partner with us
            <FaChevronDown
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-0 mt-2 lg:w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {menuOptions.map(({ icon: Icon, label, path }) => (
              <div key={label} className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={`/${path}`}
                      className={`${
                        active ? "bg-orange-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                      <Icon className="mr-2 h-5 w-5" />
                      {label}
                    </Link>
                  )}
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
