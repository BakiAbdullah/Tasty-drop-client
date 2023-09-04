import { useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

export const RiderDashboard = () => {
  const [dataFilter, setDataFilter] = useState('all'); // Default filter is all

  const data = [
    { day: 'Monday', deliveries: 15, tips: 45, earnings: 100 },
    { day: 'Tuesday', deliveries: 10, tips: 30, earnings: 75 },
    { day: 'Wednesday', deliveries: 25, tips: 75, earnings: 150 },
    { day: 'Thursday', deliveries: 20, tips: 60, earnings: 130 },
    { day: 'Friday', deliveries: 30, tips: 90, earnings: 180 },
    { day: 'Saturday', deliveries: 18, tips: 54, earnings: 110 },
    { day: 'Sunday', deliveries: 22, tips: 66, earnings: 140 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-2xl font-semibold mb-4">Rider Dashboard</h2>
      <div className="flex space-x-6">
        <div className="flex-1 bg-white rounded-lg p-6 shadow-md">
          <div className="mb-4">
            <BarChart width={800} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="deliveries" fill="#8884d8" name="Deliveries" />
              <Bar dataKey="tips" fill="#82ca9d" name="Tips" />
              <Bar dataKey="earnings" fill="pink" name="Earnings ($)" />
            </BarChart>
          </div>
          <div className="flex space-x-2">
            <button
              className={`px-4 py-2 rounded ${
                dataFilter === 'all' ? 'bg-red-500 text-white' : 'bg-gray-200'
              } hover:bg-gray-400 transition-colors`}
              onClick={() => setDataFilter('all')}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded ${
                dataFilter === 'deliveries' ? 'bg-purple-500 text-white' : 'bg-gray-200'
              } hover:bg-purple-400 transition-colors`}
              onClick={() => setDataFilter('deliveries')}
            >
              Deliveries
            </button>
            <button
              className={`px-4 py-2 rounded ${
                dataFilter === 'tips' ? 'bg-green-500 text-white' : 'bg-gray-200'
              } hover:bg-green-400 transition-colors`}
              onClick={() => setDataFilter('tips')}
            >
              Tips
            </button>
            <button
              className={`px-4 py-2 rounded ${
                dataFilter === 'earnings' ? 'bg-pink text-white' : 'bg-gray-200'
              } hover:bg-yellow-400 transition-colors`}
              onClick={() => setDataFilter('earnings')}
            >
              Earnings
            </button>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-lg p-6 shadow-md">
          <div className="mb-4">
            {dataFilter === 'all' || dataFilter === 'deliveries' ? (
              <div>
                <div className="text-xl font-semibold mb-2">Total Deliveries</div>
                <div className="text-2xl text-purple-500">150</div>
              </div>
            ) : null}
            {dataFilter === 'all' || dataFilter === 'tips' ? (
              <div>
                <div className="text-xl font-semibold mb-2">Total Tips</div>
                <div className="text-2xl text-green-500">$420</div>
              </div>
            ) : null}
            {dataFilter === 'all' || dataFilter === 'earnings' ? (
              <div>
                <div className="text-xl font-semibold mb-2">Total Earnings</div>
                <div className="text-2xl text-pink">$1015</div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
