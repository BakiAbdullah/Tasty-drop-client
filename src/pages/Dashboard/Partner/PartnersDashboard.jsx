import {
  BsFillCartFill,
  BsFillBagPlusFill,
  BsFillPeopleFill,
  BsCurrencyExchange,
} from "react-icons/bs";
import DashboardCards from "./DashboardCards/DashboardCards";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import useOrdersData from "../../../Hooks/useOrderData";

const data = [
  {
    name: "Jan",
    expenses: 400,
    Sales: 6400,
    amt: 2400,
  },
  {
    name: "Feb",
    expenses: 300,
    Sales: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    expenses: 600,
    Sales: 2898,
    amt: 2290,
  },
  {
    name: "Apr",
    expenses: 280,
    Sales: 3908,
    amt: 2000,
  },
  {
    name: "May",
    expenses: 718,
    Sales: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    expenses: 690,
    Sales: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    expenses: 1490,
    Sales: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    expenses: 390,
    Sales: 1300,
    amt: 2100,
  },
  {
    name: "Sep",
    expenses: 1490,
    Sales: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    expenses: 890,
    Sales: 7300,
    amt: 2100,
  },
  {
    name: "Nov",
    expenses: 990,
    Sales: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    expenses: 1490,
    Sales: 5900,
    amt: 2100,
  },
];

const renderCustomizedLabel = (props) => {
  const { x, y, width, value } = props;
  const radius = 5;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle">
        {value.split(" ")[1]}
      </text>
    </g>
  );
};

export const PartnersDashboard = () => {
  const { orders } = useOrdersData();
  console.log(orders);

  // Getting email addresses of customers from all orders (Using it for customer count of a restaurant)
  const email = new Set(
    orders && orders?.map((order) => order.customerData.email)
  );
  const customerEmails = Array.from(email);

  // Calculating the total sales of a restaurant
  const totalSales =
    orders &&
    orders
      ?.map((item) => item.totalPrice)
      .reduce((acc, current) => acc + current, 0);

  return (
    <div className="lg:max-w-5xl max-w-4xl text-lg font-medium grid lg:grid-cols-4 gap-5 mx-auto ">
      <DashboardCards
        icon={<BsFillCartFill className="cursor-pointer text-white text-xl" />}
        title="Total Sales"
        value={`$${totalSales}`}
        percentage="+2.58%"
      />
      <DashboardCards
        icon={
          <BsCurrencyExchange className="cursor-pointer text-white text-xl" />
        }
        title="Total Expenses"
        value="$323"
        percentage="5.18%"
      />
      <DashboardCards
        icon={
          <BsFillPeopleFill className="cursor-pointer text-white text-xl" />
        }
        title="Total Customers"
        value={customerEmails && customerEmails.length}
      />
      <DashboardCards
        icon={
          <BsFillBagPlusFill className="cursor-pointer text-white text-xl" />
        }
        title="Total Orders"
        value={orders.length}
        percentage="27"
      />

      <div className="lg:col-span-4 bg-white rounded-md py-5 mt- h-[500px] dark-content">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 25,
              bottom: 5,
            }}
            barSize={15}>
            <CartesianGrid strokeDasharray="1" />
            <XAxis dataKey="name" height={50} dy={15} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Sales" fill="#FF9B50" minPointSize={6}>
              <LabelList dataKey="name" content={renderCustomizedLabel} />
            </Bar>
            <Bar dataKey="expenses" fill="#9E9FA5" minPointSize={10} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
