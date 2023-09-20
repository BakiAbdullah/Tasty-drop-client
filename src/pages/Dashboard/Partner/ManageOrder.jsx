import toast from "react-hot-toast";
import useOrdersData from "../../../Hooks/useOrderData";
import axios from "axios";
import { RxCheckCircled, RxCrossCircled } from "react-icons/rx";
import EmptyState from "../../../components/Utils/EmptyState";
import resImg from "../../../assets/icon/res.svg";
import Spinner from "../../../components/Utils/Spinner";
// Define API endpoints as constants
const API_URL = `${import.meta.env.VITE_LIVE_URL}api/orders`;

const ManageOrder = () => {
  const { orders, loading } = useOrdersData();
  // const [orders, setOrders] = useState([]);
  console.log(orders);

  const handleOrderAction = async (orderId, actionType) => {
    try {
      const response = await axios.put(`${API_URL}/${actionType}/${orderId}`);
      toast.success(response.data.message);
    } catch (error) {
      const errorMessage = actionType === "accept" ? "accepting" : "declining";
      toast.error(`Error ${errorMessage} order`);
      console.error(`Error ${errorMessage} order:`, error);
    }
  };

  return (
    <>
      <div className="sm:px-4 w-full">
        <div className="py-4 md:py-7">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-black/80 dark-title">
            Order Details
          </p>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="bg-white py-4 md:py-7 px-4 lg:px-6 dark-content">
              {orders && Array.isArray(orders) && orders.length > 0 ? (
                <>
                  <div className="mt-7 overflow-x-auto">
                    <table className="w-full whitespace-nowrap">
                      <thead className="bg-gray dark:bg-zinc-900">
                        <tr className="text-left text-sm text-black/80">
                          <th className="py-3 px-4 dark-title">Order ID</th>
                          <th className="py-3 px-4 dark-title">Customer</th>
                          <th className="py-3 px-4 dark-title">
                            Order Date & Time
                          </th>
                          <th className="py-3 px-4 dark-title">
                            Payment Status
                          </th>
                          <th className="py-3 px-4 dark-title">Total</th>
                          <th className="py-3 px-4 dark-title">Order Status</th>
                          <th className="py-3 pr-6 text-center dark-title">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Conditionally rendering the orders*/}
                        {orders &&
                          orders?.map((order, i) => {
                            return (
                              <>
                                <tr key={i} className="">
                                  <td className="px-3 py-4 whitespace-no-wrap border-b border-gray">
                                    <div className="flex items-center ">
                                      <div>
                                        <div className="text-sm leading-5 text-indigo-500 dark:text-indigo-200">
                                          #{order?._id?.slice(0, 8)}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="px-4 py-4 whitespace-no-wrap border-b border-gray">
                                    <div className="text-sm leading-5 text-black/80 dark-text">
                                      {order.customerData.name}
                                    </div>
                                  </td>
                                  <td className="px-10 py-4 whitespace-no-wrap border-b text-black/80 border-gray text-sm leading-5 dark-text">
                                    <div>{order.orderDate}</div>{" "}
                                    {order.orderTime}
                                  </td>
                                  <td className="px-11 py-4 whitespace-no-wrap border-b text-black/80 border-gray text-sm leading-5">
                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                      <span
                                        aria-hidden
                                        className="absolute inset-0 bg-green-400 opacity-50 rounded-full"></span>
                                      <span className="relative text-xs dark-text">
                                        {order.cashOnDelivery ? "COD" : "Paid"}
                                      </span>
                                    </span>
                                  </td>
                                  <td className="px-4 py-4 whitespace-no-wrap border-b text-black/80 border-gray text-sm leading-5 dark-text">
                                    {order.totalPrice}
                                  </td>
                                  <td className="px-2 py-4 whitespace-no-wrap border-b border-gray text-black/80 text-sm leading-5">
                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                      <span
                                        aria-hidden
                                        className={`absolute dark-text  inset-0 ${
                                          order?.delivery ===
                                            "Declined by Rider" ||
                                          order?.delivery === "Declined"
                                            ? "bg-red-400"
                                            : order?.delivery === "Processing"
                                            ? "bg-green-400"
                                            : "bg-orange-300 "
                                        }  opacity-50 rounded-full`}></span>
                                      <span className="relative text-xs dark-text">
                                        {order?.delivery}
                                      </span>
                                    </span>
                                  </td>
                                  <td className="px-7 py-4 whitespace-no-wrap text-right cursor-pointer border-b border-gray text-sm leading-5">
                                    <div className="flex space-x-2">
                                      {/* Accept or Decline orders */}
                                      <RxCheckCircled
                                        className="text-3xl text-green-500 hover:scale-105 duration-300 rounded-full hover:text-green-600"
                                        onClick={() =>
                                          handleOrderAction(
                                            order?._id,
                                            "Processing"
                                          )
                                        }>
                                        Accept
                                      </RxCheckCircled>
                                      <RxCrossCircled
                                        className="text-3xl  text-red-400 hover:scale-105 duration-300 rounded-full hover:text-red-500"
                                        onClick={() =>
                                          handleOrderAction(
                                            order?._id,
                                            "Declined"
                                          )
                                        }>
                                        Decline
                                      </RxCrossCircled>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="h-3"></tr>
                              </>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </>
              ) : (
                <EmptyState
                  imageSrc={resImg}
                  text={"No orders found"}
                  message={"Wait for a moment!"}
                />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ManageOrder;
