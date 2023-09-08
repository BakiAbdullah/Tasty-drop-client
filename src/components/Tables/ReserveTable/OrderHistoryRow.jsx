import React from "react";

export const OrderHistoryRow = ({ item }) => {
  const { image, foodName, _id, status, price, orderDate, orderId } = item;
  return (
    <tr className="">
      <td className="flex  gap-4 items-center my-3">
        <img
          className="w-32 rounded-2xl h-20 object-cover"
          src={image}
          alt=""
        />
        <span>
          <h1 className="">{foodName}</h1>
          <h1 className="mt-1 text-[15px] text-zinc-600">{orderDate}</h1>
        </span>
      </td>
      <td>{orderId}</td>
      <td className="">{price}</td>
      <td className="text-sm">{status}</td>
    </tr>
  );
};
