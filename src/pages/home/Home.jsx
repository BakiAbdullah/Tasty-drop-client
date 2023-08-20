import Banner from "../../components/Banner/Banner";
import SponsorGallery from "./SponsorGallery/SponsorGallery";
// import ReserveTable from "../../components/ReserveTable/ReserveTable";
// import Reviews from "../../components/Reviews/Reviews";
// import FoodType from "./FoodType/FoodType";
import UserCategory from "./userCategory/UserCategory";
import DailyDeals from "../../components/shared/DailyDealsCard/DailyDeals";
import City from "./cities/City";
//messenger app
import MessengerCustomerChat from "react-messenger-customer-chat";

const Home = () => {
  return (
    <>
      <Banner />
      <SponsorGallery />
      {/* Reviews Section will be added in Restaurant Page */}
      {/* <Reviews></Reviews> */}
      <UserCategory></UserCategory>
      <City></City>
      <DailyDeals></DailyDeals>
      {/* Food types section will be added on restaurant page */}
      {/* <FoodType></FoodType> */}
      {/* Reserve a table section will be added on restaurant page */}
      {/* <ReserveTable /> */}

      {/* Messenger added here */}
      <MessengerCustomerChat
        pageId="1875434189178634"
        appId="240131418459493"
      />
    </>
  );
};

export default Home;
