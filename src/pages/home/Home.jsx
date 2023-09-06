import SponsorGallery from "./SponsorGallery/SponsorGallery";
import UserCategory from "./userCategory/UserCategory";
import DailyDeals from "../../components/shared/DailyDealsCard/DailyDeals";
import City from "./cities/City";
//messenger app
// import MessengerCustomerChat from "react-messenger-customer-chat";
import MainBanner from "../../components/Banner/MainBanner";

const Home = () => {
  return (
    <>
      <MainBanner />
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

export default Home;
