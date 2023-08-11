import { BiShoppingBag } from "react-icons/bi";
const Card = ({ cardDetails }) => {
  return (
    <div className="border-8 rounded-xl hover:border-pink border-yellow hover:cursor-pointer duration-500 p-4 w-full mx-auto">
      <img className="rounded-xl" src={cardDetails.image} alt="" />
      <p className="font-semibold text-xl mt-3 hover:text-pink">
        {cardDetails.foodName}
      </p>
      <p>{cardDetails.cuisine}</p>
      <div className="flex justify-between">
        <p className="font-semibold text-2xl">${cardDetails.price} USD</p>
<<<<<<< HEAD
        <span className="bg-yellow-500 hover:bg-pink rounded-md p-2">
=======
        <span className="bg-yellow-500 hover:bg-pink hover:text-white duration-300 rounded-md p-2">
>>>>>>> 7d0746a0212110e87f6381f18ea5ac6c4fc2e817
          <BiShoppingBag size={24}></BiShoppingBag>
        </span>
      </div>
    </div>
  );
};

export default Card;
