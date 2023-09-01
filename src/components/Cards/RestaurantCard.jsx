import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from "react-router";

const RestaurantCard = ({ restaurant }) => {
  const { _id, photo, outletName, locations, RestaurantCategory, email, discountOnItems } = restaurant;
  const navigate = useNavigate();

  return (
    <div className="relative p-4 mb-6 group shadow-md text-black/80 transition duration-300 hover:bg-gray-50 block">
      <div className="flex flex-col space-y-4">
        <div className="aspect-w-16 aspect-h-9 max-h-40 md:max-h-60 lg:max-h-80">
          <img
            className="object-cover rounded-sm max-h-40 md:max-h-50 w-full"
            src={photo}
            alt={outletName}
          />
        </div>
        {discountOnItems && (
          <span className="absolute top-2 right-5 transform group-hover:scale-105 duration-500 bg-pink text-white px-2 py-1 rounded-full font-medium">
            {discountOnItems}% OFF
          </span>
        )}
        <div className="flex flex-col space-y-2">
          <p className="text-xl font-semibold">{outletName}</p>
          <p className="flex items-center text-sm font-semibold text-blue-500">
            {RestaurantCategory}
          </p>
          <p className="flex items-center text-base font-light text-gray-600">
            <FaMapMarkerAlt className="mr-1" />
            {locations.district}, {locations.division}
          </p>
          <p className="flex items-center text-sm font-light text-gray-600">
            <FaEnvelope className="mr-1" />
            {email}
          </p>
        </div>
        <button
          onClick={() => navigate(`/restaurant/${_id}`)}
          className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
        >
          Visit Outlet
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;
