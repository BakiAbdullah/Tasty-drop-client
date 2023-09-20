import EmptyState from "../../components/Utils/EmptyState";
import plateIcon from "../../assets/icon/plate.svg";
import { OrderHistoryRow } from "../../components/Tables/ReserveTable/OrderHistoryRow";

import useAuth from "../../api/useAuth";
import { useGetOrdersQuery } from "../../redux/reduxApi/userOrderApi";
export const OrderHistory = () => {
  const { user } = useAuth();
  console.log(user);

  const { currentData: orders = [] } = useGetOrdersQuery(`${user?.email}`, {
    refetchOnMountOrArgChange: true,
  });
  console.log(orders);

  return (
    <>
      {orders && Array.isArray(orders) && orders.length > 0 ? (
        <div className="sm:px-4 lg:w-4/5 mx-auto pb-40">
          <div className="py-2 md:py-2 pl-4 lg:pl-10">
            <p className="text-base mt-36 sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-black/80">
              Order Details
            </p>
          </div>
          <div className="bg-white shadow-md pb-20 md:py-7 px-4 md:px-6 xl:px-10">
            <div className="mt-7 overflow-x-auto">
              <table className="w-full whitespace-nowrap">
                <thead className="bg-gray">
                  <tr className="text-left text-sm text-black/80">
                    <th className="py-3 px-4">Restaurant Name</th>
                    <th className="py-3 px-4">Order Date</th>
                    <th className="py-3 px-4">Total Quantity </th>
                    <th className="py-3 px-4">Total Price</th>
                    <th className="py-3 px-4">Delivery Method</th>
                    <th className="py-3 px-4">Review</th>
                    <th className="py-3 px-4">Action</th>
                  </tr>
                </thead>
                <tbody className="">
                  {orders?.map((item) => (
                    <OrderHistoryRow key={item._id} item={item} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <EmptyState
          text={"No orders"}
          imageSrc={plateIcon}
          message={"You don't have any orders in your history."}
        />
      )}
    </>
  );
};
