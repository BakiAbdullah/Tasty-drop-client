import CategoryCard from "../../../components/CategoryCard";
import team from "../../../assets/asset/Category Card/team.jpg"
import deliveryMan from "../../../assets/asset/Category Card/delivery-man.jpg"
import restaurant from "../../../assets/asset/Category Card/restaurant.jpg"
import MainHeading from "../../../components/TitleTexts/MainHeading";

const UserCategory = () => {

    const categories = [
        {
          title: 'Work with us !',
          imageSrc: team,
          description: 'A dynamic and inclusive workplace, where you will have the freedom to create your own journey. Find your next adventure in Tasty Drop.',
          linkTo: '/teams',
        },
        {
          title: 'Partner with us !',
          imageSrc: restaurant,
          description: 'Grow your business while focusing on what you want to: making delicious food. Team up with Tasty Drop and tap into a fresh audience.',
          linkTo: '/partners',
        },
        {
          title: 'Ride with us !',
          imageSrc: deliveryMan,
          description: 'Join the rider community. We enable the freedom to pursue your dreams and passions, providing the flexibility and means to make it happen.',
          linkTo: '/riders',
        },
      ];
    
    return (
        <div className="m-10 md:m-20">
        <MainHeading title="User Category" />
        <div className="grid md:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    );
};

export default UserCategory;