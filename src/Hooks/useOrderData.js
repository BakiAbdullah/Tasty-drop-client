import { useState, useEffect } from "react";
import useAuth from "../api/useAuth";
import useAxiosSecure from "./useAxiosSecure";

function useOrdersData() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const { axiosSecure } = useAxiosSecure();
  const [orders, setOrders] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);
  console.log(orders);
  console.log(user);

  // Using async to wait for the api response
  useEffect(() => {
    setLoading(true);
    const fetchOrders = async () => {
      try {
        const response = await axiosSecure.get(
          `orders/partner/${restaurantData?._id}`
        );
        setLoading(false);
        setOrders(response.data);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching orders:", error);
      }
    };

    if (restaurantData?._id) {
      fetchOrders();
    }
  }, [restaurantData, user?.email]);

  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get(`/restaurant/partnerEmail?email=${user?.email}`)
      .then((data) => {
        setRestaurantData(data.data);
        setLoading(false);
      });
  }, [user?.email]);

  return { orders, restaurantData, loading };
}

export default useOrdersData;
