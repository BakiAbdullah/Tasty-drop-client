import Banner from "../../components/Banner/Banner";
import ReserveTable from "../../components/ReserveTable/ReserveTable";
import Reviews from "../../components/Reviews/Reviews";
import FoodType from "./FooodType/FoodType";
import UserCategory from "../../sections/userCategory";

const Home = () => {
  return (
    <div className="font-Fredoka">
      {/* Banner  */}
      <Banner />
      <Reviews></Reviews>
      <UserCategory></UserCategory>
      {/* Types of Food */}
      <FoodType></FoodType>
      {/* Reserve table  */}
      <ReserveTable />
    </div>
  );
};

export default Home;
