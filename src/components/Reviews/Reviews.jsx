import { useEffect, useState } from "react";
import Flicking from "@egjs/react-flicking";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import "@egjs/react-flicking/dist/flicking.css";

const Reviews = () => {
  const [panels, setPanels] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setPanels(data));
  }, []);
  return (
    <div className="font-Fredoka mt-28 mb-48 bg-white md:mx-24">
      <p className="text-2xl text-pink font-bold  mb-4">
        TESTIMONIALS & REVIEWS
      </p>
      <h1 className="text-6xl font-bold  mb-20">Our Customer Feedbacks</h1>
      <div className="md:flex md:flex-col lg:flex-row">
        <div className=" w-full lg:w-1/2 ">
          <div className=" mx-auto px-4">
            <div className=" py-6 bg-white">
              <Flicking className="flicking" gap={20} auto={5000}>
                {panels.map((review, index) => (
                  <div
                    key={index}
                    className="flicking-panel border-yellow-500 border-8 mx-2 max-w-xs md:max-w-xl p-6 rounded-lg shadow-md"
                  >
                    {/* bg-gradient-to-r from-blue-50 to-white => this code for gradient bg */}
                    <FaQuoteLeft className="text-2xl inline text-gray-400 mr-2" />
                    <p className="text-md md:text-lg inline text-center font-semibold mb-4">
                      {review.review}{" "}
                    </p>
                    <FaQuoteRight className="text-2xl inline  text-gray-400 ml-2" />

                    <div className="flex items-center mt-9 justify-center space-x-3">
                      <img
                        src={review.img}
                        alt="Reviewer's photo"
                        className="w-16 h-16 rounded-full border-4 border-pink"
                      />
                      <div>
                        <p className="text-lg font-semibold">
                          {review.reviewer_name}
                        </p>
                        <div className="flex space-x-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`h-5 w-5 ${
                                i < review.ratings
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Flicking>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:relative md: mt-10 lg:mt-0 ">
          <img
            src="https://home-market-4.myshopify.com/cdn/shop/files/foodio-rbanner1.png?v=1676967914"
            alt="Coffee"
          />
          <img
            className="absolute -top-10 left-96 lg:-top-52 lg:left-52"
            src="https://home-market-4.myshopify.com/cdn/shop/files/foodio-rbanner2.png?v=1676967925"
            alt="Grill"
          />
          <img
            className="absolute left-52 top-32 lg:left-96"
            src="https://home-market-4.myshopify.com/cdn/shop/files/foodio-rbanner3.png?v=1676967935"
            alt="Faluda"
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
