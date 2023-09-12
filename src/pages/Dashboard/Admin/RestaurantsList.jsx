import { useState } from "react";
import { useEffect } from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
export const RestaurantsList = () => {
  const cellAlignClass = "px-4 py-2 text-center align-middle";
  const [restaurants, setRestaurants] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteRestaurant, setDeleteRestaurant] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_LIVE_URL}restaurants`)
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, [restaurants]);

  // Function to toggle the modal and set the selected restaurant
  const toggleModal = (restaurant, action) => {
    if (action === "delete") {
      setDeleteRestaurant(restaurant);
      setIsDeleteModalOpen(!isDeleteModalOpen);
    } else {
      setSelectedRestaurant(restaurant);
      setIsModalOpen(!isModalOpen);
    }
  };

  const handleDeleteRestaurant = () => {
    if (deleteRestaurant) {
      fetch(
        `${import.meta.env.VITE_LIVE_URL}restaurants/${deleteRestaurant._id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => {
          if (res.status === 204) {
            console.log(`Restaurant with ID ${deleteRestaurant._id} deleted.`);
            setIsDeleteModalOpen(false);
          } else {
            console.error(
              `Error deleting restaurant with ID ${deleteRestaurant._id}`
            );
            setIsDeleteModalOpen(false);
          }
        })
        .catch((error) => {
          console.error("Error deleting restaurant:", error);
          setIsDeleteModalOpen(false);
        });
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className={cellAlignClass}>Image</th>
            <th className={cellAlignClass}>Restaurant Details</th>
            <th className={cellAlignClass}>Category</th>
            <th className={cellAlignClass}>Added Date</th>
            <th className={cellAlignClass}>Menu Items</th>
            <th className={cellAlignClass}>Status</th>
            <th className={cellAlignClass}>Actions</th>
            <th className={cellAlignClass}></th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((restaurant) => {
              return (
                <tr
                  key={restaurant._id}
                  className="border-b hover:bg-slate-200 opacity-75 hover:opacity-100"
                >
                  <td className={cellAlignClass}>
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                    </label>
                  </td>
                  <td className="px-4 py-2  align-middle">
                    <div className="flex items-center space-x-3">
                      <div className="w-24">
                        <img
                          src={restaurant.photo}
                          alt="name of dishes"
                          className="w-20 h-14 object-cover rounded"
                        />
                      </div>
                      <div>
                        <div className="font-bold w-40">
                          {restaurant.outletName}
                        </div>
                        <div>
                          {restaurant.firstName} {restaurant.lastName}
                        </div>
                        <div>contact: {restaurant.contactNumber}</div>
                        <div className="text-sm ">
                          <ReactStarsRating
                            className="flex"
                            isEdit={false}
                            size={16}
                            value={4}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className={cellAlignClass}>
                    <span className="">{restaurant?.RestaurantCategory}</span>
                  </td>
                  <td className={cellAlignClass}>24.8.2023</td>
                  <td className={cellAlignClass}>{restaurant.menu?.length}</td>

                  <td className={`${cellAlignClass}`}>
                    {" "}
                    <span
                      className={`p-1 text-white rounded-lg ${
                        restaurant?.status === "pending"
                          ? "bg-yellow"
                          : restaurant?.status === "approved"
                          ? "bg-green-400"
                          : "bg-red-400"
                      }`}
                    >
                      {restaurant?.status}
                    </span>
                  </td>
                  <td
                    className={`${cellAlignClass}} flex gap-2 justify-center items-center h-32`}
                  >
                    <span
                      onClick={() => toggleModal(restaurant)} // Pass the restaurant data to toggleModal
                      className="text-blue-500 hover:text-blue-700 cursor-pointer"
                    >
                      <AiOutlineEye />
                    </span>
                    <span
                      onClick={() => toggleModal(restaurant, "delete")}
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                    >
                      <AiOutlineDelete />
                    </span>
                  </td>
                  <td className={cellAlignClass}></td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {/* modal */}
      {isModalOpen && selectedRestaurant && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-800 bg-opacity-50 transition-opacity duration-300">
          <div className="bg-white p-8 rounded-lg shadow-lg w-4/5 md:w-3/5 lg:w-2/5">
            <h2 className="text-xl font-bold mb-4">
              {selectedRestaurant.outletName}
            </h2>
            <img
              src={selectedRestaurant.photo}
              alt="Restaurant Photo"
              className="w-32 h-32 mb-4 rounded-lg"
            />
            <p className="mb-2 text-gray-600">
              Category: {selectedRestaurant?.RestaurantCategory}
            </p>
            <p className="mb-2 text-gray-600">
              Contact: {selectedRestaurant.contactNumber}
            </p>
            <p className="mb-2 text-gray-600">
              Discount on Items: {selectedRestaurant.discountOnItems}%
            </p>
            <p className="mb-2 text-gray-600">
              Email: {selectedRestaurant.email}
            </p>
            <p className="mb-2 text-gray-600">
              Owner: {selectedRestaurant.firstName}{" "}
              {selectedRestaurant.lastName}
            </p>
            <p className="mb-2 text-gray-600">
              Location: {selectedRestaurant.locations?.division},{" "}
              {selectedRestaurant.locations?.district},{" "}
              {selectedRestaurant.locations?.upazila}
            </p>
            <p className="mb-2 text-gray-600">
              Total Menu Items: {selectedRestaurant.menu?.length}
            </p>
            <div className="text-sm mt-2">
              <ReactStarsRating
                className="flex"
                isEdit={false}
                size={24}
                value={4}
              />
            </div>
            <button
              onClick={toggleModal}
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* delete modal */}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && deleteRestaurant && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-800 bg-opacity-50 transition-opacity duration-300">
          <div className="bg-white p-8 rounded-lg shadow-lg w-4/5 md:w-3/5 lg:w-2/5">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p className="mb-4">
              Are you sure you want to delete this restaurant?
            </p>
            <div className="flex justify-end">
              <button
                onClick={handleDeleteRestaurant}
                className="mr-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-700 transition-colors duration-300"
              >
                Confirm
              </button>
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
