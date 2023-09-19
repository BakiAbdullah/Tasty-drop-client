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
        <div className="bg-gray ">
          <div className=" pt-24 max-w-5xl mx-auto ">
            <h1 className="text-2xl py-5 font-medium font-sans">
              Order History
            </h1>
            <table className="min-w-full leading-normal pt-">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold">
                    Restaurant Name
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold">
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold">
                    Quentity
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold">
                    Total Price
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold">
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold">
                    review
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold">
                    action
                  </th>
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
