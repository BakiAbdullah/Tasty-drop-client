import { useDispatch, useSelector } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";
import { addToCart, removeCart } from "../../../redux/feature/cartSlice";
import { MdOutlineCancel } from "react-icons/md";
import Button from "../../../components/Button/Button";

const Restaurant = () => {
  const restaurantData = useLoaderData();
  console.log(restaurantData.menu);
  console.log(restaurantData);
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.carts);
  // const totalPrice = carts.map(item=>item.menuItemPrice)
  const totalPrice = carts.reduce(
    (prev, cur) => prev + parseFloat(cur.menuTotalPrice),
    0
  );
  console.log(totalPrice)

  console.log(carts);
  // const quentity = carts.filter(item => item._id)
  return (
    <section className="bg-gray">
      <div className="pt-20 lg:flex lg:justify-between gap-2 ">
        <div className="lg:w-[74%] mt-5">
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

        <div className="lg:w-[25%] pt-6 relative shadow-2xl text-center bg-white rounded-lg">
          <h3 className="text-center mb-5 font-semibold text-xl">Your cart</h3>
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

          <Link
            to={"/order-checkout"}
            className="mt-5 py-1 w-full rounded-lg font-semibold mb-4 absolute bottom-0 left-0"
          >
            <Button label={"Checkout order and address"}>
              Checkout order and address
            </Button>
          </Link>
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

        <div className="grid lg:grid-cols-2 gap-7 ">
          {restaurantData?.menu?.map((singleMenu, i) => (
            <div
              key={i}
              className="flex bg-white justify-between items-center relative px-4 py-3 rounded-md shadow-lg"
            >
              <div>
                <h3 className="text-2xl  mb-2 text-slate-800 font-semibold">
                  {singleMenu.menuItemName}
                </h3>
                <p className="text-slate-600 text-sm pr-10 text-justify">
                  {singleMenu.menuItemDescription}
                </p>
                <p className="text-xl font-medium my-3">
                  from Tk{" "}
                  <span className="text-2xl ">
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
              </div>
              <img
                className="h-[100px] aspect-square object-cover rounded-md"
                src={singleMenu.menuItemImage}
                alt="dish picture"
              />
              <i
                onClick={() => dispatch(addToCart(singleMenu))}
                className="fa-solid fa-plus hover:cursor-pointer bg-white p-3 rounded-full absolute right-2 bottom-3 text-red-400 hover:text-red-600 z-10"
              ></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
