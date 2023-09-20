import { useState } from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import { AiOutlineSearch, AiOutlineEye, AiOutlineDelete } from "react-icons/ai";
import MyModal from "../../../components/Modal/MyModal";
import Pagination from "../../../components/Dashboard/Pagination/Pagination";
import {
  useDeleteRestaurantMutation,
  useGetAllRestaurantQuery,
} from "../../../redux/reduxApi/restaurantApi";
import Spinner from "../../../components/Utils/Spinner";
import {
  FaTimes,
  FaStar,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdCategory, MdDiscount } from "react-icons/md";

export const RestaurantsList = () => {
  // Reusable classes
  const { data: restaurants, refetch, isLoading } = useGetAllRestaurantQuery();
  const [removeRestaurant, { isLoading: deleteLoading }] =
    useDeleteRestaurantMutation();
  const cellAlignClass = "py-3 px-4 text-left text-sm dark-title";
  const contentAlignClass =
    "px-4 py-4 whitespace-no-wrap border-b border-gray dark:border-zinc-600";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteRestaurant, setDeleteRestaurant] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Add search query state

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

  // Filter restaurants based on search query
  const filteredRestaurants = restaurants?.filter((restaurant) =>
    restaurant.outletName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full overflow-x-auto">
      <div className="py-4 md:py-5">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-black/80 dark-text">
          Restaurant List
        </p>
      </div>

      <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10 dark-content">
        {/* Search input */}
        <div className="mb-4">
          <div className="relative rounded-md shadow-sm">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <AiOutlineSearch className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-2 focus:ring-pink focus:border-yellow block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Search restaurant by name"
            />
          </div>
        </div>

        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <table className="w-full relative overflow-x-auto mt-7 whitespace-nowrap bg-white dark-content">
              <thead className="bg-gray dark:bg-zinc-900">
                <tr className="text-left text-sm text-black/80">
                  <th className={cellAlignClass}>Image</th>
                  <th className={cellAlignClass}>Restaurant Details</th>
                  <th className={cellAlignClass}>Category</th>
                  <th className={cellAlignClass}>Added Date</th>
                  <th className={cellAlignClass}>Menu Items</th>

                  <th className={cellAlignClass}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRestaurants?.length > 0 ? (
                  filteredRestaurants
                    .slice(
                      (currentPage - 1) * RestaurantsPerPage,
                      currentPage * RestaurantsPerPage
                    )
                    .map((restaurant) => (
                      <tr className="text-black/80" key={restaurant._id}>
                        <td className={contentAlignClass}>
                          <div className="flex items-center">
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
                              <div className="font-bold w-40 dark-title">
                                {restaurant.outletName}
                              </div>
                              <h1 className="text-[15px] font-semibold dark-text">
                                {restaurant.firstName} {restaurant.lastName}
                              </h1>
                              <p className="text-sm text-zinc-500 dark-text">
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
                          <div className="text-sm leading-5 text-black/80 dark-text">
                            {restaurant?.RestaurantCategory}
                          </div>
                        </td>
                        <td className={contentAlignClass}>
                          <div className="dark-text">{restaurant.date}</div>
                        </td>
                        <td className="pl-12 py-4 whitespace-no-wrap border-b border-gray dark:border-zinc-600 dark-text">
                          {restaurant.menu ? restaurant.menu.length : 0}
                        </td>

                        <td
                          className={`${contentAlignClass} flex gap-2 justify-center items-center h-32 `}
                        >
                          <span
                            title="View Restaurant"
                            onClick={() => toggleModal(restaurant)}
                            className="text-blue-500 hover:text-blue-700 cursor-pointer"
                          >
                            <AiOutlineEye size={20} />
                          </span>
                          <span
                            title="Delete Restaurant"
                            onClick={() => toggleModal(restaurant, "delete")}
                            className="text-red-500 hover:text-red-600 cursor-pointer"
                          >
                            <AiOutlineDelete size={18} />
                          </span>
                        </td>
                      </tr>
                    ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center">
                      No restaurants found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </>
        )}
      </div>

      {/* modal */}
      {isModalOpen && selectedRestaurant && (
        <MyModal isOpen={isModalOpen} closeModal={toggleModal}>
          <div className="space-y-4 text-sm text-gray-800 dark:text-white">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-pink">
                {selectedRestaurant.outletName}
              </h2>
              <button
                onClick={toggleModal}
                className="hover:text-darkPink focus:outline-none"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <img
              src={selectedRestaurant.photo}
              alt="Restaurant Photo"
              className="h-60 w-full rounded-lg object-cover"
            />
            <p className="flex">
              <MdCategory size={20} />
              <span className="font-semibold ml-2">Category:</span>{" "}
              {selectedRestaurant?.RestaurantCategory}
            </p>
            {selectedRestaurant?.discountOnItems?.value && (
              <p className="flex">
                <FaPhoneAlt size={20} />
                <span className="font-semibold ml-2">Contact:</span>{" "}
                {selectedRestaurant.contactNumber}
              </p>
            )}

            <p className="flex">
              <MdDiscount size={20} />
              <span className="font-semibold">Discount on Items:</span>{" "}
              {selectedRestaurant?.discountOnItems?.value}%
            </p>
            <p className="flex">
              <FaEnvelope size={20} />
              <span className="font-semibold ml-2">Email:</span>{" "}
              <a
                href={`mailto:${selectedRestaurant.email}`}
                className=" hover:underline text-pink"
              >
                {selectedRestaurant.email}
              </a>
            </p>
            <p className="flex">
              <FaMapMarkerAlt size={20} />
              <span className="font-semibold ml-2">Location:</span>{" "}
              {selectedRestaurant.locations?.division},{" "}
              {selectedRestaurant.locations?.district},{" "}
              {selectedRestaurant.locations?.upazila}
            </p>
            <p>
              <span className="font-semibold">Total Menu Items:</span>{" "}
              {selectedRestaurant.menu?.length}
            </p>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} size={20} className="text-yellow-400" />
              ))}
            </div>
            <button
              onClick={toggleModal}
              className="w-full py-2 bg-pink text-white rounded-full hover:bg-darkPink transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </MyModal>
      )}

      {/* delete modal */}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && deleteRestaurant && (
        <MyModal isOpen={isDeleteModalOpen} closeModal={toggleModal}>
          <div className="">
            <h2 className="text-xl font-bold mb-4  dark-title">
              Confirm Delete
            </h2>
            <p className="mb-4 dark-title">
              Are you sure you want to delete this restaurant?
            </p>
            <div className="flex justify-end">
              <button
                onClick={handleDeleteRestaurant}
                className="mr-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-700 transition-colors duration-300"
              >
                {deleteLoading ? "Deleting..." : "Delete"}
              </button>
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </MyModal>
      )}

      {!isLoading && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(restaurants?.length / RestaurantsPerPage)}
          onPageChange={paginate}
        />
      )}
    </div>
  );
};
