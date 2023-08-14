import CategoryCard from "../../../components/ReserveTable/CategoryCard";
import team from "../../../assets/asset/Category Card/team.jpg"
import deliveryMan from "../../../assets/asset/Category Card/delivery-man.jpg"
import restaurant from "../../../assets/asset/Category Card/restaurant (1).jpg"

const UserCategory = () => {
    return (
        <div className="m-10 md:m-20">
            <p className="text-5xl font-bold text-center text-black my-3 md:my-5">user UserCategory</p> 
            <div className="grid md:grid-cols-3 gap-10">
                <CategoryCard image={team} description={"A dynamic and inclusive workplace, where you will have the freedom to create your own journey. Find your next adventure in Tasty Drop."} buttonText={'Join the team!'}></CategoryCard>
                <CategoryCard image={restaurant} description={"Grow your business while focusing on what you want to: making delicious food. Team up with Tasty Drop and tap into a fresh audience."} buttonText={"Become a partner!"}></CategoryCard>
                <CategoryCard image={deliveryMan} description={"Join the rider community. We enable the freedom to pursue your dreams and passions, providing the flexibility and means to make it happen."} buttonText={"Become a rider!"}></CategoryCard>
            </div>
        </div>
    );
};

export default UserCategory;