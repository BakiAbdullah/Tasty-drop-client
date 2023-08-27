import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  console.log(restaurant)
  return (
    <Link
      to={`/restaurant/${restaurant._id}`}
      className=" relative p-4 mb-6 group shadow-md text-black/80 transition duration-300 hover:bg-gray-50 block"
    >
      <div className="flex flex-col space-y-4">
        <img
          className="h-52 w-full object-cover rounded-sm"
          src={restaurant.photo}
          alt={restaurant.outletName}
        />
        <span className="absolute group-hover:scale-105 duration-500 bg-pink text-white px-3 rounded-e-md font-medium">
          {restaurant.discountOnItems}% OFF
        </span>
        <div className="flex flex-col space-y-1">
          <p className="text-xl font-semibold">{restaurant.outletName}</p>
          <p className="text-sm font-thin">{restaurant.RestaurantCategory}</p>
          <p className="text-gray-500 text-sm">
            Location: {restaurant.locationOfOutlet}
          </p>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300">
          Visit
        </button>
      </div>
    </Link>
  );
};

export default RestaurantCard;
