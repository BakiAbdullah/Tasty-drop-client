import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faClock,
  faEnvelope,
  faMapMarkerAlt,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const sampleOrders = [
  {
    id: 1,
    customer: "Abdul Rahman",
    address: "House 1, Road 2, Gulshan, Dhaka",
    items: ["Pizza", "Burger"],
    total: 25.99,
    status: "Pending",
  },
  {
    id: 2,
    customer: "Fatima Begum",
    address: "Apartment 3A, Dhanmondi, Dhaka",
    items: ["Sushi", "Salad"],
    total: 18.75,
    status: "Delivered",
  },
  {
    id: 3,
    customer: "Mohammed Ali",
    address: "House 5, Uttara, Dhaka",
    items: ["Pasta", "Cake"],
    total: 32.5,
    status: "Preparing",
  },
  {
    id: 4,
    customer: "Nasrin Chowdhury",
    address: "Apartment B2, Khulshi, Chittagong",
    items: ["Steak", "Fries"],
    total: 42.0,
    status: "Delivered",
  },
  {
    id: 5,
    customer: "Hasan Khan",
    address: "House 10, Baridhara, Dhaka",
    items: ["Ramen", "Spring Rolls"],
    total: 20.25,
    status: "Pending",
  },
  {
    id: 6,
    customer: "Ayesha Ahmed",
    address: "Apartment 7B, Banani, Dhaka",
    items: ["Biryani", "Naan"],
    total: 15.99,
    status: "Preparing",
  },
  {
    id: 7,
    customer: "Rahim Uddin",
    address: "House 3, Mirpur, Dhaka",
    items: ["Taco", "Guacamole"],
    total: 12.5,
    status: "Delivered",
  },
  {
    id: 8,
    customer: "Nusrat Jahan",
    address: "Apartment 4C, Uttara, Dhaka",
    items: ["Sushi", "Miso Soup"],
    total: 28.75,
    status: "Pending",
  },
  {
    id: 9,
    customer: "Shafiq Khan",
    address: "House 7, Chittagong",
    items: ["Burger", "Milkshake"],
    total: 16.0,
    status: "Delivered",
  },
  {
    id: 10,
    customer: "Amina Begum",
    address: "Apartment 2D, Mirpur, Dhaka",
    items: ["Pad Thai", "Spring Rolls"],
    total: 23.45,
    status: "Preparing",
  },
  {
    id: 11,
    customer: "Karim Ali",
    address: "House 15, Baridhara, Dhaka",
    items: ["Pizza", "Garlic Bread"],
    total: 30.25,
    status: "Delivered",
  },
  {
    id: 12,
    customer: "Taslima Akhter",
    address: "Apartment 5E, Uttara, Dhaka",
    items: ["Pasta", "Tiramisu"],
    total: 35.0,
    status: "Delivered",
  },
  {
    id: 13,
    customer: "Rabbi Rahman",
    address: "House 2, Khulshi, Chittagong",
    items: ["Burrito", "Chips & Salsa"],
    total: 18.99,
    status: "Pending",
  },
  {
    id: 14,
    customer: "Lubna Chowdhury",
    address: "Apartment 6F, Banani, Dhaka",
    items: ["Sushi", "Miso Soup"],
    total: 24.75,
    status: "Preparing",
  },
  {
    id: 15,
    customer: "Kamal Ahmed",
    address: "House 9, Mirpur, Dhaka",
    items: ["Burger", "Onion Rings"],
    total: 19.5,
    status: "Pending",
  },
];

const OrderList = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [sortOption, setSortOption] = useState("all");

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleSortChange = (value) => {
    setSortOption(value);
  };

  const sortedOrders =
    sortOption === "all"
      ? sampleOrders
      : sampleOrders.filter(
          (order) => order.status.toLowerCase() === sortOption
        );

  return (
    <div className="container mx-auto py-8">
      {selectedOrder && (
        <div className="mb-4 p-4 border rounded-lg bg-white">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
            <div className="flex items-center space-x-3">
              <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                Accept Order
              </button>
              <button className="bg-pink text-white px-3 py-1 rounded-md hover:bg-darkPink">
                Decline Order
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Customer Information
              </h3>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Name:</span>{" "}
                {selectedOrder.customer}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Address:</span>{" "}
                {selectedOrder.address}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Items:</span>{" "}
                {selectedOrder.items.join(", ")}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Total:</span> $
                {selectedOrder.total.toFixed(2)}
              </p>
              <div className="flex items-center">
                {selectedOrder.status === "Delivered" && (
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mr-1"
                  />
                )}
                {selectedOrder.status === "Preparing" && (
                  <FontAwesomeIcon
                    icon={faClock}
                    className="text-yellow-500 mr-1"
                  />
                )}
                {selectedOrder.status === "Pending" && (
                  <FontAwesomeIcon
                    icon={faTruck}
                    className="text-blue-300 mr-1"
                  />
                )}
                <span className="text-sm">{selectedOrder.status}</span>
              </div>
            </div>
          </div>
          <div className="flex mt-4 space-x-3">
            <Link
              className="px-3 py-1 rounded-md flex items-center space-x-2 underline hover:text-green-800"
              to={`/navigate/${selectedOrder.address}`}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Navigate to Address</span>
            </Link>
            <Link
              className="px-3 py-1 rounded-md flex items-center space-x-2 underline hover:text-indigo-800"
              to={`/contact/${selectedOrder.customer}`}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Contact Customer</span>
            </Link>
          </div>
        </div>
      )}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Order List</h2>
        <div className="flex mb-2">
          <label className="mr-2">Sort by:</label>
          <select
            className="border rounded px-3 py-2 bg-gray"
            value={sortOption}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="all">All</option>
            <option value="delivered">Delivered</option>
            <option value="preparing">Preparing</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto overflow-y-auto max-h-[500px]">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Customer</th>
              <th className="py-3 px-4 text-left">Address</th>
              <th className="py-3 px-4 text-left">Total</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedOrders.map((order, index) => (
              <tr
                key={order.id}
                className={`${
                  selectedOrder?.id === order.id
                    ? "bg-blue-100"
                    : index % 2 === 0
                    ? "bg-gray"
                    : "bg-white"
                } cursor-pointer transition-colors hover:bg-gray-100`}
                onClick={() => handleOrderClick(order)}
              >
                <td className="py-3 px-4">{order.id}</td>
                <td className="py-3 px-4">{order.customer}</td>
                <td className="py-3 px-4">{order.address}</td>
                <td className="py-3 px-4">${order.total.toFixed(2)}</td>
                <td className="py-3 px-4 flex items-center">
                  {order.status === "Delivered" && (
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-green-500 mr-1"
                    />
                  )}
                  {order.status === "Preparing" && (
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-yellow-500 mr-1"
                    />
                  )}
                  {order.status === "Pending" && (
                    <FontAwesomeIcon
                      icon={faTruck}
                      className="text-blue-300 mr-1"
                    />
                  )}
                  <span className="text-sm">{order.status}</span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-2">
                    <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600">
                      Accept
                    </button>
                    <button className="bg-pink text-white px-3 py-1 rounded-md hover:bg-darkPink">
                      Decline
                    </button>
                  </div>
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
