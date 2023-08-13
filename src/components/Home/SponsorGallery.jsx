import React from "react";
import Marquee from "react-fast-marquee";

const SponsorGallery = () => {
  const slide1 = [1, 2, 5, 6, 8, 9, 10, 11, 12];
  const slide2 = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="-mt-16">
        {/* slide-1 */}
        <Marquee speed={15}>
          <div className="flex items-center gap-5 h-44 overflow-hidden">
            {slide1.map((i) => (
              <img
                key={i} // Add a unique key for each image
                className="object-cover rounded-lg w-44 h-44"
                src={`../../../src/assets/asset/SponsorGallery/Slide-1/img${i}.jpg`}
                alt={`Slide ${i}`}
                style={{ zIndex: 1, position: "relative" }} // Adjust styles as needed
              />
            ))}
          </div>
        </Marquee>
        {/* slide-2 */}
        <Marquee speed={12}>
          <div className="flex items-center gap-5 h-44 overflow-hidden pt-6">
            {slide2.map((i) => (
              <img
                key={i} // Add a unique key for each image
                className="object-cover rounded-lg w-44 h-44"
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
