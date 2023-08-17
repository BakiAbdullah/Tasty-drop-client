import bannerImage from "../../assets/asset/all-restaurant-images/delivery-man.jpg";

const RestaurantBannerTemplate = () => {
  return (
    <div
        className="w-full h-72 md:h-96 bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="md:w-[600px] mx-auto pt-5 relative z-10">
          <p className="text-center text-gray-200 text-white pt-3 text-base">
            The meals you love, delivered with care
          </p>
          <div className="mt-4 relative">
            <input
              className="px-6 py-4 w-full rounded-full text-lg pr-16"
              type="text"
              placeholder="Search for restaurants and cuisines"
            />
            <button className="absolute right-0 top-0 h-full btn-primary rounded-full btn-rounded">
              Search
            </button>
          </div>
        </div>
      </div>
  );
};

export default RestaurantBannerTemplate;
