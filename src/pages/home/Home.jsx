import Banner from "../../components/Banner/Banner";
import ReserveTable from "../../components/ReserveTable/ReserveTable";
import Reviews from "../../components/Reviews/Reviews";
import FoodType from "./FooodType/FoodType";
import UserCategory from "./userCategory/UserCategory";

const Home = () => {
  return (
    <>
      <Banner />
      <Reviews></Reviews>
      <UserCategory></UserCategory>
      <FoodType></FoodType>
      <ReserveTable />
    </>
  );
};

export default Home;
