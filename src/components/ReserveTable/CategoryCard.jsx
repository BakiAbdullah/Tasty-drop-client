
const CategoryCard = ({ cardDetails }) => {
    return (
      <div>
        <img className="rounded-xl" src={cardDetails.image} alt="" />
        <p >
          {cardDetails.description}
        </p>
        <button>click here</button>
      </div>
    );
  };
  
  export default CategoryCard;
  