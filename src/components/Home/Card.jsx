import { BiShoppingBag } from 'react-icons/bi';
const Card = ({ cardDetails }) => {
    
    return (
        <div className="border-4 rounded-lg  hover:border-[#f3274c] border-yellow-500 p-4">
            <img className="rounded" src={cardDetails.image} alt="" />
            <p className="font-semibold text-xl mt-3 hover:text-[#f3274c]">{cardDetails.foodName}</p>
            <p>{cardDetails.cuisine}</p>
            <div className="flex justify-between">
                <p className="font-semibold text-2xl">${cardDetails.price} USD</p>
                <BiShoppingBag size={24} className='bg-yellow-500 hover:bg-[#f3274c] rounded-md'></BiShoppingBag>
            </div>
        </div>
    );
};

export default Card;