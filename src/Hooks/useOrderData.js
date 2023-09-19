import { useState, useEffect } from "react";
import useAuth from "../api/useAuth";
import useAxiosSecure from "./useAxiosSecure";

function useOrdersData() {
  const { user } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  const [orders, setOrders] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);
console.log(orders)
console.log(user)

// Using async to wait for the api response
 useEffect(() => {
   const fetchOrders = async () => {
     try {
       const response = await axiosSecure.get(
         `orders/partner/${restaurantData?._id}`
       );
       setOrders(response.data);
     } catch (error) {
       console.error("Error fetching orders:", error);
     }
   };

   if (restaurantData?._id) {
     fetchOrders();
   }
 }, [restaurantData, user?.email]);

  useEffect(() => {
    axiosSecure
      .get(`/restaurant/partnerEmail?email=${user?.email}`)
      .then((data) => {
        setRestaurantData(data.data);
      });
  }, [user?.email]);

  return {orders, restaurantData};
}

export default useOrdersData;
