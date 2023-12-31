import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoMdCreate, IoMdTrash } from "react-icons/io";
import axios from "axios";
import EditMenuItemModal from "../../../components/Dashboard/ManageMenuCompo/EditMenuItemModal";
import { toast } from "react-hot-toast";
import { useGetMenuItemQuery } from "../../../redux/feature/baseApi";
import useAuth from "../../../api/useAuth";
import MyModal from "../../../components/Modal/MyModal";
import EmptyState from "../../../components/Utils/EmptyState";
import emptyImg from "../../../assets/icon/res.svg";
import Spinner from "../../../components/Utils/Spinner";
const ManageMenu = () => {
  const { user } = useAuth();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const {
    currentData: menuItems,
    refetch,
    isLoading,
  } = useGetMenuItemQuery(`${user?.email}`, {
    refetchOnMountOrArgChange: true,
  });
  console.log(menuItems);

  // Deleting menu items from restaurant menu's
  console.log();
  // useEffect(()=>{
  //   if(isFetching){
  //     refetch()
  //   }
  // },[refetch,isFetching])
  const handleDeleteMenu = (id) => {
    axios
      .delete(
        `${import.meta.env.VITE_LIVE_URL}delete-menu-item/${user?.email}/${id}`
      )
      .then((res) => {
        console.log(res.data);
        if (res?.data?.deletedItem) {
          setIsDeleteModalOpen(false);
          toast.success("Menu item deleted!");
          refetch();
        }
      });
  };

  // State to handle dropdown state for each item
  const [menuOpen, setMenuOpen] = useState({});
  // state for getting a specific menu item when clicking the edit button
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const toggleDropdown = (index) => {
    setMenuOpen((prevMenuOpen) => ({
      ...prevMenuOpen,
      [index]: !prevMenuOpen[index],
    }));
  };

  // Controlling the modal state and getting singleMenuItem
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = (singleMenuItem) => {
    setSelectedMenuItem(singleMenuItem);
    setIsModalOpen(!isModalOpen);
  };

  // Delete Menu Modal
  const toggleDeleteModal = (items, action) => {
    if (action === "delete") {
      setIsDeleteModalOpen(!isDeleteModalOpen);
      setSelectedMenuItem(items);
    } else {
      return;
    }
  };

  return (
    <>
      <div className="sm:px-4 w-full">
        <div className="py-4 md:py-5">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-black/80 dark-title">
            Menu Items
          </p>
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="bg-white py-4 md:py-3 px-4 md:px-8 xl:px-10 dark-content">
              {/* Always try to use optional chaining or optional rendering*/}
              {menuItems &&
              Array.isArray(menuItems) &&
              menuItems?.length > 0 ? (
                <>
                  <table className="w-full overflow-x-auto mt-7 whitespace-nowrap">
                    <thead className="bg-gray dark:bg-zinc-900">
                      <tr className="text-left text-sm text-black/80">
                        <th className="py-3 px-4 dark-title">Product</th>
                        <th className="py-3 px-4 dark-title">Category</th>
                        <th className="py-3 px-4 dark-title">Added Date</th>
                        <th className="py-3 px-4 dark-title">Price</th>
                        <th className="py-3 px-4 dark-title">Status</th>
                        <th className="py-3 px-4 dark-title">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {menuItems?.map((items, i) => (
                        <Fragment key={i}>
                          <tr className="">
                            <td className="py-4 whitespace-no-wrap border-b dark:border-zinc-600  border-gray">
                              <div className="flex items-center ">
                                <div>
                                  <div className="text-sm leading-5 text-indigo-500">
                                    <img loading="lazy"
                                      className="w-20 h-14 object-cover rounded-md"
                                      src={items.menuItemImage}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-4 whitespace-no-wrap border-b dark:border-zinc-600  border-gray">
                              <div className="text-sm leading-5 text-black/80 dark-text">
                                {items.menuCategory}
                              </div>
                            </td>
                            <td className="px-4 py-4 whitespace-no-wrap border-b dark:border-zinc-600  text-black/80 border-gray text-sm leading-5 dark-text">
                              {items.menuPostedDate}
                            </td>
                            <td className="px-4 py-4 whitespace-no-wrap border-b dark:border-zinc-600  text-black/80 border-gray text-sm leading-5 dark-text">
                              Tk {items.menuItemPrice}
                            </td>
                            <td className="px-4 py-4 whitespace-no-wrap border-b dark:border-zinc-600  border-gray text-black/80 text-sm leading-5">
                              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span
                                  aria-hidden
                                  className="absolute inset-0 bg-purple-200 opacity-50 rounded-full"></span>
                                <span className="relative text-xs dark-text">
                                  active
                                </span>
                              </span>
                            </td>
                            <td
                              onClick={() => toggleDropdown(i)}
                              className="px-7 py-4 relative whitespace-no-wrap cursor-pointer border-b dark:border-zinc-600  border-gray text-sm leading-5">
                              <Menu
                                as={"div"}
                                className="relative inline-block text-left">
                                <Menu.Button className="inline-flex items-center">
                                  <BsThreeDots
                                    className="text-slate-400 hover:scale-110 duration-300"
                                    size={20}></BsThreeDots>
                                </Menu.Button>

                                {/* Dropdown menu */}

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95">
                                  <Menu.Items className="absolute right-0 z-50 mt-2 w-40 origin-top-right divide-y divide-gray rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="px-1 py-1">
                                      <Menu.Item>
                                        {({ active }) => (
                                          <button
                                            onClick={() => toggleModal(items)}
                                            className={`${
                                              active
                                                ? "bg-violet-400 text-white"
                                                : "text-gray-900"
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                            {active ? (
                                              <span className="flex items-center gap-1">
                                                <IoMdCreate className="text-white text-lg"></IoMdCreate>
                                                Edit
                                              </span>
                                            ) : (
                                              <span className="flex items-center gap-1">
                                                <IoMdCreate className="text-red-400 text-lg"></IoMdCreate>
                                                Edit
                                              </span>
                                            )}
                                          </button>
                                        )}
                                      </Menu.Item>
                                    </div>
                                    <div className="px-1 py-1">
                                      <Menu.Item>
                                        {({ active }) => (
                                          <button
                                            onClick={() =>
                                              toggleDeleteModal(items, "delete")
                                            }
                                            className={`${
                                              active
                                                ? "bg-violet-400 text-white"
                                                : "text-gray-900"
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                            {active ? (
                                              <span className="flex items-center gap-1">
                                                <IoMdTrash className="text-white text-lg"></IoMdTrash>
                                                Delete
                                              </span>
                                            ) : (
                                              <span className="flex items-center gap-1">
                                                <IoMdTrash className="text-red-400 text-lg"></IoMdTrash>
                                                Delete
                                              </span>
                                            )}
                                          </button>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </td>
                          </tr>
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                </>
              ) : (
                <EmptyState
                  imageSrc={emptyImg}
                  text={"No Menu Items"}
                  message={"You have'nt added any menu yet!"}
                />
              )}
            </div>
          </>
        )}
      </div>
      <EditMenuItemModal
        refetch={refetch}
        isTheModalOpen={isModalOpen}
        menuItem={selectedMenuItem}
        onClose={toggleModal}
      />
      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <MyModal isOpen={isDeleteModalOpen} closeModal={toggleDeleteModal}>
          <div className=" py-2">
            <h2 className="text-xl font-bold mb-4 dark-title">
              Confirm Delete
            </h2>
            <p className="mb-4 dark-title">
              Are you sure you want to delete this menu ?
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => handleDeleteMenu(selectedMenuItem?._id)}
                className="mr-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-700 transition-colors duration-300">
                Confirm
              </button>
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
                Cancel
              </button>
            </div>
          </div>
        </MyModal>
      )}
    </>
  );
};

export default ManageMenu;
