import RestaurantCard from "../../../components/Cards/RestaurantCard";
import MainBanner from "../../../components/Banner/MainBanner";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import image from "../../../assets/icon/outlet.svg"

const SearchResultSection = () => {
  const [restaurants, setRestaurants] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("term");
console.log(searchQuery);
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_LIVE_URL}api/searched-location/${searchQuery}`
        );
        const AllRestaurant = response.data;
        console.log(AllRestaurant);
        searchQuery && setRestaurants(AllRestaurant);
      } catch (error) {
        console.error("search field error:", error);
      }
    };

    if (searchQuery) {
      fetchRestaurants();
    }
  }, [searchQuery]);

  return (
    <>
      <MainBanner />
      {restaurants.length ? (
        <>
          <p className="text-4xl mx-4 md:mx-10 lg:mx-40 my-8">
            Showing results for{" "}
            <span className="font-semibold">&quot;{searchQuery}&quot;</span>
          </p>
          <div className="mx-4 md:mx-10 lg:mx-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant._id}
                restaurant={restaurant}
              />
            ))}
          </div>
        </>
      ) : (
        <div
              className={` gap-3 flex flex-col justify-center items-center py-36`}>
              <img className="w-16" src={image} alt="" />
              <h1 className="text-lg lg:text-xl font-bold text-zinc-800">
                Not search result found for  <q>{searchQuery}</q>
              </h1>
            
            </div>
      )}
    </>
  );
};

export default SearchResultSection;
