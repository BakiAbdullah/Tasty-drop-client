import { useEffect, useState } from "react";
import RestaurantBannerTemplate from "../../components/AllRestaurantTemplate/RestaurantBannerTemplate";
import { useLocation } from "react-router";
import RestaurantCard from "../../components/Cards/RestaurantCard";
import Loading from "../../components/Loader/Loading";
import image from "../../assets/icon/outlet.svg";

const AllRestaurant = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const cityName = location.pathname.split("/")[2];

  const handleSearch = (searchQuery) => {
    // Filter restaurants based on the search query
    const filtered = restaurants.filter(
      (restaurant) =>
        restaurant?.status === "approved" &&
        (restaurant.outletName
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
          restaurant.RestaurantCategory.toLowerCase().includes(
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
        setLoading(false); // Initialize filtered restaurants with all restaurants
      });
  }, [cityName]);

  return (
    <>
      <RestaurantBannerTemplate onSearch={handleSearch} />
      {filteredRestaurants &&
      Array.isArray(filteredRestaurants) &&
      filteredRestaurants.length > 0 ? (
        <>
          <div className="mx-4 pb-28 md:mx-10 xl:mx-20">
            <p className="text-4xl my-8">All restaurants</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredRestaurants.map(
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
        <>
          {loading ? (
            <Loading />
          ) : (
            <div
              className={` gap-3 flex flex-col justify-center items-center py-14`}>
              <img className="w-16" src={image} alt="" />
              <h1 className="text-lg lg:text-xl font-bold text-zinc-800">
                Not available
              </h1>
              <p className="text-zinc-800  text-sm font-medium ">
                Coming soon!
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default AllRestaurant;
