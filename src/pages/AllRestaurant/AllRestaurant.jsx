import { useEffect, useState } from "react";
import RestaurantBannerTemplate from "../../components/AllRestaurantTemplate/RestaurantBannerTemplate";
import { useLocation } from "react-router";
import RestaurantCard from "../../components/Cards/RestaurantCard";
import Loading from "../../components/Loader/Loading";

const AllRestaurant = () => {
  const location = useLocation();
  const [restaurants, setRestaurants] = useState([]);
  const cityName = location.pathname.split("/")[2]; //it will get the city name from the url.
  useEffect(() => {
    fetch(`${import.meta.env.VITE_LIVE_URL}api/searched-location/${cityName}`)
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, [cityName]);
console.log(restaurants)
  return (
    <>
      <RestaurantBannerTemplate />
      {restaurants.length ? (
        <>
          <div className="mx-4 md:mx-10 xl:mx-20">
            <p className="text-4xl my-8">All restaurants</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {restaurants.map(
                (restaurant) =>
                  restaurant?.status === "approved" && (
                    <RestaurantCard
                      key={restaurant._id}
                      restaurant={restaurant}
                    />
                  )
              )}
            </div>
          </div>
        </>
      ) : (
        // <div className="flex items-center justify-center h-screen bg-black bg-opacity-40">
        //   <p className="font-bold text-center text-2xl md:text-5xl text-white shadow-lg rounded-lg p-6 relative z-10">
        //     Coming to your city soon...
        //   </p>
        // </div>
        <Loading />
      )}
    </>
  );
};

export default AllRestaurant;
