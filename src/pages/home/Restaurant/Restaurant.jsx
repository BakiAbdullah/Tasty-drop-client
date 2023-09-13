import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { addToCart, removeCart } from "../../../redux/feature/cartSlice";
import { MdOutlineCancel } from "react-icons/md";
import Button from "../../../components/Button/Button";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import './Restaurant.css'

const Restaurant = () => {
  const restaurantData = useLoaderData();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.carts);
  console.log(carts)

  const [showCard, setShowCard] = useState(true);

  const toggleCard = () =>{
    setShowCard(!showCard);
  }


  // const totalPrice = carts.map(item=>item.menuItemPrice)
  const totalPrice = carts.reduce((prev, cur) => prev + cur.menuTotalPrice, 0);

  // const quentity = carts.filter(item => item._id)
  const navigate = useNavigate();
  const handleGoToCheckOut = () => {
    navigate("/order-checkout", {
      state: {
        location: restaurantData?.locations,
        restaurantId: id,
        restaurantName: restaurantData.outletName,
      },
    });
  };


  const [isCartFixed, setIsCartFixed] = useState(true);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      setScrollTimeout(
        setTimeout(() => {
          const cartElement = document.querySelector(".side-order-cart");
          const contentElement = document.querySelector(".restaurant-content");

          if (cartElement && contentElement) {
            const cartOffset = cartElement.offsetTop;
            const contentBottom =
              contentElement.getBoundingClientRect().bottom + window.scrollY;
            const scrollPosition = window.scrollY;

            if (
              scrollPosition > cartOffset &&
              scrollPosition < contentBottom - window.innerHeight
            ) {
              setIsCartFixed(true);
            } else {
              setIsCartFixed(false);
            }
          }
        }, 100)
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="restaurant-container">
      <section className="bg-white grid grid-cols-12">
        <div className=" col-span-12 lg:col-span-9">
          <div className="pt-20 lg:flex lg:justify-between gap-2 ">
            <div className="lg:w-[100%] mt-5">
              <div>
                <img
                  className="w-full h-[300px] object-cover"
                  src={restaurantData.photo}
                  alt="restaurant pic"
                />

                <div>
                  <h3 className="text-3xl font-medium mt-4 ml-8">
                    {restaurantData.outletName}
                  </h3>

                  <div className="flex flex-wrap items-center ml-8 mt-3">
                    <p className="bg-orange-500 hover:bg-red-600 lg:px-3 px-1 text-white rounded-xl ">
                      {restaurantData.discountOnItems}% off
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
                      {/* {restaurantData.deliveryTime} */}
                    </p>
                    <p className="ml-5 flex items-center">
                      {" "}
                      <i className="fa-solid fa-location-dot text-orange-500 text-xl mr-1"></i>
                      {/* {restaurantData.location} */}
                    </p>
                  </div>

                  <div className="flex items-center ml-8 mt-3 text-slate-500 mb-6">
                    {restaurantData?.menu?.map((menu, i) => (
                      <span key={i}>{menu.menuItemName} / </span>
                    ))}
                  </div>

                  <hr className="text-slate-300 mb-8"></hr>
                </div>
              </div>

              <h3 className="ml-8 font-medium mb-3">OFFERS</h3>

              <div className="ml-8 lg:flex lg:gap-4 mb-6">
                <div className="bg-slate-200 p-4 rounded-md mb-3 lg:mb-0">
                  <p className="font-semibold mb-1">
                    <span className="bg-black text-white rounded p-1">Pro</span>{" "}
                    20% off
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="bg-red-100 p-4 rounded-md">
                  <p className="font-semibold">
                    <span>Pro</span> 20% off
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd part */}
          <div
            className="pt-16 pb-8 w-[94%] mx-auto restaurant-content"
          >
            <h3 className="text-center text-3xl font-semibold">
              <i className="fa-solid fa-fire text-4xl text-amber-500 mr-2"></i>{" "}
              Popular Now{" "}
              <i className="fa-solid fa-fire text-4xl text-amber-500 ml-2"></i>
            </h3>
            <p className="text-center font-medium mt-2 mb-6">
              Most Ordered Dish Right Now
            </p>

            <div className="grid lg:grid-cols-3 gap-7">
              {restaurantData?.menu?.map((singleMenu, i) => (
                <div
                  key={i}
                  className=" bg-white justify-between items-center relative rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    className="h-[270px] ml-[-20px] mt-[-48px] w-full aspect-square object-cover rounded-lg shadow-lg rotate-12	"
                    src={singleMenu.menuItemImage}
                    alt="dish picture"
                  />

                  <div className="p-3">
                    <h3 className="text-2xl mt-6 mb-2 text-slate-800 font-semibold">
                      {singleMenu.menuItemName}
                    </h3>
                    <p className="text-slate-600 text-sm pr-10 text-justify mb-9">
                      {singleMenu.menuItemDescription}
                    </p>
                  </div>

                  <div className="flex justify-between items-center px-2 ">
                    <p className="text-xl font-medium my-3 flex items-end absolute bottom-0">
                      From Tk{" "}
                      <span className="text-3xl text-amber-600 font-semibold mx-2">
                        {parseInt(singleMenu.menuItemPrice)}
                      </span>{" "}
                      <span className="text-slate-400">
                        <del>
                          Tk{" "}
                          {parseInt(singleMenu.menuItemPrice) +
                            parseInt(singleMenu.menuItemPrice) * 0.1}
                        </del>
                      </span>
                    </p>
                    <i
                      onClick={() => dispatch(addToCart(singleMenu))}
                      className="fa-solid fa-plus hover:cursor-pointer text-3xl p-3 rounded-full text-red-400 hover:text-red-600 absolute bottom-1 right-0"
                    ></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add to card section */}
        <div
          onClick={toggleCard}
          className="bg-white p-2 rounded-lg absolute right-9 top-20 text-orange-600 md:hidden cursor-pointer	"
        >
          <FaShoppingCart className="text-5xl fixed bg-white py-1 px-2 rounded-lg"></FaShoppingCart>
        </div>

        {/* side-order-cart */}
        {showCard && (
          <div
            className={`side-order-cart col-span-10 lg:col-span-3 ${
              isCartFixed
                ? "fixed top-24 lg:w-[25%] w-[70%] right-12 lg:right-0 transition-all duration-300"
                : ""
            }`}
          >
            <div className=" h-[80vh] pt-6 relative shadow-2xl text-center bg-white rounded-lg overflow-y-auto">
              <h3 className="text-center mb-5 font-semibold text-xl">
                Your cart
              </h3>
              <p className="text-center mb-3  text-slate-600">
                Start adding items to your cart
              </p>
              <hr className="text-slate-300 mb-3"></hr>

              <div className="flex justify-between w-[90%] mx-auto font-semibold">
                <p>Total</p>
                <p className="text-xl font-semibold ">Tk. {totalPrice}</p>
              </div>
              <div className="">
                {carts?.map((item) => (
                  <div
                    key={item._id}
                    className="flex px-5 mt-4 justify-between"
                  >
                    <span className="flex text-slate-700">
                      <p> {item?.quantity}x </p>
                      &nbsp; <p> {item?.menuItemName}</p>
                    </span>
                    <p className="flex gap-2 items-center font-semibold">
                      {item?.menuTotalPrice}tk{" "}
                      <span
                        onClick={() => dispatch(removeCart(item._id))}
                        className="cursor-pointer"
                      >
                        <MdOutlineCancel className="text-red-500 text-base" />
                      </span>
                    </p>
                  </div>
                ))}
              </div>

              {/* to={"/order-checkout"} */}
              <span className="mt-5 py-1 w-full rounded-lg font-semibold mb-4 absolute bottom-0 left-0">
                <Button
                  onClickHandler={handleGoToCheckOut}
                  label={"Checkout order and address"}
                >
                  Checkout order and address
                </Button>
              </span>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Restaurant;
