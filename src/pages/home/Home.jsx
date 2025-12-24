import SponsorGallery from "./SponsorGallery/SponsorGallery";
import UserCategory from "./userCategory/UserCategory";
import DailyDeals from "../../components/shared/DailyDealsCard/DailyDeals";
import City from "./cities/City";
//messenger app
import MessengerCustomerChat from "react-messenger-customer-chat";
import MainBanner from "../../components/Banner/MainBanner";
import FoodType from "./FoodType/FoodType";
import RecommendedRestaurant from "./RecommendedRestaurant/RecommendedRestaurant";
import DineInSection from "./DineInSection/DineInSection";
import NewsletterSection from "./NewsLetterSection/NewsLetterSection";

const Home = () => {
  return (
    <>
      <MainBanner />
      <SponsorGallery />
      <UserCategory />
      <City />
      <RecommendedRestaurant />
      <DineInSection />
      <FoodType />
      <NewsletterSection/>
      <DailyDeals />
      <MessengerCustomerChat
        pageId="1875434189178634"
        appId="240131418459493"
      />
    </>
  );
};

export default Home;
