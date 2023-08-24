import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClock, faTruck } from '@fortawesome/free-solid-svg-icons';

const sampleOrders = [
    { id: 1, customer: 'John Doe', items: ['Pizza', 'Burger'], total: 25.99, status: 'Pending' },
    { id: 2, customer: 'Jane Smith', items: ['Sushi', 'Salad'], total: 18.75, status: 'Delivered' },
    { id: 3, customer: 'Michael Johnson', items: ['Pasta', 'Cake'], total: 32.50, status: 'Preparing' },
    { id: 4, customer: 'Emily Brown', items: ['Steak', 'Fries'], total: 42.00, status: 'Delivered' },
    { id: 5, customer: 'David Lee', items: ['Ramen', 'Spring Rolls'], total: 20.25, status: 'Pending' },
    { id: 6, customer: 'Sophia Wilson', items: ['Biryani', 'Naan'], total: 15.99, status: 'Preparing' },
    { id: 7, customer: 'William Clark', items: ['Taco', 'Guacamole'], total: 12.50, status: 'Delivered' },
    { id: 8, customer: 'Olivia Martinez', items: ['Sushi', 'Miso Soup'], total: 28.75, status: 'Pending' },
    { id: 9, customer: 'James Turner', items: ['Burger', 'Milkshake'], total: 16.00, status: 'Delivered' },
    { id: 10, customer: 'Ava Garcia', items: ['Pad Thai', 'Spring Rolls'], total: 23.45, status: 'Preparing' },
    { id: 11, customer: 'Liam Hernandez', items: ['Pizza', 'Garlic Bread'], total: 30.25, status: 'Delivered' },
    { id: 12, customer: 'Isabella Smith', items: ['Pasta', 'Tiramisu'], total: 35.00, status: 'Delivered' },
    { id: 13, customer: 'Noah Johnson', items: ['Burrito', 'Chips & Salsa'], total: 18.99, status: 'Pending' },
    { id: 14, customer: 'Emma Davis', items: ['Sushi', 'Miso Soup'], total: 24.75, status: 'Preparing' },
    { id: 15, customer: 'Ethan Brown', items: ['Burger', 'Onion Rings'], total: 19.50, status: 'Pending' },
  ];
  

  const OrderList = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [sortOption, setSortOption] = useState('all');
  
    const handleOrderClick = (order) => {
      setSelectedOrder(order);
    };
  
    const handleSortChange = (value) => {
      setSortOption(value);
    };
  
    const sortedOrders = sortOption === 'all'
      ? sampleOrders
      : sampleOrders.filter(order => order.status.toLowerCase() === sortOption);
  
      return (
        <div className="w-full p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 inline-block mr-8">Order List</h2>
        <span>Click on the row to select it</span>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div className="flex mb-2 md:mb-0">
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
          <div className="md:text-right">
            <span className="block md:inline-block text-gray">Showing {sortedOrders.length} orders</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Customer</th>
                <th className="py-3 px-4 text-left">Items</th>
                <th className="py-3 px-4 text-left">Total</th>
                <th className="py-3 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {sortedOrders.map((order, index) => (
                <tr
                  key={order.id}
                  className={`${
                    selectedOrder?.id === order.id ? 'bg-blue-100' : index % 2 === 0 ? 'bg-gray' : 'bg-white'
                  } cursor-pointer transition-colors hover:bg-gray-100`}
                  onClick={() => handleOrderClick(order)}
                >
                  <td className="py-3 px-4">{order.id}</td>
                  <td className="py-3 px-4">{order.customer}</td>
                  <td className="py-3 px-4">{order.items.join(', ')}</td>
                  <td className="py-3 px-4">${order.total.toFixed(2)}</td>
                  <td className="py-3 px-4 flex items-center">
                    {order.status === 'Delivered' && <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-1" />}
                    {order.status === 'Preparing' && <FontAwesomeIcon icon={faClock} className="text-yellow-500 mr-1" />}
                    {order.status === 'Pending' && <FontAwesomeIcon icon={faTruck} className="text-blue-300 mr-1" />}
                    <span className="text-sm">{order.status}</span>
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