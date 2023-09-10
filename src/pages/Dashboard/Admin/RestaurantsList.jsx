import { useState } from "react";
import { useEffect } from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
export const RestaurantsList = () => {
  const cellAlignClass = "px-4 py-2 text-center align-middle"; // Store the common class in a variable
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_LIVE_URL}restaurants`)
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);

  console.log(restaurants);
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
                            value={5}
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
                    <span className=" bg-green-400 p-1 rounded-lg">Active</span>
                  </td>
                  <td
                    className={`${cellAlignClass}} flex gap-2 justify-center items-center h-32`}
                  >
                    <AiOutlineEye className="text-blue-500 hover:text-blue-700 cursor-pointer" />
                    <AiOutlineDelete className="text-red-500 hover:text-red-700 cursor-pointer" />
                  </td>
                  <td className={cellAlignClass}></td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
