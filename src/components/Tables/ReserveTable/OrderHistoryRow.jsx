import {
  faClipboard,
  faFileAlt,
  faTimesCircle,
  faTruck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useState } from "react";
import Reatings from "../../Reatings/Reatings";
import useAuth from "../../../api/useAuth";
import { useGetRatingQuery } from "../../../redux/feature/baseApi";
import axios from "axios";

export const OrderHistoryRow = ({ item }) => {
  const { image, itemName, _id, orderDate, transactionId, orderInfo, cashOnDelivery, totalPrice, outletName } = item;

  // const { axiosSecure } = useAxiosSecure()
  const {user} = useAuth()
  
  
  // console.log(_id)
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedOrder1, setSelectedOrder1] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };
  console.log(selectedOrder1?._id)
  const handleReview = (review) => {
    setSelectedOrder1(review)
    setShowModal1(true)
  }
  const closeModal1 = () => {
    setShowModal1(false);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const {data: reviewData={} ,refetch } = useGetRatingQuery(`${selectedOrder1?._id}`,{refetchOnMountOrArgChange : true})
  console.log(reviewData)
  const [rate, setRate] = useState(0);
  useEffect(()=>{
    if(reviewData?.rating){
      setRate(reviewData?.rating)
    }
  },[reviewData?.rating])
  console.log(rate)
  const handelReviewSubmit = (event) => {
    event.preventDefault()
    const reviewText = event.target.text.value 
    console.log(reviewText)
    const data = { reviewText , restaurantId : selectedOrder1.restaurantId , rating : rate, userEmail : user?.email ,OrderId : selectedOrder1?._id   }
    axios.post(`${import.meta.env.VITE_LIVE_URL}review`,data)
    .then(res=>{
      if(res.data){
        event.target.reset()
        setShowModal1(false)
        refetch()
      }
    })
  }
  return (
    <>
      {selectedOrder && (
        <div
          className={`${
            showModal ? "fixed" : "hidden"
          } inset-0 overflow-y-auto flex items-center justify-center z-50`}>
          <div className="fixed inset-0 bg-slate-400 opacity-50"></div>
          <div className="bg-white w-full md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-lg p-6 z-10 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-blue-600">
                <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                Order Details
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-800 focus:outline-none">
                <FontAwesomeIcon icon={faTimesCircle} size="lg" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  Customer Information
                </h3>
                <p className="text-gray-700 mt-3">
                  <span className="font-semibold">Name:</span>{" "}
                  {selectedOrder.customerData.name}
                </p>
                <p className="text-gray-700 mt-3">
                  <span className="font-semibold">Full Address:</span>{" "}
                  {`${selectedOrder.homeAddress.area}, ${selectedOrder.homeAddress.upazila}, ${selectedOrder.homeAddress.district}, ${selectedOrder.homeAddress.division}`}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  <FontAwesomeIcon icon={faClipboard} className="mr-2" />
                  Order Summary
                </h3>
                <ul className="text-gray-700 mt-3">
                  {selectedOrder.orderInfo.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center mb-2">
                      <span>{item.itemName}</span>
                      <span className="font-semibold">
                        ${item.productTotalPrice.toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
                <hr className="my-4 border-gray-300" />
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Total:</span>
                  <span className="text-2xl text-blue-600">
                    $
                    {selectedOrder.orderInfo
                      .reduce(
                        (total, item) => total + item.productTotalPrice,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </div>
                <div className="mt-3">
                  <span className="text-gray-700">
                    Payment Status:{" "}
                    <span
                      className={`${
                        selectedOrder.cashOnDelivery
                          ? "text-green-600"
                          : "text-red-300"
                      } font-semibold`}>
                      {selectedOrder.cashOnDelivery ? "COD" : "Online"}
                    </span>
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-gray-700">
                    Received by Rider{" "}
                    <FontAwesomeIcon
                      icon={faTruck}
                      className="text-blue-600 ml-2"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedOrder1 && (
        <div
          className={`${showModal1 ? "fixed" : "hidden"
            } inset-0 overflow-y-auto flex items-center justify-center z-50`}
        >
          <div className="fixed inset-0 bg-slate-400 opacity-50"></div>
          <div className="bg-white w-full md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-lg p-6 z-10 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-blue-600">
                <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                Review
              </h2>
              <button
                onClick={closeModal1}
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                <FontAwesomeIcon icon={faTimesCircle} size="lg" />
              </button>
            </div>
            <form className="w-full " onSubmit={handelReviewSubmit} >
              <textarea name="text" id="" rows="5" required className="w-full rounded-md"></textarea>
              <p className="w-full flex justify-between">
                <Reatings rate={rate} setRate={setRate} data={reviewData} size={26} />
                { reviewData?.OrderId === selectedOrder1?._id ? <input disabled  type="submit" value="submit" className=" cursor-not-allowed px-4 rounded-full bg-black font-semibold text-white py-2" />
                : <input  type="submit" value="submit" className=" cursor-pointer px-4 rounded-full bg-pink font-semibold text-white py-2" />}
              </p>
            </form>
          </div>
        </div>
      )}
      <tr className="text-left space-y-3">
        <td className=" text-left ">
          <span>
            {/* <img src={photo} alt="" /> */}
            <p>{outletName}</p>
            {/* <h1 className="mt-1 text-[15px] text-zinc-600">{orderDate}</h1> */}
          </span>
        </td>
        <td className="text-left">
          {orderDate}
        </td>
        <td className="text-center">
          {
            orderInfo.length
          }
        </td>
        <td className="text-center">{totalPrice} $
        </td>

        <td className="text-sm text-center "><span className={` px-3 py-0 rounded-md font-semibold ${cashOnDelivery ? "bg-green-600" : "bg-red-300"}`} >{cashOnDelivery ? 'cod' : 'online'}</span></td>
        {/* <td  className="btn cursor-pointer flex ">review</td> */}
        <td className=" cursor-pointer">  <span onClick={() => handleReview(item)} className="bg-blue-400 px-3 py-2 rounded-full">give review</span>  </td>
        <td onClick={() => handleOrderClick(item)} className="btn cursor-pointer  ">More info</td>
      </tr>
    </>
  );
};
