import { MdAccessTime } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
export const ManageRestaurantCard = ({
  restaurant,
  updateStatusAndSendToServer,
}) => {
  const {
    outletName,
    RestaurantCategory,
    contactNumber,
    discountOnItems,
    email,
    firstName,
    lastName,
    locations,
    photo,
    status,
    _id,
  } = restaurant || {};
  console.log(restaurant);
  return (
    <div className="bg-white shadow-lg rounded-lg my-4 p-6 flex flex-col space-y-4 dark-content">
      {/* Restaurant Header */}
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
            loading="lazy"
            src={photo}
            alt={outletName}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="text-xl font-semibold dark-title">{outletName}</div>
          <div className="text-gray-600 dark-text">{RestaurantCategory}</div>
        </div>
      </div>

      {/* Status and Description */}
      <div className="text-zinc-600 dark-text">
        {status === "pending" ? (
          "A restaurant has applied for approval to open on our platform. Please review the details below and take appropriate action."
        ) : status === "approved" ? (
          <span className="text-green-500">
            This restaurant is approved and ready to operate on our platform.
          </span>
        ) : (
          <span className="text-red-500">
            This restaurant is rejected, apply properly.
          </span>
        )}
      </div>

      {/* Restaurant Details */}
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <MdAccessTime className="text-xl text-gray-500 dark-icon" />
          <div className="dark-text">
            Submitted on: {new Date().toLocaleDateString()}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {status === "pending" ? (
            <>
              {" "}
              <RiErrorWarningLine className="text-xl text-red-500/50 dark-icon" />
              <span className="dark-text">Waiting for admin approval.</span>
            </>
          ) : status === "approved" ? (
            <>
              <FaCheckCircle className="text-green-500" />
              <span>This restaurant is approved.</span>
            </>
          ) : (
            <span className="text-red-500">This restaurant is rejected.</span>
          )}
        </div>

        <div className="flex gap-10">
          <div className="space-y-1">
            <div className="text-gray-700 font-semibold dark-title">
              Contact Information:
            </div>
            <p className=" text-zinc-500 dark-text">
              {firstName} {lastName}
            </p>
            <p className=" text-zinc-500  dark-text">Email: {email}</p>
            <p className=" text-zinc-500 dark-text">
              Contact Number: {contactNumber}
            </p>
          </div>
          <div className="space-y-1">
            <div className="text-gray-700 font-semibold dark-text">
              Location:
            </div>
            <div className="text-zinc-600  dark-text ">
              Division: {locations?.division}
            </div>
            <div className="text-zinc-600    dark-text">
              District: {locations?.district}
            </div>
            <div className="text-zinc-600  dark-text ">
              Upazila: {locations?.upazila}
            </div>
          </div>
        </div>
        <div>
          <div className="text-gray-700 font-semibold dark-title">
            Offering Discount:
          </div>
          <p className="text-zinc-500 text-sm pt-2 dark-text">
            {discountOnItems}% discount on items
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-12 items-center">
        {status === "pending" ? (
          <>
            <button
              className="px-4 py-2 rounded-md bg-green-500/90 text-white hover:bg-green-600 focus:outline-none"
              onClick={() => updateStatusAndSendToServer(_id, "approved")}
            >
              Approve
            </button>
            <button
              className="px-4 py-2 rounded-md bg-red-500/90 text-white hover:bg-red-600 focus:outline-none"
              onClick={() => updateStatusAndSendToServer(_id, "rejected")}
            >
              Reject
            </button>
          </>
        ) : status === "approved" ? (
          <span className="text-green-500 font-semibold">Approved</span>
        ) : (
          <span className="text-red-500 font-semibold">Rejected</span>
        )}
      </div>
    </div>
  );
};
