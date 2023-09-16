import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { addToCart, removeCart } from "../../../redux/feature/cartSlice";
import { MdOutlineCancel } from "react-icons/md";
import Button from "../../../components/Button/Button";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import "./Restaurant.css";

const Restaurant = () => {
  const restaurantData = useLoaderData();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.carts);

  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const totalPrice = carts.reduce((prev, cur) => prev + cur.menuTotalPrice, 0);

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

  return (
    <div className="restaurant-container">
      <section className="bg-gray grid pb-28 grid-cols-12">
        <div className="col-span-12 ">
          <div className="pt-20 lg:flex lg:justify-between gap-2 ">
            <div className="lg:w-[100%] mt-5">
              <div>
                <img
                  className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                  src={restaurantData.photo}
                  alt="restaurant pic"
                />

                <div>
                  <h3 className="text-3xl font-medium mt-4 ml-8">
                    {restaurantData.outletName}
                  </h3>

                  <div className="flex flex-wrap items-center ml-8 mt-3">
                    <p className="bg-orange-500 hover:bg-red-600 lg:px-3 px-2 py-1 text-white rounded-xl">
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
                      {restaurantData.deliveryTime} mins
                    </p>
                    <p className="ml-5 flex items-center">
                      {" "}
                      <i className="fa-solid fa-location-dot text-orange-500 text-xl mr-1"></i>
                      {restaurantData.location}
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
                    Free delivery on the food you love – restaurants, takeaway
                    or groceries
                  </p>
                </div>
                <div className="bg-red-100 p-4 rounded-md">
                  <p className="font-semibold">
                    <span>Pro</span> 20% off
                  </p>
                  <p>
                   Free delivery on the food you love – restaurants, takeaway or groceries
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 pb-8 w-[94%] mx-auto">
            <h3 className="text-center text-3xl font-semibold">
              <i className="fa-solid fa-fire text-4xl text-amber-500 mr-2"></i>{" "}
              Popular Now{" "}
              <i className="fa-solid fa-fire text-4xl text-amber-500 ml-2"></i>
            </h3>
            <p className="text-center font-medium mt-2 mb-6">
              Most Ordered Dish Right Now
            </p>

            <div className="grid lg:grid-cols-4 gap-7">
              {restaurantData?.menu?.map((singleMenu, i) => (
                <div
                  key={i}
                  className="bg-white justify-between items-center relative rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    className="h-[250px] w-full object-cover  shadow-lg"
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

                  <div className="flex justify-between items-center px-4">
                    <p className="text-xl font-medium my-3 flex items-end">
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
                      className="fa-solid fa-plus hover:cursor-pointer text-3xl p-3 rounded-full text-red-400 hover:text-red-600"
                    ></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add to cart section */}
        {/* Cart Icon */}
        <div
          onClick={toggleCart}
          className=" fixed top-[50%] right-0 text-white cursor-pointer shadow-md cart-icon "
        >
          <p className="bg-slate-700 rounded-full px-2 text-white font-semibold absolute top-[-10px] right-[45px]">
            {carts.length}
          </p>
          <FaShoppingCart
            size={55}
            className="py-1 px-2 bg-pink rounded-l-lg"
          />
        </div>
      </section>

      {/* Cart Icon */}

      {/* Cart Section */}
      <div
        className={`cart-section fixed right-0 rounded-md top-28 h-full w-[75%] md:w-[30%] lg:w-[25%] bg-white overflow-y-auto transition-transform transform ${
          showCart ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
      >
        <div className=" h-[80vh] pt-6 relative shadow-2xl text-center bg-white rounded-lg">
          <span
            onClick={toggleCart}
            className="cart-close absolute top-0 right-0 m-3 cursor-pointer text-4xl font-semibold hover:font-bold"
          >
            &times;
          </span>
          <h3 className="text-center mb-5 font-semibold text-xl">Your cart</h3>
          <p className="text-center mb-3  text-slate-600">
            {carts.length > 0
              ? "Review and place your order"
              : "Start adding items to your cart"}
          </p>
          <hr className="text-slate-300 mb-3"></hr>

          {carts.length > 0 && (
            <div className="flex justify-between w-[90%] mx-auto font-semibold">
              <p>Total</p>
              <p className="text-xl font-semibold ">Tk. {totalPrice}</p>
            </div>
          )}

          {carts.length > 0 && (
            <div>
              {carts?.map((item) => (
                <div key={item._id} className="flex px-5 mt-4 justify-between">
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
          )}

          {carts.length > 0 && (
            <span className="mt-5 py-1 w-full rounded-lg font-semibold mb-4 absolute bottom-0 left-0">
              <Button
                onClickHandler={handleGoToCheckOut}
                label={"Checkout order and address"}
              >
                Checkout order and address
              </Button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
