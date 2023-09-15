import { faClipboard, faFileAlt, faTimesCircle, faTruck, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";

export const OrderHistoryRow = ({ item }) => {
  const { image, itemName, _id, orderDate, transactionId, orderInfo, cashOnDelivery, totalPrice } = item;
  // const items = item.map(item=>item)
  console.log(item)
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {selectedOrder && (
        <div
          className={`${showModal ? "fixed" : "hidden"
            } inset-0 overflow-y-auto flex items-center justify-center z-50`}
        >
          <div className="fixed inset-0 bg-slate-400 opacity-50"></div>
          <div className="bg-white w-full md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-lg p-6 z-10 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-blue-600">
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
                      className="flex justify-between items-center mb-2"
                    >
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
                    ${selectedOrder.orderInfo
                      .reduce((total, item) => total + item.productTotalPrice, 0)
                      .toFixed(2)}
                  </span>
                </div>
                <div className="mt-3">
                  <span className="text-gray-700">
                    Payment Status:{" "}
                    <span
                      className={`${selectedOrder.cashOnDelivery
                        ? "text-green-600"
                        : "text-red-300"
                        } font-semibold`}
                    >
                      {selectedOrder.cashOnDelivery ? "COD" : "Online"}
                    </span>
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-gray-700">
                    Received by Rider{" "}
                    <FontAwesomeIcon icon={faTruck} className="text-blue-600 ml-2" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <tr className="">
        <td className="flex  gap-4 items-center my-3">
          <span>
            {
              transactionId
            }
            {/* <h1 className="mt-1 text-[15px] text-zinc-600">{orderDate}</h1> */}
          </span>
        </td>
        <td>
          {orderDate}
        </td>
        <td>
          {
            orderInfo.length
          }
        </td>
        <td>{totalPrice} $
        </td>

        <td className="text-sm "><span className={` px-3 py-0 rounded-md font-semibold ${cashOnDelivery ? "bg-green-600" : "bg-red-300"}`} >{cashOnDelivery ? 'cod' : 'online'}</span></td>
        <td onClick={() => handleOrderClick(item)} className="btn cursor-pointer">More info</td>
      </tr>
    </>
  );
};
