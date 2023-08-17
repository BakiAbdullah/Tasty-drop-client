import { useEffect, useState } from "react";
import RestaurantBannerTemplate from "../../components/AllRestaurantTemplate/RestaurantBannerTemplate";
import MainHeading from "../../components/TitleTexts/MainHeading";
import { useLocation } from "react-router";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";

const AllRestaurant = () => {
  const location = useLocation();
  const [restaurants, setRestaurants] = useState([]);
  const cityNameSmall = location.pathname.split("/")[2];
  const cityName =
    cityNameSmall.charAt(0).toUpperCase() + cityNameSmall.slice(1);
  console.log(cityName);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}api/restaurants?location=${cityName}`)
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, [cityName]);

  return (
    <>
      {restaurants.length ? (
        <div>
          <RestaurantBannerTemplate></RestaurantBannerTemplate>
          <p className="text-4xl mx-40 my-8">All restaurants</p>
          <div className="mx-40 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant._id}
                restaurant={restaurant}
              ></RestaurantCard>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen relative">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <p className="font-bold text-center text-5xl text-white shadow-lg rounded-lg p-6 relative z-10">
          Coming to your city soon
        </p>
      </div>)}
    </>
  );
};

export default AllRestaurant;
