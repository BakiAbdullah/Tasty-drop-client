import RestaurantCard from "../../../components/Cards/RestaurantCard";
import MainBanner from "../../../components/Banner/MainBanner";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import image from "../../../assets/icon/outlet.svg";
import Loading from "../../../components/Loader/Loading";

const SearchResultSection = () => {
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("term");
  console.log(searchQuery);
  useEffect(() => {
    setLoading(true);
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_LIVE_URL}api/searched-location/${searchQuery}`
        );
        const AllRestaurant = response.data;
        console.log(AllRestaurant);
        searchQuery && setRestaurants(AllRestaurant);
        setLoading(false);
      } catch (error) {
        console.error("search field error:", error);
        setLoading(false);
      }
    };

    if (searchQuery) {
      fetchRestaurants();
    }
  }, [searchQuery]);

  return (
    <>
      <MainBanner />
      {loading ? (
        <Loading />
      ) : (
        <>
          {restaurants.length ? (
            <>
              <p className="lg:text-4xl text-xl ml-6  md:mx-10 lg:mx-40 my-8">
                Showing results for{" "}
                <span className="font-semibold">&quot;{searchQuery}&quot;</span>
              </p>
              <div className="mx-4 md:mx-10 xl:mx-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
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
              <img loading="lazy" className="w-16" src={image} alt="" />
              <h1 className="text-lg lg:text-xl font-bold text-zinc-800">
                Not search result found for <q>{searchQuery}</q>
              </h1>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SearchResultSection;
