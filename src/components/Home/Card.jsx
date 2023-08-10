import { BiShoppingBag } from "react-icons/bi";
const Card = ({ cardDetails }) => {
  return (
    <div className="border-8 rounded-xl hover:border-pink border-yellow-500 p-4 w-96">
      <img className="rounded-xl" src={cardDetails.image} alt="" />
      <p className="font-semibold text-xl mt-3 hover:text-pink">
        {cardDetails.foodName}
      </p>
      <p>{cardDetails.cuisine}</p>
      <div className="flex justify-between">
        <p className="font-semibold text-2xl">${cardDetails.price} USD</p>
        <span className="bg-yellow-500 hover:bg-pink rounded-md p-2">
          <BiShoppingBag size={24}></BiShoppingBag>
        </span>
      </div>
    </div>
  );
};

export default Card;
