import { useState } from "react";
import { useEffect } from "react";
import { MdAccessTime } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
export const ManageRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [status, setStatus] = useState("pending"); // Set the desired status here

  useEffect(() => {
    fetch(`${import.meta.env.VITE_LIVE_URL}restaurants?status=${status}`)
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, [status]);
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant._id} restaurant={restaurant} />
      ))}
    </div>
  );
};
export const Restaurant = ({ restaurant }) => {
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
  } = restaurant;

  return (
    <div className="bg-white shadow-lg rounded-lg my-4 p-6 flex flex-col space-y-4">
      {/* Restaurant Header */}
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
            src={photo}
            alt={outletName}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="text-xl font-semibold">{outletName}</div>
          <div className="text-gray-600">{RestaurantCategory}</div>
        </div>
      </div>

      {/* Status and Description */}
      <div className="text-gray-600">
        {status === "pending"
          ? "A restaurant has applied for approval to open on our platform. Please review the details below and take appropriate action."
          : "This restaurant is approved and ready to operate on our platform."}
      </div>

      {/* Restaurant Details */}
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <MdAccessTime className="text-xl text-gray-500" />
          <div>Submitted on: {new Date().toLocaleDateString()}</div>
        </div>
        <div className="flex items-center space-x-2">
          <RiErrorWarningLine className="text-xl text-red-500" />
          <div>
            {status === "pending"
              ? "Waiting for admin approval."
              : "All information is verified"}
          </div>
        </div>
        <div className="flex gap-10">
          <div>
            <div className="text-gray-700 font-semibold">
              Contact Information:
            </div>
            <div>
              {firstName} {lastName}
            </div>
            <div>Email: {email}</div>
            <div>Contact Number: {contactNumber}</div>
          </div>
          <div>
            <div className="text-gray-700 font-semibold">Location:</div>
            <div>Division: {locations.division}</div>
            <div>District: {locations.district}</div>
            <div>Upazila: {locations.upazila}</div>
          </div>
        </div>
        <div>
          <div className="text-gray-700 font-semibold">Discount:</div>
          <div>{discountOnItems}% discount on items</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-12 items-center">
        {status === "pending" ? (
          <>
            <button className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 focus:outline-none">
              Approve
            </button>
            <button className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none">
              Reject
            </button>
          </>
        ) : (
          <span className="text-green-500 font-semibold">Approved</span>
        )}
      </div>
    </div>
  );
};
