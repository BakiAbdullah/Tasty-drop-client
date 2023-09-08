import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(6); // Number of orders to display per page
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch orders from your backend API
    axios
      .get(`${import.meta.env.VITE_LIVE_URL}api/orders`)
      .then((response) => {
        setOrders(response.data); // Set the fetched orders in the state
        setLoading(false); // Update loading status
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      });
  }, []);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAcceptOrder = (orderId) => {
    axios
      .put(`${import.meta.env.VITE_LIVE_URL}api/orders/accept/${orderId}`)
      .then((response) => {
        // Handle success, show a success toast
        toast.success(response.data.message);
        // Refresh the orders list
        fetchOrders();
      })
      .catch((error) => {
        // Handle error, show an error toast
        toast.error("Error accepting order");
        console.error("Error accepting order:", error);
      });
  };

  const handleDeclineOrder = (orderId) => {
    axios
      .put(`${import.meta.env.VITE_LIVE_URL}api/orders/decline/${orderId}`)
      .then((response) => {
        // Handle success, show a success toast
        toast.success(response.data.message);
        // Refresh the orders list
        fetchOrders();
      })
      .catch((error) => {
        // Handle error, show an error toast
        toast.error("Error declining order");
        console.error("Error declining order:", error);
      });
  };

  const fetchOrders = () => {
    // Fetch orders from your backend API
    axios
      .get(`${import.meta.env.VITE_LIVE_URL}api/orders`)
      .then((response) => {
        setOrders(response.data); // Set the fetched orders in the state
        setLoading(false); // Update loading status
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-2xl font-semibold mb-4">Manage Orders</h2>
      <div className="bg-white rounded-lg p-6 shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Order ID
              </th>
              {/* Add more table headers based on your data */}
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Customer
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Items
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Total
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentOrders.map((order) => (
              <tr key={order._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order._id}
                </td>
                {/* Render more order details based on your data */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.customerData.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {/* Render the list of items here */}
                  {order.foodArray.map((item) => (
                    <div key={item.productTotalPrice}>
                      {item.productTotalPrice}
                    </div>
                  ))}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{`$${order.totalPrice}`}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.paymentStatus === true
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {order.paymentStatus === true ? "Paid" : "Unpaid"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.paymentStatus === true ? (
                    <div className="flex space-x-2">
                      <button
                        className="px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                        onClick={() => handleAcceptOrder(order._id)}
                      >
                        Accept
                      </button>
                      <button
                        className="px-2 py-1 bg-pink text-white rounded-md hover:bg-red-600"
                        onClick={() => handleDeclineOrder(order._id)}
                      >
                        Decline
                      </button>
                    </div>
                  ) : (
                    <span className="text-red-600">Unpaid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        <ul className="flex space-x-2">
          {Array.from({ length: Math.ceil(orders.length / ordersPerPage) }).map(
            (_, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};
