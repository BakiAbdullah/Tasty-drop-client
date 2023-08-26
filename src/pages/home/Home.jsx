import SponsorGallery from "./SponsorGallery/SponsorGallery";
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
  const { isSearching, searchQuery } = useContext(AuthContext);
  return (
    <>
      <MainBanner />
      {isSearching && searchQuery ? (
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
