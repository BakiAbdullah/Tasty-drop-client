import { Link } from "react-router-dom";

const CategoryCard = ({ imageSrc, title, description, linkTo }) => {
    return (
      <div>
      <img className="rounded-3xl" src={imageSrc} alt={title} />
      <p className="my-5">{description}</p>
      <Link
        to={linkTo}
        className="bg-pink rounded-3xl py-2 px-4 text-white font-medium hover:bg-darkPink"
      >
        {title}
      </Link>
    </div>
    );
  };
  
  export default CategoryCard;
  