import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  faCheckCircle,
  faClock,
  faEnvelope,
  faMapMarkerAlt,
  faTimesCircle,
  faTruck,
  faFileAlt,
  faUser,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const OrderList = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_LIVE_URL}api/orders`;

    axios
      .get(apiUrl)
      .then((response) => {
        const receivedByRiderOrders = response.data.filter(
          (order) => order.delivery === "Received by Rider"
        );
        setOrders(receivedByRiderOrders);
      })
      .catch((error) => {
        console.error("Error fetching accepted orders:", error);
      });
  }, []);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto py-8">
      {selectedOrder && (
        <div
          className={`${
            showModal ? "fixed" : "hidden"
          } inset-0 overflow-y-auto flex items-center justify-center z-50`}
        >
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="bg-white w-full md:w-1/2 rounded-lg p-6 z-10 shadow-lg">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                Order Details
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                <FontAwesomeIcon icon={faTimesCircle} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  Customer Information
                </h3>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Name:</span>{" "}
                  {selectedOrder.customerData.name}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Full Address:</span>{" "}
                  {`${selectedOrder.homeAddress.division}, ${selectedOrder.homeAddress.district}, ${selectedOrder.homeAddress.upazila}, ${selectedOrder.homeAddress.area}`}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  <FontAwesomeIcon icon={faClipboard} className="mr-2" />
                  Order Summary
                </h3>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Items:</span>{" "}
                  {selectedOrder.foodArray
                    .map((item) => item.productTotalPrice)
                    .join(", ")}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Total:</span> $
                  {selectedOrder.totalPrice.toFixed(2)}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Payment Status:</span>{" "}
                  {selectedOrder.paymentStatus ? "Paid" : "Unpaid"}
                </p>
                <div className="flex items-center">
                  <span className="text-sm text-gray-700">
                    Received by Rider{" "}
                    <FontAwesomeIcon
                      icon={faTruck}
                      className="text-blue-600 ml-1"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-green-600 mb-2">
          Accepted Orders
        </h2>
      </div>

      <div className="overflow-x-auto overflow-y-auto max-h-[500px]">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left">Index</th>
              <th className="py-3 px-4 text-left">Customer</th>
              <th className="py-3 px-4 text-left">Full Address</th>
              <th className="py-3 px-4 text-left">Total</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order._id}
                className="bg-white hover:bg-gray-100 cursor-pointer transition-colors"
                onClick={() => handleOrderClick(order)}
              >
                <td className="py-3 px-4 text-gray-800">{index + 1}</td>
                <td className="py-3 px-4 text-gray-800">
                  {order.customerData.name}
                </td>
                <td className="py-3 px-4 text-gray-800">
                  {`${order.homeAddress.division}, ${order.homeAddress.district}, ${order.homeAddress.upazila}, ${order.homeAddress.area}`}
                </td>
                <td className="py-3 px-4 text-gray-800">
                  ${order.totalPrice.toFixed(2)}
                </td>
                <td className="py-3 px-4">
                  <button className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
