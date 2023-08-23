import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import RestaurantCard from "../../../components/Cards/RestaurantCard";

const SearchResultSection = () => {
  const { searchResults } = useContext(AuthContext);
  console.log(searchResults);
  return (
    <section className="content">
      {searchResults?.length ? (
        <>
          <p className="text-4xl mx-40 my-8">Search results</p>
          <div className="mx-40 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {searchResults.map((restaurant) => (
              <RestaurantCard
                key={restaurant._id}
                restaurant={restaurant}></RestaurantCard>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center font-semibold text-5xl my-40">
          No search results found.
        </div>
      )}
    </section>
  );
};

export default SearchResultSection;
