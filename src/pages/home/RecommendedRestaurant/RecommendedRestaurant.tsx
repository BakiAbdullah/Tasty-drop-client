import { Star, Clock, MapPin, TrendingUp } from "lucide-react";
import MainHeading from "../../../components/Utils/TitleTexts/MainHeading";

export default function RecommendedRestaurant() {
  const restaurants = [
    {
      id: 1,
      name: "Bella's Italian Kitchen",
      cuisine: "Italian, Pasta",
      rating: 4.8,
      reviews: 1250,
      deliveryTime: "25-35",
      distance: "2.5 km",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
      isFeatured: true,
      badge: "Top Rated",
    },
    {
      id: 2,
      name: "Sushi Paradise",
      cuisine: "Japanese, Sushi",
      rating: 4.7,
      reviews: 890,
      deliveryTime: "30-40",
      distance: "3.2 km",
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&q=80",
    },
    {
      id: 3,
      name: "Green Leaf Cafe",
      cuisine: "Healthy, Salads",
      rating: 4.6,
      reviews: 645,
      deliveryTime: "20-30",
      distance: "1.8 km",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
    },
    {
      id: 4,
      name: "Spice Route",
      cuisine: "Indian, Curry",
      rating: 4.7,
      reviews: 1020,
      deliveryTime: "25-35",
      distance: "2.1 km",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
    },
    {
      id: 5,
      name: "Morning Brew Cafe",
      cuisine: "Cafe, Breakfast",
      rating: 4.5,
      reviews: 520,
      deliveryTime: "15-25",
      distance: "1.5 km",
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
    },
  ];

  return (
    <section className="py-12">
      <div className="w-[88vw] mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <div>
            <MainHeading title={"Cafes & Restaurants"} />
          </div>
          <button className="text-orange-500 font-semibold hover:text-orange-500 transition-colors pt-20">
            View All <span>→</span>
          </button>
        </div>

        {/* Grid Layout - 5 Cards in a Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:h-[700px]">
          {restaurants.map((restaurant, index) => (
            <div
              key={restaurant.id}
              className={`group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden w-full h-full">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {restaurant.isFeatured && (
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                      <TrendingUp className="w-3 h-3" />
                      {restaurant.badge}
                    </span>
                  )}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3">
                  <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-lg">
                    <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                    <span className="text-sm font-bold text-gray-800">
                      {restaurant.rating}
                    </span>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3
                    className={`font-bold mb-1 ${
                      index === 0 ? "text-2xl" : "text-lg"
                    }`}
                  >
                    {restaurant.name}
                  </h3>
                  <p className="text-orange-200 text-sm mb-3">
                    {restaurant.cuisine}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3" />
                      <span>{restaurant.deliveryTime} min</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      <MapPin className="w-3 h-3" />
                      <span>{restaurant.distance}</span>
                    </div>
                  </div>

                  <div className="mt-2 text-xs text-orange-100">
                    {restaurant.reviews}+ reviews
                  </div>
                </div>
              </div>

              {/* Order Button - Only visible on hover for non-featured cards */}
              {index !== 0 && (
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors w-full text-sm">
                    Order Now
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
