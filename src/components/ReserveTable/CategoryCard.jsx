
const CategoryCard = ({ image, description, buttonText }) => {
    return (
      <div>
        <img className="rounded-3xl" src={image} alt="" />
        <p className="my-5">
          {description}
        </p>
        <button className="bg-pink rounded-3xl py-2 px-4 text-white font-medium hover:bg-darkPink">{buttonText}</button>
      </div>
    );
  };
  
  export default CategoryCard;
  