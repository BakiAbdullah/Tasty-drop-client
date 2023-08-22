import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {

  return (
    <Link
      to={"/restaurant"}
      className="border p-4 mb-4 rounded-lg shadow-md overflow-hidden"
    >
      <img
        className="h-44 w-full object-cover mr-4 transition-transform transform hover:scale-105"
        src={restaurant.img}
        alt=""
      />
      <div>
        <p className="text-lg font-semibold">{restaurant.restaurantName}</p>
        <p className="text-gray-500 text-sm">{restaurant.deliveryTime}</p>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600">Estimated Delivery Time:</p>
          <p className="font-semibold">{restaurant.deliveryTime}</p>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300">
          Visit
        </button>
      </div>
    </Link>
  );
};

export default RestaurantCard;
