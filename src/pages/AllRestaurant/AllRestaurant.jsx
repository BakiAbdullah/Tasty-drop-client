import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import RestaurantBannerTemplate from "../../components/AllRestaurantTemplate/RestaurantBannerTemplate";
import RestaurantCard from "../../components/Cards/RestaurantCard";
import RestaurantCardSkeleton from "../../components/Loader/RestaurantCardSkeleton";
import image from "../../assets/icon/outlet.svg";

const AllRestaurant = () => {
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const cityName = location.pathname.split("/")[2];

  // Search handler
  const handleSearch = (searchQuery) => {
    const filtered = restaurants.filter(
      (restaurant) =>
        restaurant?.status === "approved" &&
        (restaurant.outletName
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
          restaurant.RestaurantCategory?.toLowerCase().includes(
            searchQuery.toLowerCase()
          ))
    );

    setFilteredRestaurants(filtered);
  };

  useEffect(() => {
    setLoading(true);

    fetch(`${import.meta.env.VITE_LIVE_URL}api/searched-location/${cityName}`)
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data);
        setFilteredRestaurants(data);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [cityName]);

  console.log(filteredRestaurants, 'filteredRestaurants')

  const skeletonCount =
    filteredRestaurants.length > 0 ? filteredRestaurants.length : 8;

  return (
    <>
      <RestaurantBannerTemplate onSearch={handleSearch} />

      {/* LOADING STATE */}
      {loading ? (
        <div className="mx-4 pb-28 md:mx-10 xl:mx-20">
          <p className="text-4xl my-8">All Restaurants</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {Array.from({ length: skeletonCount }).map((_, index) => (
              <RestaurantCardSkeleton key={index} />
            ))}
          </div>
        </div>
      ) : filteredRestaurants.length > 0 ? (
        <div className="mx-4 pb-28 md:mx-10 xl:mx-20">
          <p className="text-4xl my-8">All restaurants</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant._id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      ) : (
        /* EMPTY STATE */
        <div className="flex flex-col items-center justify-center py-36 gap-3">
          <img loading="lazy" className="w-16" src={image} alt="No data" />
          <h1 className="text-lg lg:text-xl font-bold text-slate-800">
            Not available
          </h1>
          <p className="text-slate-800 text-sm font-medium">Coming soon!</p>
        </div>
      )}
    </>
  );
};

export default AllRestaurant;
