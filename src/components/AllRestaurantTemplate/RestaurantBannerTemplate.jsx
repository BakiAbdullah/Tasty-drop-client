import { useState } from "react";
import bannerImage from "../../assets/asset/all-restaurant-images/delivery-man.jpg";

const RestaurantBannerTemplate = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };
  return (
    <div
      className="w-full h-72 md:h-68 bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="md:w-[600px] mx-auto pt-5 relative z-10">
        <p className="text-center text-gray-200 text-white pt-3 text-base">
          The meals you love, delivered with care
        </p>
        <div className="mt-4 relative">
          <input
            className="w-full mt-4
    lg:px-6 lg:py-2 py-1
    lg:text-base text-sm
    rounded-full

    
    focus:border-orange-500

    focus:outline-none
    focus:ring-1
    focus:ring-orange-500
    focus:ring-offset-1

    transition-all duration-200"
            placeholder="Search for restaurants and cuisines"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={handleSearch}
          />
          <button
            type="submit"
            className="absolute lg:text-base text-sm right-0 top-[37%] lg:top-[29%] text-white lg:px-10 lg:py-2 py-[4px] px-6 rounded-full ring-orange-400 bg-gradient-to-r from-orange-500 to-orange-600 hover:bg-orange-700 duration-300 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-500  transition-all"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantBannerTemplate;
