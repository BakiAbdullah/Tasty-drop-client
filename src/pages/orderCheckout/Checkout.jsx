import { CiLocationOn } from "react-icons/ci";
import { FaPen } from "react-icons/fa";
import { MdOutlineCloudDone } from "react-icons/md";
import Toggle from "../../components/Utils/Toggle";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import useAxiosSecure from "./../../Hooks/useAxiosSecure";

import useAuth from "../../api/useAuth";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../redux/reduxApi/userApi";
import { useRef } from "react";
import toast from "react-hot-toast";
import { FiLoader } from "react-icons/fi";
import Loader from "../../components/Loader/Loader";

export const Checkout = () => {
  const location = useLocation();
  const { user } = useAuth();

  console.log(user);
  const { currentData: customerData, isLoading: userLoading } =
    useGetProfileQuery(user?.email);
  const [updateUserData, { isLoading }] = useUpdateProfileMutation();
  console.log(location);
  const restaurantId = location?.state?.restaurantId;
  const { axiosSecure } = useAxiosSecure();
  const deliveryLocation = location?.state?.location;
  const [homeLocation, setHomeLocation] = useState(customerData?.address);
  const [edit, isEdit] = useState(false);
  const inputRef = useRef(null);
  const { carts } = useSelector((state) => state.carts);

  // price calculation
  const subtotalPrice = carts.reduce(
    (prev, curr) => prev + curr.menuTotalPrice,
    0
  );
  let platformFee = 4;
  if (subtotalPrice > 1000) {
    platformFee = platformFee + 3;
  }
  let vat = 0;
  if (subtotalPrice > 100) {
    vat = Math.ceil((JSON.parse(subtotalPrice) * 0.05).toFixed("2"));
  }
  let totalPrice = 0;
  if (subtotalPrice > 0) {
    totalPrice = subtotalPrice + JSON.parse(vat) + 55 + platformFee;
  }

  // handling payment from here
  const handlePayment = () => {
    const foodArray = carts.map((cartItems) => {
      const matchingCartItem = carts.find((item) => item._id === cartItems._id);
      const quantity = matchingCartItem ? matchingCartItem.quantity : 0;
      const price = matchingCartItem ? matchingCartItem.menuTotalPrice : 0;
      console.log(quantity);
      const id = cartItems._id;
      const foodItem = {};
      foodItem[id] = quantity;
      foodItem.productTotalPrice = price;
      return foodItem;
    });
    console.log(foodArray);
    deliveryLocation.area = homeLocation;
    const orderDate = new Date();
    const formattedDate = orderDate.toLocaleDateString();
    const paymentData = {
      homeAddress: deliveryLocation,
      foodArray,
      totalPrice,
      customerData,
      restaurantId,
      orderDate: formattedDate,
    };
    console.log(paymentData);
    axiosSecure.post("order", paymentData).then((res) => {
      if (res.data.url) {
        window.location.replace(res.data.url);
      }
      console.log(res.data);
    });
  };

  // update profile information
  const handleDataUpdate = (event) => {
    event.preventDefault();
    const form = event.target;


    const email = form.email.value;

    const name = form.name.value;
    const phone = form.number.value;

    const data = { name, phone, address: homeLocation };
    updateUserData({ email: user?.email, data }).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("Profile updated!");
      }
    });
  };

  if (userLoading) return <Loader />;
  console.log(customerData);

  return (
    <div className="pt-32 pb-12 bg-gray">
      {/* left part */}
      <div className=" flex flex-col lg:flex-row gap-14 justify-between max-w-5xl mx-auto px-5 lg:px-0  ">
        <div className="w-full">
          <div className="bg-white p-7 shadow-md rounded-lg mb-5 space-y-5">
            <h1 className="div-title">Delivery Details</h1>
            <div className="flex items-center justify-between border-l-2 px-5 py-2 bg-slate-100">
              <span>
                <h1 className="text-sm">Cash On Delivery</h1>
                <p className="text-xs pt-1">
                  Pay after you receive your parcel at your doorstep.
                </p>
              </span>
              <Toggle />
            </div>
            <p className="div-title inline-flex items-center gap-2">
              Delivery address
            </p>
            {deliveryLocation && (
              <div className="border relative border-orange-500 p-5 rounded-sm space-y-2 text-sm ">
                <div className="flex items-center justify-between">
                  {/* <span>Feni, Mizan Road, block-2</span> */}
                  {edit ? (
                    <input
                      title="To change your default address, edit on profile details"
                      ref={inputRef}
                      type="text"
                      required
                      defaultValue={customerData?.address}
                      onChange={(e) => setHomeLocation(e.target.value)}
                      className="input-style w-fit"
                      placeholder="Delivery address"
                    />
                  ) : (
                    <p className="h-[48px]  flex items-center  gap-3">
                      <CiLocationOn size={23} />
                      <span className="font-semibold text-sm">
                        {" "}
                        {customerData?.address || homeLocation}
                      </span>
                    </p>
                  )}
                  <span className="inline-flex items-center gap-5 ml-4 justify-between">
                    {!edit && (
                      <FaPen
                        title="Edit"
                        size={18}
                        onClick={() => isEdit(true)}
                        className="hover:cursor-pointer text-orange-500"
                      />
                    )}
                    {edit && (
                      <MdOutlineCloudDone
                        title="Done"
                        onClick={() => isEdit(false)}
                        size={20}
                        className="hover:cursor-pointer text-orange-500"
                      />
                    )}
                  </span>
                </div>
                <p>Note Rider: 2323</p>
                <p>{deliveryLocation?.division}</p>
                <p>
                  <span>{deliveryLocation?.upazila}</span> ,{" "}
                  <span>{deliveryLocation?.district}</span>{" "}
                </p>
              </div>
            )}
          </div>
          <form
            onSubmit={handleDataUpdate}
            className="flex flex-col shadow-md space-y-6 bg-white p-7 rounded-xl">
            <div>
              <h1 className="div-title">Personal Details</h1>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-xs ml-2">Email</span>
              <fieldset disabled>
                <input
                  className="input-style "
                  type="text"
                  placeholder="your email..."
                  name="email"
                  defaultValue={user?.email}
                />
              </fieldset>
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-xs ml-2">First name</span>
              <input
                className="input-style"
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={user?.displayName}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-xs ml-2">Mobile number</span>
              <input
                className="input-style"
                type="text"
                placeholder="Mobile number"
                required
                defaultValue={customerData?.phone}
                name="number"
              />
            </label>

            <button
              title="Save for your next order!"
              disabled={isLoading}
              type="submit"
              className={`   bg-orange-500
              py-2 w-44  text-white font-bold rounded mt-5 px-3 hover:`}>
              {isLoading ? (
                <FiLoader
                  className="animate-spin m-auto text-white "
                  size={24}
                />
              ) : (
                "Save data"
              )}
            </button>
          </form>

          {/* tips part */}
          <div className="mt- shadow-md bg-white p-7 mt-10 rounded-xl space-x-2">
            <span>
              <h1 className="div-title">Tip your rider</h1>
              <p className="text-sm pt-3">
                100% of the tips go to your rider, we don’t deduct anything from
                it.
              </p>
            </span>
            <span className="pt-5 block space-x-2 ">
              <button className="border border-slate-300 rounded-full p-2 text-xs">
                Not Now
              </button>
              <button className="border  border-slate-300 rounded-full p-2 text-xs">
                Tk 10
              </button>
              <button className="border border-slate-300 rounded-full p-2 text-xs">
                Tk 30
              </button>
              <button className="border border-slate-300 rounded-full p-2 text-xs">
                Tk 50
              </button>
            </span>
          </div>
        </div>

        {/* right part */}
        <div className="bg-white h-fit p-7 shadow-md rounded-xl lg:w-[500px]">
          <div className="space-y-5">
            <span>
              <h1 className="div-title ">Your order from</h1>
              <p>{location?.state?.restaurantName} </p>
            </span>
            <span className="flex flex-col w-full items-center justify-between">
              {carts.map((items) => (
                <div className="flex justify-between w-full " key={items._id}>
                  <p>
                    {items?.quantity} x {items?.menuItemName}
                  </p>
                  <p>Tk {items.menuTotalPrice}</p>
                </div>
              ))}
            </span>
            <hr />
            <div className="space-y-4 text-sm text-slate-700">
              <span className="flex items-center justify-between">
                <h1>Subtotal</h1>
                <h1 className="text-lg font-bold">Tk {subtotalPrice}</h1>
              </span>
              <span className="flex items-center justify-between">
                <h1>Delivery Fee</h1>
                <h1> 55</h1>
              </span>
              <span className="flex items-center justify-between">
                <h1>+ Platform fee</h1>
                <h1>Tk{platformFee} </h1>
              </span>
              <span className="flex items-center justify-between">
                <h1>Vat</h1>
                <h1>Tk{vat} </h1>
              </span>
              <span className="flex pt-5 justify-between">
                <span>
                  <h1 className="div-title">Total</h1>
                  <p>(incl. VAT)</p>
                </span>
                <h1 className="text-2xl font-bold">Tk {totalPrice}</h1>
              </span>
              {/* {deliveryLocation &&
              customerData?.email &&
              homeLocation &&
              subtotalPrice > 0 ? (
                <Button label={"Payment"} onClickHandler={handlePayment} />
              ) : ( */}
              <Button
                disabled={
                  !customerData?.address ||
                  !deliveryLocation ||
                  !subtotalPrice > 0
                }
                label={"Payment"}
                onClickHandler={handlePayment}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
