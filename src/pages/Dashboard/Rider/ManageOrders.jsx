import { useState } from "react";

export const ManageOrders = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: "John Doe", items: "Burger, Fries", total: "$15.00", status: "Pending" },
    { id: 2, customer: "Jane Smith", items: "Pizza, Salad", total: "$20.00", status: "In Progress" },
    { id: 3, customer: "Alice Johnson", items: "Sushi, Miso Soup", total: "$30.00", status: "Pending" },
    { id: 4, customer: "Mohammad Rahman", items: "Biryani, Raita", total: "$12.00", status: "Pending" },
    { id: 5, customer: "Ayesha Ahmed", items: "Kebabs, Naan", total: "$18.00", status: "Pending" },
  ]);

  const handleAcceptOrder = (orderId) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: "In Progress" } : order
    );
    setOrders(updatedOrders);
  }; //it will make the order status from pending to in progress.

  const handleDeclineOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
  }; //it will decline the order............

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-2xl font-semibold mb-4">Manage Orders</h2>
      <div className="bg-white rounded-lg p-6 shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Items
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.items}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.total}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                      order.status === "In Progress" ? "bg-blue-100 text-blue-800" :
                      ""
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.status === "Pending" && (
                    <div className="flex space-x-2">
                      <button
                        className="px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                        onClick={() => handleAcceptOrder(order.id)}
                      >
                        Accept
                      </button>
                      <button
                        className="px-2 py-1 bg-pink text-white rounded-md hover:bg-darkPink"
                        onClick={() => handleDeclineOrder(order.id)}
                      >
                        Decline
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
