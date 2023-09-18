import { useState, useEffect } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import axios from "axios";

export const RiderDashboard = () => {
  const [dataFilter, setDataFilter] = useState('all'); // Default filter is all
  const [riderData, setRiderData] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_LIVE_URL}api/rider-dashboard-data`)
      .then((response) => {
        setRiderData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching rider data:", error);
      });
  }, []);
console.log(riderData);
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-2xl font-semibold mb-4">Rider Dashboard</h2>
      <div className="flex space-x-6">
        <div className="flex-1 bg-white rounded-lg p-6 shadow-md">
          <div className="mb-4">
            {riderData ? (
              <BarChart width={800} height={400} data={riderData.data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="orderDate" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="delivery" fill="#8884d8" name="Deliveries" />
                <Bar dataKey="totalTips" fill="#82ca9d" name="Tips" />
                <Bar dataKey="totalEarnings" fill="pink" name="Earnings ($)" />
              </BarChart>
            ) : (
              <div>Loading chart...</div>
            )}
          </div>
          <div className="flex space-x-2">
            {/* Buttons for data filtering */}
          </div>
        </div>
        <div className="flex-1 bg-white rounded-lg p-6 shadow-md">
          <div className="mb-4">
            {riderData ? (
              <>
                {dataFilter === 'all' || dataFilter === 'deliveries' ? (
                  <div>
                    <div className="text-xl font-semibold mb-2">Total Deliveries</div>
                    <div className="text-2xl text-purple-500">{riderData.totalDeliveries}</div>
                  </div>
                ) : null}
                {dataFilter === 'all' || dataFilter === 'tips' ? (
                  <div>
                    <div className="text-xl font-semibold mb-2">Total Tips</div>
                    <div className="text-2xl text-green-500">${riderData.totalTips}</div>
                  </div>
                ) : null}
                {dataFilter === 'all' || dataFilter === 'earnings' ? (
                  <div>
                    <div className="text-xl font-semibold mb-2">Total Earnings</div>
                    <div className="text-2xl text-pink">${riderData.totalEarnings}</div>
                  </div>
                ) : null}
              </>
            ) : (
              <div>Loading ...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
