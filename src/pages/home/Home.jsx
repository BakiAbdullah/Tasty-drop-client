import Banner from "../../components/Banner/Banner";
import SponsorGallery from "./SponsorGallery/SponsorGallery";
// import ReserveTable from "../../components/ReserveTable/ReserveTable";
// import Reviews from "../../components/Reviews/Reviews";
import FoodType from "./FoodType/FoodType";
import UserCategory from "./userCategory/UserCategory";
import DailyDeals from "../../components/shared/DailyDealsCard/DailyDeals";

const Home = () => {
  return (
    <>
      <Banner />
      <SponsorGallery />
      {/* Reviews Section will be added in Restaurant Page */}
      {/* <Reviews></Reviews> */} 
      <UserCategory></UserCategory>
      <DailyDeals></DailyDeals>
      <FoodType></FoodType>
      {/* Reserve a table section will be added on restaurant page */}
      {/* <ReserveTable /> */}
    </>
  );
};

export default Home;
