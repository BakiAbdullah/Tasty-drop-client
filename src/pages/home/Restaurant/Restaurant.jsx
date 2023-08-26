import { useLoaderData } from "react-router-dom";

const Restaurant = () => {
  const restaurantData = useLoaderData();
  console.log(restaurantData.menu);
  return (
    <section>
      <div className="pt-16 lg:flex lg:justify-between gap-1">
        <div className="lg:w-[74%] mt-5">
          <div>
            <img
              className="w-full h-[400px] object-cover"
              src={restaurantData.photo}
              alt="restaurant pic"
            />

            <div>
              <h3 className="text-3xl font-semibold mt-4 ml-8">
                {restaurantData.restaurantName}
              </h3>

              <div className="flex flex-wrap items-center ml-8 mt-3">
                <p className="bg-orange-500 hover:bg-red-600 lg:px-3 px-1 text-white rounded-xl ">
                  15% off
                </p>
                <p className="ml-5">
                  <i className="fa-solid fa-star text-yellow"></i> 4.5/5
                </p>
                <p className="ml-5">
                  <i className="fa-solid fa-truck-fast text-orange-500 text-xl"></i>{" "}
                  Free Delivery
                </p>
                <p className="ml-5 flex items-center">
                  {" "}
                  <i className="fa-regular fa-clock text-orange-500 text-xl mr-1"></i>{" "}
                  {restaurantData.deliveryTime}
                </p>
                <p className="ml-5 flex items-center">
                  {" "}
                  <i className="fa-solid fa-location-dot text-orange-500 text-xl mr-1"></i>
                  {restaurantData.location}
                </p>
              </div>

              <div className="flex items-center ml-8 mt-3 text-slate-500 mb-6">
                <p className="ml-">Chinese</p>
                <li className="ml-4">Beverags</li>
                <li className="ml-4">Pasta</li>
                <li className="ml-4">Kacchi & Biryani</li>
              </div>

              <hr className="text-slate-300 mb-8"></hr>
            </div>
          </div>

          <h3 className="ml-8 font-medium mb-3">OFFERS</h3>

          <div className="ml-8 lg:flex lg:gap-4 mb-6">
            <div className="bg-slate-200 p-4 rounded-md mb-3 lg:mb-0">
              <p className="font-semibold mb-1">
                <span className="bg-black text-white rounded p-1">Pro</span> 20%
                off
              </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div className="bg-red-100 p-4 rounded-md">
              <p className="font-semibold">
                <span>Pro</span> 20% off
              </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>

        <div className="lg:w-[25%] mt-4 shadow-2xl text-center">
          <p></p>
          <h3 className="text-center mb-8 font-semibold">Your cart</h3>
          <p className="text-center mb-3">Start adding items to your cart</p>
          <hr className="text-slate-300 mb-3"></hr>

          <div className="flex justify-between w-[90%] mx-auto font-semibold">
            <p>Total</p>
            <p>Rs. 0</p>
          </div>

          <button className="mt-5 bg-slate-200 w-[90%] py-3 rounded-lg font-semibold mb-4">
            Review payment and address
          </button>
        </div>
      </div>

      {/* 2nd part */}
      <div className="mt-16 mb-8 w-[94%] mx-auto">
        <h3 className="text-center text-3xl font-semibold">
          <i className="fa-solid fa-fire text-4xl text-amber-500 mr-2"></i>{" "}
          Popular Now{" "}
          <i className="fa-solid fa-fire text-4xl text-amber-500 ml-2"></i>
        </h3>
        <p className="text-center font-medium mt-2 mb-6">
          Most Ordered Dish Right Now
        </p>

        <div className="grid lg:grid-cols-2 gap-6 shadow-md">
          <div className="flex justify-center items-center bg-slate-100 px-4 py-3 rounded-md shadow-lg">
            <div className="relative">
              <h3 className="text-2xl font-medium mb-2">Dish Name</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae, corrupti officia magni commodi a animi!
              </p>
              <p className="text-xl font-medium my-3">
                From Tk <span className="text-3xl ">59.99</span>{" "}
                <span className="text-slate-400">
                  <del>Tk 70.99</del>
                </span>
              </p>
              <i className="fa-solid fa-plus bg-white p-3 rounded-full absolute right-[-135px] top-28 text-red-400 hover:text-red-600 z-10"></i>
            </div>
            <img
              className="w-[150px] h-[100px] rounded-lg hover:scale-110 transition duration-500 "
              src={restaurantData.menu[0].menuItemImage}
              alt="dish picture"
            />
          </div>

          <div className="flex justify-center items-center bg-slate-100 px-4 py-3 rounded-md shadow-lg">
            <div className="relative">
              <h3 className="text-2xl font-medium mb-2">Dish Name</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae, corrupti officia magni commodi a animi!
              </p>
              <p className="text-xl font-medium my-3">
                From Tk <span className="text-3xl ">59.99</span>{" "}
                <span className="text-slate-400">
                  <del>Tk 70.99</del>
                </span>
              </p>
              <i className="fa-solid fa-plus bg-white p-3 rounded-full absolute right-[-135px] top-28 text-red-400 hover:text-red-600 z-10"></i>
            </div>
            <img
              className="w-[150px] h-[100px] hover:scale-110 transition duration-500 "
              src="https://w0.peakpx.com/wallpaper/692/125/HD-wallpaper-indian-delicacy-breakfast-desi-dinner-homemade-indian-meal-khici-lunch-rice-dish-spices-tasty.jpg"
              alt="dish picture"
            />
          </div>

          <div className="flex justify-center items-center bg-slate-100 px-4 py-3 rounded-md shadow-lg">
            <div className="relative">
              <h3 className="text-2xl font-medium mb-2">Dish Name</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae, corrupti officia magni commodi a animi!
              </p>
              <p className="text-xl font-medium my-3">
                From Tk <span className="text-3xl ">59.99</span>{" "}
                <span className="text-slate-400">
                  <del>Tk 70.99</del>
                </span>
              </p>
              <i className="fa-solid fa-plus bg-white p-3 rounded-full absolute right-[-135px] top-28 text-red-400 hover:text-red-600 z-10"></i>
            </div>
            <img
              className="w-[150px] h-[100px] hover:scale-110 transition duration-500 "
              src="https://w0.peakpx.com/wallpaper/692/125/HD-wallpaper-indian-delicacy-breakfast-desi-dinner-homemade-indian-meal-khici-lunch-rice-dish-spices-tasty.jpg"
              alt="dish picture"
            />
          </div>

          <div className="flex justify-center items-center bg-slate-100 px-4 py-3 rounded-md shadow-lg">
            <div className="relative">
              <h3 className="text-2xl font-medium mb-2">Dish Name</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae, corrupti officia magni commodi a animi!
              </p>
              <p className="text-xl font-medium my-3">
                From Tk <span className="text-3xl ">59.99</span>{" "}
                <span className="text-slate-400">
                  <del>Tk 70.99</del>
                </span>
              </p>
              <i className="fa-solid fa-plus bg-white p-3 rounded-full absolute right-[-135px] top-28 text-red-400 hover:text-red-600 z-10"></i>
            </div>
            <img
              className="w-[150px] h-[100px] hover:scale-110 transition duration-500 "
              src="https://w0.peakpx.com/wallpaper/692/125/HD-wallpaper-indian-delicacy-breakfast-desi-dinner-homemade-indian-meal-khici-lunch-rice-dish-spices-tasty.jpg"
              alt="dish picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
