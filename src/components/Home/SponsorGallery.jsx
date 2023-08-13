import React from "react";
import Marquee from "react-fast-marquee";

const SponsorGallery = () => {
  const slide1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const slide2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div className="-mt-16 bg-slate-200 backdrop-blur-lg py-3">
        {/* slide-1 */}
        <Marquee speed={14}>
          <div className="flex items-center overflow-hidden">
            {slide1.map((i) => (
              <img
                key={i} // Add a unique key for each image
                className="object-cover rounded-lg lg:w-40 lg:h-40 mx-2 w-28 h-28"
                src={`../../../src/assets/asset/SponsorGallery/Slide-1/img${i}.jpg`}
                alt={`Slide ${i}`}
                style={{ zIndex: 1, position: "relative" }} // Adjust styles as needed
              />
            ))}
          </div>
        </Marquee>
        {/* slide-2 */}
        <Marquee speed={11}>
          <div className="flex items-center overflow-hidden mt-3">
            {slide2.map((i) => (
              <img
                key={i} // Add a unique key for each image
                className="object-cover rounded-lg h-28 w-28 lg:w-40 lg:h-40 mx-2"
                src={`../../../src/assets/asset/SponsorGallery/Slide-2/img${i}.jpg`}
                alt={`Slide ${i}`}
                style={{ zIndex: 1, position: "relative" }} // Adjust styles as needed
              />
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default SponsorGallery;
