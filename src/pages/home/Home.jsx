import SponsorGallery from "./SponsorGallery/SponsorGallery";
// import ReserveTable from "../../components/ReserveTable/ReserveTable";
// import Reviews from "../../components/Reviews/Reviews";
// import FoodType from "./FoodType/FoodType";
import UserCategory from "./userCategory/UserCategory";
import DailyDeals from "../../components/shared/DailyDealsCard/DailyDeals";
import City from "./cities/City";
//messenger app
// import MessengerCustomerChat from "react-messenger-customer-chat";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SearchResultSection from "./SearchResult/SearchResultSection";
import MainBanner from "../../components/Banner/MainBanner";

const Home = () => {
  const { isSearching } = useContext(AuthContext);
  return (
    <>
      <MainBanner />
      {isSearching ? (
        <SearchResultSection />
      ) : (
        <>
          <SponsorGallery />
          <UserCategory></UserCategory>
          <City></City>
          <DailyDeals></DailyDeals>
          {/* <MessengerCustomerChat
            pageId="1875434189178634"
            appId="240131418459493"
          /> */}
        </>
      )}
    </>
  );
};

export default Home;
