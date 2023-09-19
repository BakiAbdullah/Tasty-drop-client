import RestaurantCard from "../../../components/Cards/RestaurantCard";
import MainBanner from "../../../components/Banner/MainBanner";
import Footer from "../../../components/shared/footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

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
        <div className="text-center font-semibold text-3xl sm:text-4xl lg:text-5xl my-10">
            No search results found for <q className="font-bold">{searchQuery}</q>
        </div>
      )}
    </>
  );
};

export default SearchResultSection;
