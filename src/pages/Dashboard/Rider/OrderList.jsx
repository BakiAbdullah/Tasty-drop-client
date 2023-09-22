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
import MyModal from "../../../components/Modal/MyModal";

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
      const apiUrl = `${
        import.meta.env.VITE_LIVE_URL
      }api/orders/${action}/${orderId}`;
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
    <div className=" mx-auto py-4">
      {selectedOrder && (
        <MyModal isOpen={showModal} closeModal={closeModal}>
          <div className="bg-white dark-content rounded-lg p-3 ">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-blue-600">
                <FontAwesomeIcon icon={faFileAlt} className="mr-2 dark-icon" />
                Order Details
              </h2>
              <button
                onClick={closeModal}
                className="hover:text-red-600 focus:outline-none dark-icon">
                <FontAwesomeIcon icon={faTimesCircle} size="lg" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold dark-title ">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  Customer Info:
                </h3>
                <p className="mt-3 dark-text">
                  <span className="font-semibold ">Name:</span>{" "}
                  {selectedOrder.customerData.name}
                </p>
                <p className="mt-3 dark-text">
                  <span className="font-semibold ">Full Address: <br />
                  </span>
                  {`${selectedOrder.customerData.address},${selectedOrder.homeAddress.upazila}, ${selectedOrder.homeAddress.district}, ${selectedOrder.homeAddress.division}`}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark-title">
                  <FontAwesomeIcon icon={faClipboard} className="mr-2" />
                  Order Summary
                </h3>
                <ul className="mt-3 dark-text ">
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
                  <span className="font-semibold dark-text">Total:</span>
                  <span className="text-2xl text-blue-600 dark-text">
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
                  <span className="text-gray-700 dark-text">
                    Payment Status:{" "}
                    <span
                      className={`${
                        selectedOrder.paymentStatus
                          ? "text-green-600"
                          : "text-red-600"
                      } font-semibold`}>
                      {selectedOrder.paymentStatus ? "Paid" : "Unpaid"}
                    </span>
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-gray-700 dark:text-yellow">
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
                  className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 mr-2">
                  Cancel Order
                </button>
                <button
                  onClick={() =>
                    handleOrderAction(selectedOrder._id, "delivered")
                  }
                  className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700">
                  Delivered
                </button>
              </div>
            )}
          </div>
        </MyModal>
      )}

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-zinc-700 mb-2 dark-title">
          Accepted Orders
        </h2>
      </div>
      <div className="order-list-table">
        <table className="w-full">
          <thead className="bg-zinc-300 dark:bg-zinc-900">
            <tr>
              <th className="py-3 px-4 text-left dark-title">Index</th>
              <th className="py-3 px-4 text-left dark-title">Customer</th>
              <th className="py-3 px-4 text-left dark-title">Full Address</th>
              <th className="py-3 px-4 text-left dark-title">Total</th>
              <th className="py-3 px-4 text-left dark-title">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order._id}
                className={`order-list-item dark-content ${
                  index % 2 === 0 ? "bg-white " : "bg-gray-light"
                }`}
                onClick={() => handleOrderClick(order)}>
                <td className="py-3 px-4 text-gray-800 dark-text">
                  {index + 1}
                </td>
                <td className="py-3 px-4 text-gray-800 dark-text">
                  {order.customerData.name}
                </td>
                <td className="py-3 px-4 text-gray-800 dark-text">
                  {` ${order.homeAddress.district}, ${order.homeAddress.upazila}`}
                </td>
                <td className="py-3 px-4 text-gray-800 dark-text">
                  Tk {order.totalPrice.toFixed(2)}
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
