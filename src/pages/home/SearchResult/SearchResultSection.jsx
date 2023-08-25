import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import RestaurantCard from "../../../components/Cards/RestaurantCard";
import Loader from "../../../components/Loader/Loader";

const SearchResultSection = () => {
  const { searchResults,searchQuery } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (searchResults) {
      setLoading(false);
    }
  }, [searchResults]);

  return (
    <section className="content">
  {loading ? (
    <Loader />
  ) : (
    <>
      {searchResults?.length ? (
        <>
          <p className="text-4xl mx-4 md:mx-10 lg:mx-40 my-8">
            Showing results for{" "}
            <span className="font-semibold">"{searchQuery}"</span>
          </p>
          <div className="mx-4 md:mx-10 lg:mx-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchResults.map((restaurant) => (
              <RestaurantCard
                key={restaurant._id}
                restaurant={restaurant}
              ></RestaurantCard>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center font-semibold text-3xl sm:text-4xl lg:text-5xl my-10">
          No search results found.
        </div>
      )}
    </>
  )}
</section>

  );
};

export default SearchResultSection;
