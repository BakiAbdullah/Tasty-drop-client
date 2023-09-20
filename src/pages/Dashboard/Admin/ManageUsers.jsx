import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
import { MdAdminPanelSettings, MdOutlineDirectionsBike } from "react-icons/md";
import { FiLoader } from "react-icons/fi";
import MyModal from "../../../components/Modal/MyModal";
import Pagination from "../../../components/Dashboard/Pagination/Pagination";
import Spinner from "../../../components/Utils/Spinner";
import useUsers from "../../../Hooks/useUsers";
import toast from "react-hot-toast";
import {
  useDeleteUserMutation,
  useUpdateProfileMutation,
} from "../../../redux/reduxApi/userApi";

const ManageUsers = () => {
  const { usersData: users, refetch, isLoading: loading } = useUsers();
  const [updateUserRole, { isLoading: updateUserLoading }] =
    useUpdateProfileMutation();
  const [deleteUser] = useDeleteUserMutation();

  // Pagination
  const usersPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Reusable classes
  const cellAlignClass = "py-3 px-4 text-left text-sm";
  const contentAlignClass =
    "px-4 py-4 whitespace-no-wrap border-b border-gray dark:border-zinc-600";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");

  const openModal = (action, user) => {
    setSelectedAction(action);
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const toggleModal = (user, action) => {
    if (action === "delete") {
      setIsDeleteModalOpen(!isDeleteModalOpen);
      setSelectedUser(user);
    } else {
      return;
    }
  };

  const handleConfirm = () => {
    if (!selectedUser || !selectedUser.email || !selectedAction) {
      return;
    }

    // Update user Role
    updateUserRole({
      email: selectedUser.email,
      data: { role: selectedAction },
    }).then(() => {
      toast.success(`User role updated to ${selectedAction}`);
      refetch();
      setIsModalOpen(false);
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleUserDelete = (email) => {
    deleteUser({ email }).then((res) => {
      if (res.data.deletedCount > 0) {
        setIsDeleteModalOpen(false);
        refetch();
        toast.success(`User deleted!`);
      }
    });
  };

  // Filter users based on search term and role
  const filteredUsers = users
    ?.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterRole === "all" || user.role === filterRole)
    )
    .slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);

  return (
    <div className="sm:px-4 w-full overflow-x-auto">
      <div className="py-4 md:py-5">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-black/80 dark-title">
          Users List
        </p>
      </div>

      <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10 dark-content">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="mb-3 flex items-center">
              <input
                type="text"
                placeholder="Search by name"
                className="py-2 px-3 dark-input w-1/4 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-300 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                className="block ml-2 p-2 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-300 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-600 dark-input"
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}>
                <option value="all">All</option>
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
                <option value="rider">Rider</option>
                <option value="partner">Partner</option>
              </select>
            </div>

            <table className=" mt-5 w-full bg-white dark-content">
              <thead className="bg-gray dark:bg-zinc-900">
                <tr className="text-left text-sm text-black/80">
                  <th className={cellAlignClass}>
                    <span className="dark-title">#</span>
                  </th>
                  <th className={cellAlignClass}>
                    <span className="dark-title">Image</span>
                  </th>
                  <th className="py-3 px-4 text-center text-sm dark-title">
                    Name
                  </th>
                  <th className="py-3 text-center text-sm dark-title">Email</th>
                  <th className="py-3 px-4 text-center text-sm dark-title">
                    Role
                  </th>
                  <th className="py-3 px-4 text-center text-sm dark-title">
                    Promote User
                  </th>
                  <th className="py-3 px-4 text-center text-sm">
                    <span className="dark-title">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, i) => (
                  <tr
                    key={i}
                    className="text-center hover:bg-gray hover:dark:bg-zinc-900">
                    <td className="py-4 border-b border-gray dark-text dark:border-zinc-600">
                      {i + 1}
                    </td>
                    <td className={contentAlignClass}>
                      <img
                        className="rounded-full object-cover h-10 w-10"
                        src={user.imgUrl}
                        alt="userImage"
                      />
                    </td>

                    <td className="py-4 border-b border-gray dark:border-zinc-600 text-zinc-700 text-[15px] dark-text">
                      {user.name}
                    </td>
                    <td className="py-4 whitespace-no-wrap border-b border-gray dark:border-zinc-600 text-sm text-zinc-600 dark-text">
                      {user.email}
                    </td>
                    <td className={contentAlignClass}>
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          className={`absolute inset-0  ${
                            user?.role === "rider"
                              ? "bg-green-500/50 "
                              : user?.role === "admin"
                              ? "bg-pink/50 "
                              : user?.role === "customer"
                              ? "bg-blue-500/50 "
                              : "bg-yellow"
                          } opacity-50 rounded-full`}></span>
                        <span className="relative text-xs dark-text">
                          {user?.role.charAt(0).toUpperCase() +
                            user?.role.slice(1).toLowerCase()}
                        </span>
                      </span>
                    </td>
                    <td className="py-4 border-b border-gray dark:border-zinc-600">
                      <div className="flex justify-center items-center gap-4">
                        <MdAdminPanelSettings
                          title="Make Admin"
                          size={30}
                          className="cursor-pointer bg-purple-300/20 dark:bg-black/50 shadow-sm hover:scale-105 duration-300  rounded-md p-1 text-cyan-700 hover:text-cyan-600"
                          onClick={() => openModal("admin", user)}
                        />
                        <MdOutlineDirectionsBike
                          title="Make Rider"
                          size={29}
                          className="cursor-pointer bg-red-100 dark:bg-black/50 shadow-sm hover:scale-105 duration-300  rounded-md p-1 text-pink"
                          onClick={() => openModal("rider", user)}
                        />
                        <RiUserStarFill
                          title="Make Partner"
                          size={29}
                          className="cursor-pointer bg-purple-300/20 dark:bg-black/50 shadow-sm hover:scale-105 duration-300  rounded-md p-1 text-cyan-700 hover:text-cyan-600"
                          onClick={() => openModal("partner", user)}
                        />
                      </div>
                    </td>
                    <td
                      onClick={() => toggleModal(user, "delete")}
                      className="pl-12 border-b border-gray dark:border-zinc-600">
                      <div className="text-red-500 hover:text-red-700 text-center cursor-pointer">
                        <FaTrashAlt size={16} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {/* Delete Confirmation Modal */}
        {isDeleteModalOpen && (
          <MyModal isOpen={isDeleteModalOpen} closeModal={toggleModal}>
            <div className=" py-2">
              <h2 className="text-xl font-bold mb-4 dark-title">
                Confirm Delete
              </h2>
              <p className="mb-4 dark-title">
                Are you sure you want to delete{" "}
                <span>{selectedUser?.email}</span> ?
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => handleUserDelete(selectedUser?.email)}
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

        {/* Role Change Confirmation Modal */}
        {isModalOpen && selectedUser && (
          <MyModal isOpen={isModalOpen} closeModal={toggleModal}>
            <div className=" ">
              <h2 className="text-xl font-bold mb-4 dark-title">
                Confirm {selectedAction} for {selectedUser.name}
              </h2>
              <p className="mb-4 dark-title">
                Are you sure you want to {selectedAction.toLowerCase()}{" "}
                {selectedUser.email}?
              </p>
              <div className="flex justify-end mt-4">
                <button
                  disabled={updateUserLoading}
                  type="submit"
                  onClick={handleConfirm}
                  className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-700 transition-colors duration-300 mr-4">
                  {updateUserLoading ? (
                    <FiLoader
                      className="animate-spin m-auto text-white "
                      size={24}
                    />
                  ) : (
                    "Confirm"
                  )}
                </button>
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
                  Cancel
                </button>
              </div>
            </div>
          </MyModal>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(users.length / usersPerPage)}
        onPageChange={paginate}></Pagination>
    </div>
  );
};

export default ManageUsers;
