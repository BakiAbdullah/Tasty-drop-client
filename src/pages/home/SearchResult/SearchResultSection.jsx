import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import RestaurantCard from "../../../components/Cards/RestaurantCard";
import Loader from "../../../components/Loader/Loader";

const SearchResultSection = () => {
  const { searchResults } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (searchResults) {
      setLoading(false);
    }
  }, [searchResults]);

  return (
    <section className="content">
    {loading ? (
      <Loader /> // Show loader when data is loading from the api....
    ) : (
      <>
        {searchResults?.length ? (
          <>
            <p className="text-4xl mx-40 my-8">Search results</p>
            <div className="mx-40 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {searchResults.map((restaurant) => (
                <RestaurantCard
                  key={restaurant._id}
                  restaurant={restaurant}
                ></RestaurantCard>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center font-semibold text-5xl my-40">
            No search results found.
          </div>
        )}
      </>
    )}
  </section>
  );
};

export default SearchResultSection;
