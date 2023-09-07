import { FaPen, FaTrash } from "react-icons/fa";
import Toggle from "../../components/Utils/Toggle";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import useAxiosSecure from "./../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useGetCustomerQuery } from "../../redux/feature/baseApi";

export const Checkout = () => {
  const location = useLocation()
  const { user } = useSelector(state => state?.user)
  const { currentData: customerData, refetch } = useGetCustomerQuery(`${user?.email}`,{ refetchOnMountOrArgChange: true })
  const resturenId = location?.state?.returentId
  console.log(resturenId)
  
  console.log(customerData)
  const { axiosSecure } = useAxiosSecure()
  const deliveryLocation = location?.state?.location
  const [homeLocation, setHomeLocation] = useState('')
  const [edit, isEdit] = useState(true)
  const { carts } = useSelector(state => state.carts)
  const subtotalPrice = carts.reduce((prev, curr) => prev + curr.menuTotalPrice, 0)
  let platformFee = 4
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
    const orderDate = new Date()
    const paymentdata = {
      homeAddress: deliveryLocation,
      foodArray,
      totalPrice,
      customerData,
      resturenId,
      orderDate
    };
    console.log(paymentdata);
    axiosSecure.post("order", paymentdata).then((res) => {
      if (res.data.url) {
        window.location.replace(res.data.url);
      }
      console.log(res.data);
    });
  };
  const handledataUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form);
    const email = form.email.value;
    const name = form.name.value;
    const number = form.number.value;
    const costomerData = { email, name, number };
    axiosSecure.post("customer", costomerData).then((res) => {
      if (res.data.matchedCount > 0) {
        toast.success("update customer data");
        event.target.reset();
        refetch();
      } else if (res.data.acknowledged) {
        toast.success("Your Information is inserted");
        event.target.reset();
      } else {
        toast.error("data error");
      }
    });
  };
  return (
    <div className="pt-32 pb-12">
      {/* left part */}
      <div className=" flex flex-col lg:flex-row gap-14 justify-between max-w-5xl mx-auto px-5 lg:px-0  ">
        <div className="w-full">
          <div className="bg-white p-7 shadow-md rounded-lg mb-5 space-y-5">
            <h1 className="div-title">Delivery Details</h1>
            <div className="flex items-center justify-between border-l-2 px-5 py-2 bg-slate-100">
              <span>
                <h1 className="text-sm">Contactless Delivery</h1>
                <p className="text-xs pt-1">
                  To keep you safe, the rider will place your order at your door
                  contactless-switcher
                </p>
              </span>
              <Toggle />
            </div>
            <p className="div-title">Delivery address</p>
            {deliveryLocation && (
              <div className="border border-orange-500 p-5 rounded-sm space-y-2 text-sm ">
                <p>
                  {/* <span>Feni, Mizan Road, block-2</span> */}
                  {edit ? (
                    <input
                      type="text"
                      required
                      onChange={(e) => setHomeLocation(e.target.value)}
                      defaultValue={homeLocation}
                      className="rounded-md border"
                      placeholder="Home Location"
                    />
                  ) : (
                    <p className="inline">Area: {homeLocation}</p>
                  )}
                  <span className="inline-flex items-center gap-5 ml-4 justify-between">
                    {!edit && (
                      <FaPen
                        size={20}
                        onClick={() => isEdit(true)}
                        className="hover:cursor-pointer text-orange-500"
                      />
                    )}
                    {edit && (
                      <FaTrash
                        onClick={() => isEdit(false)}
                        size={20}
                        className="hover:cursor-pointer text-orange-500"
                      />
                    )}
                  </span>
                </p>
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
            onSubmit={handledataUpdate}
            className="flex flex-col shadow-md space-y-6 bg-white p-7 rounded-xl">
            <div className="flex items-center justify-between ">
              <h1 className="div-title">Personal Details</h1>
              <button>Cancel</button>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-xs ml-2">Email</span>
              <input
                className="border px-4 py-3 rounded-md border-slate-200 text-sm "
                type="text"
                placeholder="your email..."
                name="email"
                defaultValue={user?.email}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-xs ml-2">First name</span>
              <input
                className="border px-4 py-3 rounded-md border-slate-200 text-sm"
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={user?.displayName}
              />
            </label>
            {/* <label className="flex flex-col gap-2">
              <span className="text-xs ml-2">Last name</span>
              <input
                className="border px-4 py-3 rounded-md border-slate-200 text-sm"
                type="text"
                placeholder="Last name..."
                name="last_name"
              />
            </label> */}
            <label className="flex flex-col gap-2">
              <span className="text-xs ml-2">Mobile number</span>
              <input
                className="border px-4 py-3 rounded-md border-slate-200 text-sm"
                type="text"
                placeholder="Mobile number"
                required
                defaultValue={customerData?.number}
                name="number"
              />
            </label>

            <button className="btn-primary">Save</button>
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
              <p>Khana Pina hotel & Restaurant - Feni </p>
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
              {/* <button className="px">Payment</button>
               */}
              {deliveryLocation &&
              customerData?.email &&
              homeLocation &&
              subtotalPrice > 0 ? (
                <Button label={"Payment"} onClickHandler={handlePayment} />
              ) : (
                <Button
                  disabled={true}
                  label={"Payment"}
                  onClickHandler={handlePayment}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
