
import banner from "../../assets/asset/Banner/Banner.jpg";
const Banner = () => {
  return (
    <div
      className="bg-cover bg-top min-h-[calc(100vh-98px)] relative "
      style={{ backgroundImage: `url("${banner}")` }}>
      <div className="absolute bg-black/50 inset-0 flex items-center justify-center ">
        <div>
          <h1 className="text-5xl tracking-wide font-semibold   text-center text-white">
            Satisfy your cravings with <br /> restaurant-quality{" "}
            <span className="text-orange-500">food</span>
          </h1>

          <div className=" relative w-[520px] mx-auto pt-5">
            <h1 className="text-center text-gray-200 text-white pt-3 text-lg">
              Enter your postal code to see what we deliver
            </h1>
            <input
              className="px-8 py-5  w-full mt-4 rounded-full  text-lg"
              type="text"
              placeholder="E.g 110001"
            />
            <button class="absolute right-3 top-[48%] btn-rounded">
              Search
            </button>
            <p className="pt-3  text-center text-gray">
              <span className="text-orange-500 font-semibold">Login</span> for
              your recent addresses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
