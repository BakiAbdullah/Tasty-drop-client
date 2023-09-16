import { useState, useEffect } from "react";
import axios from "axios";
import {
  faTimesCircle,
  faTruck,
  faFileAlt,
  faUser,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmptyState from "../../../components/Utils/EmptyState";
import plateIcon from "../../../assets/icon/plate.svg";

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

  const handleOrderAction = async (orderId, action) => {
    try {
      const apiUrl = `${import.meta.env.VITE_LIVE_URL}api/orders/${action}/${orderId}`;
      const response = await axios.put(apiUrl);
      if (response.status === 200) {
        // Update the delivery status of the selected order
        setSelectedOrder((prevOrder) => ({
          ...prevOrder,
          delivery: action === "cancel" ? "pending" : "Delivered",
        }));
        setShowModal(false);
        window.location.reload();
      } else {
        console.error("Error performing order action:", response.data.message);
      }
    } catch (error) {
      console.error("Error performing order action:", error);
    }
  };
  
  return orders.length ? (
    <div className="container mx-auto py-4">
      {selectedOrder && (
        <div
          className={`${
            showModal ? "fixed" : "hidden"
          } inset-0 overflow-y-auto flex items-center justify-center z-50`}
        >
          <div className="fixed inset-0 bg-gray opacity-50"></div>
          <div className="bg-white w-full md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-lg p-6 z-10 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-blue-600">
                <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                Order Details
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-red-600 focus:outline-none"
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
                        selectedOrder.paymentStatus
                          ? "text-green-600"
                          : "text-red-600"
                      } font-semibold`}
                    >
                      {selectedOrder.paymentStatus ? "Paid" : "Unpaid"}
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

            {selectedOrder?.delivery === "Received by Rider" && (
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => handleOrderAction(selectedOrder._id, "cancel")}
                  className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 mr-2"
                >
                  Cancel Order
                </button>
                <button
                  onClick={() =>
                    handleOrderAction(selectedOrder._id, "delivered")
                  }
                  className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700"
                >
                  Delivered
                </button>
              </div>
            )}
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
                  {` ${order.homeAddress.district}, ${order.homeAddress.upazila}, ${order.homeAddress.area}`}
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
  ) : (
    <EmptyState
      text={"No order to deliver"}
      imageSrc={plateIcon}
      message={"You don't have any accepted orders for delivery."}
    />
  );
};

export default OrderList;
