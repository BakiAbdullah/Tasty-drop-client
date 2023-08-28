import { AiOutlineCreditCard } from "react-icons/ai";
import {
  BsArrowDownShort,
  BsArrowUpShort,
  BsCart2,
  BsCurrencyDollar,
} from "react-icons/bs";
import { FiUser } from "react-icons/fi";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// char demo data below
const data = [
  {
    name: "Jan",
    sales: 400,
    revenue: 240,
    customer: 200,
  },
  {
    name: "Feb",
    sales: 300,
    revenue: 138,
    customer: 210,
  },
  {
    name: "Mar",
    sales: 200,
    revenue: 980,
    customer: 220,
  },
  {
    name: "Apr",
    sales: 280,
    revenue: 308,
    customer: 400,
  },
  {
    name: "May",
    sales: 190,
    revenue: 400,
    customer: 281,
  },
  {
    name: "Jun",
    sales: 230,
    revenue: 380,
    customer: 200,
  },
  {
    name: "Jul",
    sales: 390,
    revenue: 430,
    customer: 900,
  },
  {
    name: "Aug",
    sales: 490,
    revenue: 300,
    customer: 500,
  },
  {
    name: "Sep",
    sales: 349,
    revenue: 430,
    customer: 210,
  },
  {
    name: "Oct",
    sales: 340,
    revenue: 300,
    customer: 500,
  },
  {
    name: "Nov",
    sales: 490,
    revenue: 300,
    customer: 100,
  },
  {
    name: "Dec",
    sales: 490,
    revenue: 400,
    customer: 100,
  },
];

export const AdminDashboard = () => {
  return (
    <div>
      <h1>Ecommerce</h1>
      <div className="lg:max-w-5xl text-lg font-medium  grid lg:grid-cols-4 gap-5 max-w-3xl mx-auto">
        <div className="bg-white hover:translate-y-1 duration-300   shadow-sm rounded-md w-full h-[120px] p-3">
          <div className="flex text-sm justify-between">
            <p className=" text-slate-400">Orders</p>
            <BsCart2 className="cursor-pointer text-blue-500 text-xl" />
          </div>

          <div className="flex my-2 items-center gap-1">
            <p>5,312</p>
            <p className="text-xs flex items-center text-red-600">
              {" "}
              <BsArrowDownShort />
              2.58%
            </p>
          </div>
          <div>
            <p className="cursor-pointer text-blue-500 text-sm">View Orders</p>
          </div>
        </div>
        {/* revenue */}
        <div className="bg-white hover:translate-y-1 duration-300   shadow-sm rounded-md w-full h-[120px] p-3">
          <div className="flex text-sm justify-between">
            <p className=" text-slate-400">Revenue</p>
            <BsCurrencyDollar className="cursor-pointer text-blue-500 text-xl" />
          </div>

          <div className="flex my-2 items-center gap-1">
            <p>$8,312</p>
            <p className="text-xs flex items-center text-green-600">
              {" "}
              <BsArrowUpShort />
              2.29%
            </p>
          </div>
          <div>
            <p className="cursor-pointer text-blue-500 text-sm">
              View Earnings
            </p>
          </div>
        </div>

        {/* customer */}
        <div className="bg-white hover:translate-y-1 duration-300   shadow-sm rounded-md w-full h-[120px] p-3">
          <div className="flex text-sm justify-between">
            <p className=" text-slate-400">Customer</p>
            <FiUser className="cursor-pointer text-blue-500 text-xl" />
          </div>

          <div className="flex my-2 items-center gap-1">
            <p>$18,312</p>
            <p className="text-xs flex items-center text-green-600">
              {" "}
              <BsArrowUpShort />
              5.16%
            </p>
          </div>
          <div>
            <p className="cursor-pointer text-blue-500 text-sm">All Customer</p>
          </div>
        </div>
        {/* Balance */}
        <div className="bg-white hover:translate-y-1 duration-300   shadow-sm rounded-md w-full h-[120px] p-3">
          <div className="flex text-sm justify-between">
            <p className=" text-slate-400">Balance</p>
            <AiOutlineCreditCard className="cursor-pointer text-blue-500 text-xl" />
          </div>

          <div className="flex my-2 items-center gap-1">
            <p>$35.64k</p>
          </div>
          <div>
            <p className="cursor-pointer text-blue-500 text-sm">
              Withdraw Money
            </p>
          </div>
        </div>

        {/* chart */}
        <div className="col-span-3  w-full h-96 rounded-md bg-white ">
          <div className="flex justify-between items-center">
            <p className="ml-4 my-5">Revenue</p>
            <div>
              <button className="border text-sm font-normal px-1 rounded-md">
                All
              </button>
              <button className="border text-sm mx-2 font-normal px-1 rounded-md">
                1M
              </button>
              <button className="border text-sm mr-2 font-normal px-1 rounded-md">
                6M
              </button>
              <button className="border text-sm mr-2 font-normal px-1 rounded-md">
                1Y
              </button>
            </div>
          </div>
          <div style={{ width: "100%", height: "75%" }}>
            <ResponsiveContainer>
              <AreaChart
                width={500}
                height={30}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stackId="1"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stackId="1"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
                <Area
                  type="monotone"
                  dataKey="customer"
                  stackId="1"
                  stroke="#ffc658"
                  fill="#ffc658"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-1 flex items-center justify-center w-full h-[280px] rounded-md bg-white ">
          <span>Sales Pi chart</span>
        </div>
      </div>
    </div>
  );
};
