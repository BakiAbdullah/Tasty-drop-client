import { useState } from "react";
import { useEffect } from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import { AiOutlineEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import MyModal from "../../../components/Modal/MyModal";
import Pagination from "../../../components/Dashboard/Pagination/Pagination";
import {
  useDeleteRestaurantMutation,
  useGetAllRestaurantQuery,
} from "../../../redux/reduxApi/restaurantApi";
export const RestaurantsList = () => {
  // Reusable classes
  const { data: restaurants, refetch, isLoading } = useGetAllRestaurantQuery();
  const [removeRestaurant, { isLoading: deleteLoading }] =
    useDeleteRestaurantMutation();
  const cellAlignClass = "py-3 px-4 text-left text-sm";
  const contentAlignClass = "px-4 py-4 whitespace-no-wrap border-b border-gray";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteRestaurant, setDeleteRestaurant] = useState(null);

  // Pagination
  const RestaurantsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

  const handleDeleteRestaurant = async () => {
    if (deleteRestaurant) {
      await removeRestaurant(deleteRestaurant._id);
      refetch();
      setIsDeleteModalOpen(false);
    }
  };

  return (
    <div className=" w-full overflow-x-auto">
      <div className="py-4 md:py-5">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-black/80">
          Restaurant List
        </p>
      </div>

      <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
        <div className="sm:flex items-center justify-between">
          <div className="flex items-center">
            <a
              className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800"
              href=" javascript:void(0)">
              <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                <p>All</p>
              </div>
            </a>
            <a
              className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
              href="javascript:void(0)">
              <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                <p>Done</p>
              </div>
            </a>
            <a
              className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
              href="javascript:void(0)">
              <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                <p>Pending</p>
              </div>
            </a>
          </div>
        </div>
        <table className="w-full relative overflow-x-auto mt-7 whitespace-nowrap">
          <thead className="bg-gray">
            <tr className="text-left text-sm text-black/80">
              <th className={cellAlignClass}>Image</th>
              <th className={cellAlignClass}>Restaurant Details</th>
              <th className={cellAlignClass}>Category</th>
              <th className={cellAlignClass}>Added Date</th>
              <th className={cellAlignClass}>Menu Items</th>
              {/* <th className={cellAlignClass}>Status</th> */}
              <th className={cellAlignClass}>Actions</th>
              <th className={cellAlignClass}></th>
            </tr>
          </thead>
          <tbody>
            {restaurants &&
              Array.isArray(restaurants) &&
              restaurants.length > 0 &&
              restaurants
                .slice(
                  (currentPage - 1) * RestaurantsPerPage,
                  currentPage * RestaurantsPerPage
                )
                .map((restaurant) => {
                  return (
                    <tr className="text-black/80" key={restaurant._id}>
                      <td className={contentAlignClass}>
                        <div className="flex items-center ">
                          <div>
                            <div className="text-sm leading-5 text-indigo-500">
                              <img
                                className="w-24 h-16 object-cover rounded-md"
                                src={restaurant.photo}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className={contentAlignClass}>
                        <div className="flex items-center space-x-3">
                          <div>
                            <div className="font-bold w-40">
                              {restaurant.outletName}
                            </div>
                            <h1 className="text-[15px] font-semibold">
                              {restaurant.firstName} {restaurant.lastName}
                            </h1>
                            <p className="text-sm text-zinc-500">
                              contact: {restaurant.contactNumber}
                            </p>
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

                      <td className={contentAlignClass}>
                        <div className="text-sm leading-5 text-black/80">
                          {restaurant?.RestaurantCategory}
                        </div>
                      </td>
                      <td className={contentAlignClass}>{restaurant.date}</td>
                      <td className="pl-12 py-4 whitespace-no-wrap border-b border-gray">
                        {restaurant.menu?.length}
                      </td>

                      {/* <td className={contentAlignClass}>
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          className={`absolute inset-0 ${
                            restaurant?.status === "pending"
                              ? "bg-yellow"
                              : restaurant?.status === "approved"
                              ? "bg-green-400"
                              : "bg-red-400"
                          } opacity-50 rounded-full`}></span>
                        <span className="relative text-xs">
                          {restaurant?.status}
                        </span>
                      </span>
                    </td> */}
                      <td
                        className={`${contentAlignClass} flex gap-2 justify-center items-center h-32`}>
                        <span
                          title="View Restaurant"
                          onClick={() => toggleModal(restaurant)} // Pass the restaurant data to toggleModal
                          className="text-blue-500 hover:text-blue-700 cursor-pointer">
                          <AiOutlineEye size={17} />
                        </span>
                        <span
                          title="Delete Restaurant"
                          onClick={() => toggleModal(restaurant, "delete")}
                          className="text-red-500 hover:text-red-600 cursor-pointer">
                          <FaTrashAlt size={15} />
                        </span>
                      </td>
                      <td></td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>

      {/* modal */}
      {isModalOpen && selectedRestaurant && (
        <>
          <MyModal isOpen={isModalOpen} closeModal={toggleModal}>
            <div className=" space-y-3 text-sm text-zinc-600">
              <h2 className="text-2xl font-bold text-pink mb-4">
                {selectedRestaurant.outletName}
              </h2>
              <img
                src={selectedRestaurant.photo}
                alt="Restaurant Photo"
                className="h-52 mb-4 w-full rounded-lg"
              />
              <p>Category: {selectedRestaurant?.RestaurantCategory}</p>
              <p>Contact: {selectedRestaurant.contactNumber}</p>
              <p>Discount on Items: {selectedRestaurant.discountOnItems}%</p>
              <p>Email: {selectedRestaurant.email}</p>
              <p>
                Owner: {selectedRestaurant.firstName}{" "}
                {selectedRestaurant.lastName}
              </p>
              <p>
                Location: {selectedRestaurant.locations?.division},{" "}
                {selectedRestaurant.locations?.district},{" "}
                {selectedRestaurant.locations?.upazila}
              </p>
              <p>Total Menu Items: {selectedRestaurant.menu?.length}</p>
              <div className="text-sm mt-2">
                <ReactStarsRating
                  className="flex"
                  isEdit={false}
                  size={20}
                  value={4}
                />
              </div>
              <button
                onClick={toggleModal}
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
                Close
              </button>
            </div>
          </MyModal>
        </>
      )}

      {/* delete modal */}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && deleteRestaurant && (
        <MyModal isOpen={isDeleteModalOpen} closeModal={toggleModal}>
          <div className="bg-white">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p className="mb-4">
              Are you sure you want to delete this restaurant?
            </p>
            <div className="flex justify-end">
              <button
                onClick={handleDeleteRestaurant}
                className="mr-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-700 transition-colors duration-300">
                {deleteLoading ? "Deleting..." : "Delete"}
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

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(restaurants?.length / RestaurantsPerPage)}
        onPageChange={paginate}></Pagination>
    </div>
  );
};
