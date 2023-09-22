import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { RiErrorWarningLine } from "react-icons/ri";

import EmptyState from "../../../components/Utils/EmptyState";
import restaurantImg from "../../../assets/icon/restaurant.svg";
import { ManageRestaurantCard } from "../../../components/Cards/ManageRestaurantCard";
import Spinner from "../../../components/Utils/Spinner";
export const ManageRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Add a loading state

  const dangerToast = (message) => {
    toast.custom(() => (
      <div
        className={`transform transition-transform duration-300 ease-in-out w-full max-w-md bg-red-500 border border-red-400 p-2 rounded-md flex items-center`}>
        <div className="text-red-100">
          <RiErrorWarningLine className="w-5 h-5" />
        </div>
        <div className="text-red-100 ml-3">{message}</div>
      </div>
    ));
  };

  // Function to update the status and send it to the server
  const updateStatusAndSendToServer = (restaurantId, newStatus) => {
    fetch(
      `${import.meta.env.VITE_LIVE_URL}restaurants/${restaurantId}/status`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // Handle the response from the server if needed
        console.log(data);

        // Update the local state with the updated status
        const updatedRestaurants = restaurants.map((restaurant) =>
          restaurant._id === restaurantId
            ? { ...restaurant, status: newStatus }
            : restaurant
        );

        setRestaurants(updatedRestaurants);
        if (newStatus === "approved") {
          toast.success(`The restaurant has been ${newStatus}`);
        } else {
          dangerToast(`The restaurant has been ${newStatus}`);
        }
      })
      .catch((error) => {
        console.error("Error updating status:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_LIVE_URL}restaurants?status=${"pending"}`)
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data);
        setIsLoading(false); // Set isLoading to false when data is fetched
      });
  }, []);

  return (
    <>
      {isLoading ? ( // Display loading indicator
        <div className="text-center">
          <Spinner />
        </div>
      ) : restaurants &&
        Array.isArray(restaurants) &&
        restaurants.length > 0 ? (
        restaurants.map((restaurant) => (
          <ManageRestaurantCard
            key={restaurant._id}
            restaurant={restaurant}
            updateStatusAndSendToServer={updateStatusAndSendToServer}
          />
        ))
      ) : (
        <>
          <EmptyState
            imageSrc={restaurantImg}
            text={"Dang!"}
            message={"No incoming restaurant requests."}
          />
        </>
      )}
    </>
  );
};
