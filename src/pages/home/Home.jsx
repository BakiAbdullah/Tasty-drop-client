<<<<<<< HEAD
import Banner from "../../../src/Banner";
import Cards from "../../sections/Cards";
=======
import Banner from "../../components/Banner/Banner";
>>>>>>> b2c0b589ca29dc4b0c887e4c4ee0652d0e32cd98
import ReserveTable from "../../components/ReserveTable/ReserveTable";
import Reviews from "../../components/Reviews/Reviews";
import FoodType from "./FooodType/FoodType";
import UserCategory from "./userCategory/UserCategory";

const Home = () => {
  return (
<<<<<<< HEAD
    <div className="font-Fredoka">
      <Banner />
      {/* Banner  */}
      {/* <Banner />
      <Cards></Cards>
      <Reviews></Reviews> */}

      {/* Types of Food */}
      {/* <FoodType></FoodType> */}

      {/* Reserve table  */}
      {/* <ReserveTable /> */}
    </div>
=======
    <>
      <Banner />
      <Reviews></Reviews>
      <UserCategory></UserCategory>
      <FoodType></FoodType>
      <ReserveTable />
    </>
>>>>>>> b2c0b589ca29dc4b0c887e4c4ee0652d0e32cd98
  );
};

export default Home;
