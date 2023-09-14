import useUsers from "../../../Hooks/useUsers";
import { FaTrashAlt } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
import { MdAdminPanelSettings, MdOutlineDirectionsBike } from "react-icons/md";
export const ManageUsers = () => {
  // const allCustomers = getAllCustomers();
  const { usersData } = useUsers();
  console.log(usersData);
  // Reusable classes
  const cellAlignClass = "py-3 px-4 text-left text-sm";
  const contentAlignClass = "px-4 py-4 whitespace-no-wrap border-b border-gray";

  const handleDeleteUser = (email) =>{
    
  }

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
            {usersData?.map((d, i) => (
              <tr key={i} className="text-center hover:bg-gray">
                <td className=" py-4  border-b border-gray">{i + 1}</td>
                <td className={contentAlignClass}>
                  <img
                    className="rounded-full object-cover h-10 w-10"
                    src={d.imgUrl}
                    alt="userImage"
                  />
                </td>

                <td className=" py-4  border-b border-gray">{d.name}</td>
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
                <td className="py-4  border-b border-gray">
                  <div className="flex justify-center items-center gap-4">
                    <MdAdminPanelSettings
                      title="Make Admin"
                      size={23}
                      className="cursor-pointer text-cyan-700 hover:text-cyan-600"
                    />
                    <MdOutlineDirectionsBike
                      title="Make Rider"
                      size={22}
                      className="cursor-pointer text-pink"
                    />
                    <RiUserStarFill
                      title="Make Partner"
                      size={20}
                      className="cursor-pointer text-cyan-700 hover:text-cyan-600"
                    />
                  </div>
                </td>
                <td className="pl-12 py-4 border-b border-gray">
                  <div onClick={()=>handleDeleteUser(d?.email)} className="text-red-500 hover:text-red-700 text-center cursor-pointer">
                    <FaTrashAlt size={16} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ManageUsers;
