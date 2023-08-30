import { MdRestaurantMenu, MdAccessTime, MdCheckCircle } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
export const ManageRestaurant = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <MdRestaurantMenu className="text-3xl text-blue-500" />
        <div className="text-xl font-semibold">Restaurant Name</div>
      </div>
      <div className="text-gray-600">
        A restaurant has applied for approval to open on our platform. Please
        review the details below and take appropriate action.
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <MdAccessTime className="text-xl text-gray-500" />
          <div>Submitted on: July 28, 2023</div>
        </div>
        <div className="flex items-center space-x-2">
          <MdCheckCircle className="text-xl text-green-500" />
          <div>Documents Verified</div>
        </div>
        <div className="flex items-center space-x-2">
          <RiErrorWarningLine className="text-xl text-red-500" />
          <div>Some information needs verification</div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 focus:outline-none">
          Approve
        </button>
        <button className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none">
          Reject
        </button>
        <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none">
          Request More Info
        </button>
      </div>
    </div>
  );
};
