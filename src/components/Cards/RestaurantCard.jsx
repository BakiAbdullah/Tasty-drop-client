import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link
      to={`/restaurant/${restaurant._id}`}
      className="border p-4 mb-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-gray-50 block"
    >
      <div className="flex flex-col space-y-4">
        <img
          className="h-44 w-full object-cover rounded-md"
          src={restaurant.photo}
          alt={restaurant.outletName}
        />
        <div className="flex flex-col space-y-2">
          <p className="text-xl font-semibold">{restaurant.outletName}</p>
          <p className="text-gray-500 text-sm">
            Location: {restaurant.locationOfOutlet}
          </p>
          {/* <p className="text-gray-500 text-sm">
            Delivery Time: {restaurant.deliveryTime}
          </p> */}
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300">
          Visit
        </button>
      </div>
    </Link>
  );
};

export default RestaurantCard;
