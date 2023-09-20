import {
  faClipboard,
  faFileAlt,
  faTimesCircle,
  faTruck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";
import Ratings from "../../Ratings/Ratings";
import useAuth from "../../../api/useAuth";
import { useGetRatingQuery } from "../../../redux/feature/baseApi";
import axios from "axios";
import {MdRateReview} from 'react-icons/md'

export const OrderHistoryRow = ({ item }) => {
  const { image, itemName, _id, orderDate, transactionId, orderInfo, cashOnDelivery, totalPrice } = item;
  console.log(item)

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
          } inset-0 overflow-y-auto flex items-center justify-center z-50`}
        >
          <div className="fixed inset-0 bg-slate-400 opacity-50"></div>
          <div className="bg-white w-full md:w-2/5 rounded-lg p-6 z-10 lg:mx-0 mx-4 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl mb-2 font-semibold text-pink">
                <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                Order Details
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                <FontAwesomeIcon icon={faTimesCircle} size="lg" />
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                <FontAwesomeIcon icon={faUser} className="mr-2 text-pink" />
                Customer Information
              </h3>
              <p className="text-gray-700 my-3">
                <span className="font-semibold">Name:</span>{" "}
                {selectedOrder.customerData.name}
              </p>
              <p className="text-gray-700">
                <span>
                  <span className="font-semibold">Full Address:</span>
                  {`${selectedOrder.homeAddress.upazila}, ${selectedOrder.homeAddress.district}, ${selectedOrder.homeAddress.division}`}
                </span>{" "}
              </p>
              <p className="flex font-semibold mt-3">
                <span className="text-gray-700">
                  Payment Method:{" "}
                  <span
                    className={`${
                      selectedOrder.cashOnDelivery
                        ? "text-green-600"
                        : "text-red-300"
                    } font-semibold text-sm`}
                  >
                    {selectedOrder.cashOnDelivery ? "COD" : "Online"}
                  </span>
                </span>
              </p>
            </div>

            <h3 className="text-lg pt-8 font-semibold text-gray-800">
              <FontAwesomeIcon icon={faClipboard} className="mr-2 text-pink" />
              Order Summary
            </h3>
            <ul className="text-gray-700 mt-3">
              {selectedOrder.orderInfo.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center mb-2"
                >
                  <span>{`${item.quantity}x ${item.itemName} `}</span>
                  <span className="font-semibold">
                    ${item.productTotalPrice.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <hr className="my-4 border-black/20" />
            <div className="flex justify-between items-center">
                <span className="text-gray-700 font-semibold mr-4 text-xl text-pink">Total:</span>
              <span className="text-xl text-pink">
                $
                {selectedOrder.orderInfo
                  .reduce((total, item) => total + item.productTotalPrice, 0)
                  .toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}
      {selectedOrder1 && (
        <div
          className={`${
            showModal1 ? "fixed" : "hidden"
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
            <form className="w-full " onSubmit={handelReviewSubmit}>
              <textarea
                name="text"
                id=""
                rows="5"
                required
                className="w-full rounded-md"
              ></textarea>
              <p className="w-full flex justify-between">
                <Ratings
                  rate={rate}
                  setRate={setRate}
                  data={reviewData}
                  size={26}
                />
                {reviewData?.OrderId === selectedOrder1?._id ? (
                  <input
                    disabled
                    type="submit"
                    value="submit"
                    className=" cursor-not-allowed px-4 rounded-full bg-black font-semibold text-white py-2"
                  />
                ) : (
                  <input
                    type="submit"
                    value="submit"
                    className=" cursor-pointer px-4 rounded-full bg-pink font-semibold text-white py-2"
                  />
                )}
              </p>
            </form>
          </div>
        </div>
      )}
      <tr className="text-black/80">
        <td className="px-4 py-4 whitespace-no-wrap border-b border-gray">
          <div className="text-sm leading-5">
            {item.orderInfo[0].restaurantName}
          </div>
        </td>
        <td className="px-5 py-4 whitespace-no-wrap border-b  border-gray text-sm leading-5">
          {orderDate}
        </td>
        <td className="px-14 py-4 whitespace-no-wrap border-b text-black/80 border-gray text-sm leading-5">
          {orderInfo.length}
        </td>
        <td className="px-10 py-4 whitespace-no-wrap border-b text-black/80 border-gray text-sm leading-5">
          {totalPrice}
        </td>

        <td className="px-10 py-4 whitespace-no-wrap border-b border-gray text-sm leading-5">
          <span className="relative inline-block px-3 py-1 font- leading-tight">
            <span
              aria-hidden
              className={`absolute inset-0 ${
                cashOnDelivery ? " bg-red-300" : "bg-green-400"
              }  opacity-50 rounded-full`}
            ></span>
            <span className="relative text-xs">
              {cashOnDelivery ? "COD" : "online"}
            </span>
          </span>
        </td>

        <td className="py-4 whitespace-no-wrap border-b cursor-pointer border-gray text-sm leading-5">
          <span
            onClick={() => handleReview(item)}
            className="relative inline-block px-7 py-1 text-slate-700 font- leading-tight"
          >
            <span aria-hidden className={`absolute inset-0 rounded-md`}></span>
            <MdRateReview className="relative" size={22}></MdRateReview>
            {/* <span className="relative text-sm">Give review</span> */}
          </span>
        </td>
        <td className="whitespace-no-wrap border-b cursor-pointer border-gray text-sm leading-5">
          <span
            onClick={() => handleOrderClick(item)}
            className="relative inline-block px-3 py-1 text-white font- leading-tight"
          >
            <span
              aria-hidden
              className={`absolute inset-0 bg-blue-500  rounded-md`}
            ></span>
            <span className="relative text-xs">More Info</span>
          </span>
        </td>
      </tr>
    </>
  );
};
