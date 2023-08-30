import { useEffect, useState } from "react";
import RestaurantBannerTemplate from "../../components/AllRestaurantTemplate/RestaurantBannerTemplate";
import { useLocation } from "react-router";
import RestaurantCard from "../../components/Cards/RestaurantCard";

const AllRestaurant = () => {
  const location = useLocation();
  console.log(location)
  const [restaurants, setRestaurants] = useState([]);
  const cityNameSmall = location.pathname.split("/")[2];
  const cityName =
    cityNameSmall.charAt(0).toUpperCase() + cityNameSmall.slice(1);
  console.log(cityName);
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_LIVE_URL}api/restaurants?location=${cityName}`
    )
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, [cityName]);
  console.log(restaurants)

  return (
    <>
    {restaurants.length ? (
      <div className="mx-4 md:mx-10 xl:mx-20">
        <RestaurantBannerTemplate />
        <p className="text-4xl my-8">All restaurants</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant._id}
              restaurant={restaurant}
            />
          ))}
        </div>
      </div>
    ) : (
      <div className="flex items-center justify-center h-screen bg-black bg-opacity-40">
        <p className="font-bold text-center text-2xl md:text-5xl text-white shadow-lg rounded-lg p-6 relative z-10">
          Coming to your city soon...
        </p>
      </div>
    )}
  </>
  
  );
};

export default AllRestaurant;
