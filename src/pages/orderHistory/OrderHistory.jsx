import React from "react";
import EmptyState from "../../components/Utils/EmptyState";
import plateIcon from "../../assets/icon/plate.svg";
export const OrderHistory = () => {
  const orders = [];
  return (
    <>
      {orders && Array.isArray(orders) && orders.length > 0 ? (
        ""
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
