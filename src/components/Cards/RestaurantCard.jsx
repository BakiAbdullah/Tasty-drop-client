import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";

const RestaurantCard = ({ restaurant }) => {
  const {
    _id,
    photo,
    outletName,
    locations,
    RestaurantCategory,
    email,
    discountOnItems,
    review,
  } = restaurant || {};
  const navigate = useNavigate();
  // const review = Math.ceil(parseFloat(review?.rating))
  console.log(restaurant);
  const [rating, setRating] = useState(0);
  useEffect(() => {
    if (review?.rating) {
      setRating(review?.rating);
    } else {
      setRating(0);
    }
  }, [review?.rating, rating]);
  return (
    <div className="relative p-4 lg:mb-32 mb-10 group shadow-md text-black/80 transition duration-300 hover:bg-gray-50 block">
      <div className="flex flex-col space-y-4">
        <div className="">
          <img loading="lazy"
            className="object-cover rounded-sm h-40 xl:h-48 w-full"
            src={photo}
            alt={outletName}
          />
        </div>

        {discountOnItems && (
          <span className="absolute text-xs top-2 right-5 transform group-hover:scale-105 duration-500 bg-pink text-white px-2 py-1 rounded-full font-medium ">
            {discountOnItems}% OFF
          </span>
        )}

        <div className="flex flex-col space-y-2">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">{outletName}</p>

            {review && (
              <span className="flex items-center justify-center gap-2 text-sm font-semibold">
                <FaStar className="text-amber-500" />
                {rating}/5
                <p className="text-xs">({review?.customer}+)</p>
              </span>
            )}
          </div>
          <p className="flex items-center text-xs xl:text-sm font-semibold text-blue-500">
            {RestaurantCategory}
          </p>
          <p className="flex items-center text-xs xl:text-sm font-light text-gray-600">
            <FaMapMarkerAlt className="mr-1 text-pink text-base" />
            {locations.district}, {locations.division}
          </p>
          <p className="flex items-center text-xs xl:text-sm font-light text-gray-600">
            <FaEnvelope className="mr-1 text-pink text-base" />
            {email}
          </p>
        </div>
        {/* Outlet Button */}
        <button
          onClick={() => navigate(`/restaurant/${_id}`)}
          className="bg-red-500 text-white text-xs xl:text-sm px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
        >
          Visit Outlet
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;
