import useUsers from "../../../Hooks/useUsers";
import { FaTrashAlt } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
import { MdAdminPanelSettings, MdOutlineDirectionsBike } from "react-icons/md";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  useDeleteUserMutation,
  useUpdateProfileMutation,
} from "../../../redux/reduxApi/userApi";
import { FiLoader } from "react-icons/fi";
const ManageUsers = () => {
  // const allCustomers = getAllCustomers();
  const { usersData, refetch } = useUsers();
  const [updateUserRole, { isLoading }] = useUpdateProfileMutation();
  const [deleteUser] = useDeleteUserMutation();
  // Reusable classes
  const cellAlignClass = "py-3 px-4 text-left text-sm";
  const contentAlignClass = "px-4 py-4 whitespace-no-wrap border-b border-gray";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const openModal = (action, user) => {
    setSelectedAction(action);
    setSelectedUser(user);
    setIsModalOpen(true);
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

  // Delete user
  const handleUserDelete = (email) => {
    deleteUser({ email }).then((res) => {
      if (res.data.deletedCount > 0) {
        refetch();
        toast.success(`User deleted!`);
      }
    });
  };
  return (
    <div className="sm:px-4 w-full overflow-x-auto">
      <div className="py-4 md:py-5">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-black/80">
          Users List
        </p>
      </div>
      <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
        <table className=" mt-5 w-full">
          <thead className="bg-gray">
            <tr className="text-left text-sm text-black/80">
              <th className={cellAlignClass}>#</th>
              <th className={cellAlignClass}>Image</th>
              <th className="py-3 px-4 text-center text-sm">Name</th>
              <th className="py-3 text-center text-sm">Email</th>
              <th className="py-3 px-4 text-center text-sm">Role</th>
              <th className="py-3 px-4 text-center text-sm">Promote User</th>
              <th className="py-3 px-4 text-center text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((d, i) => (
              <tr key={i} className="text-center hover:bg-gray">
                <td className="py-4 border-b border-gray">{i + 1}</td>
                <td className={contentAlignClass}>
                  <img
                    className="rounded-full object-cover h-10 w-10"
                    src={d.imgUrl}
                    alt="userImage"
                  />
                </td>

                <td className="py-4 border-b border-gray">{d.name}</td>
                <td className="py-4 whitespace-no-wrap border-b border-gray">
                  {d.email}
                </td>
                <td className={contentAlignClass}>
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      className={`absolute inset-0 ${
                        d?.role === "rider"
                          ? "bg-pink/50"
                          : d?.role === "Admin"
                          ? "bg-cyan-700/50"
                          : d?.role === "customer"
                          ? "bg-lightYellow"
                          : "bg-cyan-700/50"
                      } opacity-50 rounded-full`}
                    ></span>
                    <span className="relative text-xs">{d?.role}</span>
                  </span>
                </td>
                <td className="py-4 border-b border-gray">
                  <div className="flex justify-center items-center gap-4">
                    <MdAdminPanelSettings
                      title="Make Admin"
                      size={30}
                      className="cursor-pointer bg-purple-300/20 shadow-sm hover:scale-105 duration-300  rounded-md p-1 text-cyan-700 hover:text-cyan-600"
                      onClick={() => openModal("admin", d)}
                    />
                    <MdOutlineDirectionsBike
                      title="Make Rider"
                      size={29}
                      className="cursor-pointer bg-red-100 shadow-sm hover:scale-105 duration-300  rounded-md p-1 text-pink"
                      onClick={() => openModal("rider", d)}
                    />
                    <RiUserStarFill
                      title="Make Partner"
                      size={29}
                      className="cursor-pointer bg-purple-300/20 shadow-sm hover:scale-105 duration-300  rounded-md p-1 text-cyan-700 hover:text-cyan-600"
                      onClick={() => openModal("partner", d)}
                    />
                  </div>
                </td>
                <td
                  onClick={() => handleUserDelete(d?.email)}
                  className="pl-12 border-b border-gray">
                  <div className="text-red-500 hover:text-red-700 text-center cursor-pointer">
                    <FaTrashAlt size={16} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal */}
        {isModalOpen && selectedUser && (
          <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-800 bg-opacity-50 transition-opacity duration-300">
            <div className="bg-white p-8 rounded-lg shadow-lg w-4/5 md:w-3/5 lg:w-2/5">
              <h2 className="text-xl font-bold mb-4">
                Confirm {selectedAction} for {selectedUser.name}
              </h2>
              <p className="mb-4">
                Are you sure you want to {selectedAction.toLowerCase()}{" "}
                {selectedUser.email}?
              </p>
              <div className="flex justify-end mt-4">
                <button
                  disabled={isLoading}
                  type="submit"
                  onClick={handleConfirm}
                  className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-700 transition-colors duration-300 mr-4"
                >
                  {isLoading ? (
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
                  className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ManageUsers;
