import { useEffect, useState } from "react";
import RestaurantBannerTemplate from "../../components/AllRestaurantTemplate/RestaurantBannerTemplate";
import { useLocation } from "react-router";
import RestaurantCard from "../../components/Cards/RestaurantCard";
import Loading from "../../components/Loader/Loading";
import EmptyState from "../../components/Utils/EmptyState";
import image from "../../assets/icon/outlet.svg";

const AllRestaurant = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const cityName = location.pathname.split("/")[2]; //it will get the city name from the url.
  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_LIVE_URL}api/searched-location/${cityName}`)
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data);
        setLoading(false);
      });
  }, [cityName]);
  console.log(restaurants);
  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <>
      <RestaurantBannerTemplate />
      {restaurants && Array.isArray(restaurants) && restaurants?.length > 0 ? (
        <>
          <div className="mx-4 pb-28 md:mx-10 xl:mx-20">
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
        <>
          {loading && <Loading />}
          <div
            className={` gap-3 flex flex-col justify-center items-center py-14`}>
            <img className="w-16" src={image} alt="" />
            <h1 className="text-lg lg:text-xl font-bold text-zinc-800">
              Not available
            </h1>
            <p className="text-zinc-800  text-sm font-medium ">Coming soon!</p>
          </div>
        </>
      )}
    </>
  );
};

export default AllRestaurant;
