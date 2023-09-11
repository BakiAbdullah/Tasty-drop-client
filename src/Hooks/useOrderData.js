import { useState, useEffect } from "react";
import useAuth from "../api/useAuth";
import useAxiosSecure from "./useAxiosSecure";

function useOrdersData() {
  const { user } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axiosSecure.get(`orders/partner?email=${user?.email}`).then((data) => {
      setOrders(data.data);
    });
  }, [user?.email]);

  return orders;
}

export default useOrdersData;
