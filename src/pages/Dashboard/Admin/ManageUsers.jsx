// import getAllCustomers from "../../../api/users";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import useUsers from "../../../Hooks/useUsers";

export const ManageUsers = () => {
  // const allCustomers = getAllCustomers();
  const { usersData } = useUsers();
  console.log(usersData);

  return (
    <div className=" bg-white p-5 ">
      <h1 className="text-lg text-slate-500">Customer List </h1>
      <hr className="border border-slate-200 mt-3" />
      <table className=" mt-5 w-full">
        <thead>
          <tr className="bg-orange-500 text-white text-start">
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {usersData?.map((d, i) => (
            <tr key={i} className="text-center hover:bg-gray">
              <td className="py-4">{i + 1}</td>
              <td className="flex items-center py-4 gap-2 justify-center">
                <img
                  className="rounded-full object-cover h-10 w-10"
                  src={d.imgUrl}
                  alt="userImage"
                />
              </td>
              <td>{d.email}</td>
              <td>{d.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ManageUsers;
