import { useEffect } from "react";
import deliveryMan from "../../assets/asset/Category Card/delivery-man.jpg";
import BannerTemplate from "../../components/dynamicBanner/BannerTemplate";
import FacilityCard from "../../components/FacilityCard";
const Rider = () => {
    const facilities=[
        { title: "WORK WHEN YOU WANT TO", image: deliveryMan },
        { title: "DEALS & DISCOUNTS", image: deliveryMan },
        { title: "TRANSPARENT EARNINGS", image: deliveryMan },
        { title: "RIDER GEAR", image: deliveryMan }
      ]
    
  return (
    <>
      <BannerTemplate
        bannerImage={deliveryMan}
        heading={"Chooseyour ownRide"}
        subHeading={"Delivering freedom to any doorstep"}
        description={
          "We enable the freedom to pursue your dreams and passions, providing the flexibility and means to make it happen. Whether you’re looking for a side gig or to achieve a personal dream, we’re here to help you achieve your goals at your own pace."
        }
      ></BannerTemplate>
      <div>
        <p className="text-center text-3xl tracking-tighter text-sky-900 font-bold font-sans mt-20">
          {"LIFE'S ABOUT BALANCE, DECIDE WHEN TO WORK"}
        </p>

        <FacilityCard facilities={facilities}></FacilityCard>
      </div>
    </>
  );
};

export default Rider;
