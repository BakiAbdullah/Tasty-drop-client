import Marquee from "react-fast-marquee";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  ig1,
  ig2,
  ig3,
  ig4,
  ig5,
  ig6,
  ig7,
  ig8,
  ig9,
} from "../../../assets/asset";
const SponsorGallery = () => {
  const slide1 = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const slide2 = [ig1, ig2, ig3, ig4, ig5, ig6, ig7, ig8, ig9];
  return (
    <>
      <div className="-mt-20 bg-slate-50 py-3">
        {/* slide-1 */}
        <Marquee speed={14}>
          <div className="flex items-center overflow-hidden">
            {slide1.map((img, i) => (
              <img loading="lazy"
                key={i}
                className="object-cover rounded-lg lg:w-40 lg:h-40 mx-2 w-28 h-28"
                src={img}
                alt={`Slide ${img}`}
                style={{ zIndex: 1, position: "relative" }}
              />
            ))}
          </div>
        </Marquee>
        {/* slide-2 */}
        <Marquee speed={11}>
          <div className="flex items-center overflow-hidden mt-3">
            {slide2.map((img, i) => (
              <img loading="lazy"
                key={i}
                className="object-cover rounded-lg h-28 w-28 lg:w-40 lg:h-40 mx-2"
                src={img}
                alt={`Slide ${img}`}
                style={{ zIndex: 1, position: "relative" }}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default SponsorGallery;
