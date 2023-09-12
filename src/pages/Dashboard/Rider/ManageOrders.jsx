import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Pagination from "../../../components/Dashboard/Pagination/Pagination";

// Define API endpoints as constants
const API_URL = `${import.meta.env.VITE_LIVE_URL}api/orders`;

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 6;
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(API_URL);
      setOrders(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleOrderAction = async (orderId, actionType) => {
    try {
      const response = await axios.put(`${API_URL}/${actionType}/${orderId}`);
      toast.success(response.data.message);
      fetchOrders();
    } catch (error) {
      const errorMessage = actionType === "accept" ? "accepting" : "declining";
      toast.error(`Error ${errorMessage} order`);
      console.error(`Error ${errorMessage} order:`, error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const thClass =
    "px-6 py-3 text-left text-xs text-slate-600 uppercase tracking-wider";
  const tdClass = "px-6 py-4 whitespace-nowrap text-sm text-gray-900";

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-2xl font-semibold mb-4">Manage Orders</h2>
      <div className="bg-white rounded-lg p-6 shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className={thClass}>Order Info</th>
              <th className={thClass}>Items</th>
              <th className={thClass}>Total</th>
              <th className={thClass}>Status</th>
              <th className={thClass}>Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders
              .slice(
                (currentPage - 1) * ordersPerPage,
                currentPage * ordersPerPage
              )
              .map((order) => (
                <tr key={order._id}>
                  <td className={tdClass}>
                    <div>
                      <div>{order.customerData.name}</div>
                      <span className="text-xs">
                        {`${order.homeAddress.area}, ${order.homeAddress.upazila}, ${order.homeAddress.district}`}
                      </span>
                    </div>
                  </td>

                  <td className={tdClass}>
                    {order.foodArray.map((item) => (
                      <div key={item.productTotalPrice}>
                        {item.productTotalPrice}
                      </div>
                    ))}
                  </td>
                  <td className={tdClass}>{`$${order.totalPrice}`}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        order.paymentStatus === true
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {order.paymentStatus === true ? "Paid" : "Unpaid"}
                    </span>{" "}
                    &nbsp;
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100">
                      {order.delivery}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button
                        className="px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                        onClick={() => handleOrderAction(order._id, "accept")}
                      >
                        Accept
                      </button>
                      <button
                        className="px-2 py-1 bg-pink text-white rounded-md hover:bg-red-600"
                        onClick={() => handleOrderAction(order._id, "decline")}
                      >
                        Decline
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(orders.length / ordersPerPage)}
        onPageChange={paginate}
      />
    </div>
  );
};

export default ManageOrders;
