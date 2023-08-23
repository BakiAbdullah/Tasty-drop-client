import deliveryMan from "../../assets/asset/Category Card/delivery-man.jpg";

import dealsImage from "../../assets/asset/facility-card-images/deals&discount.jpg";
import earningImage from "../../assets/asset/facility-card-images/transparentEarning.jpg";
import workImage from "../../assets/asset/facility-card-images/flexible-work.jpg";
import gearImage from "../../assets/asset/facility-card-images/riderGear.jpg";
import UsersCTASection from "../UsersCTASection/UsersCTASection";
import FacilityCard from "../../components/Cards/FacilityCard";
import BannerTemplate from "../../components/Banner/dynamicBanner/BannerTemplate";

const Rider = () => {
  const facilities = [
    { title: "WORK WHEN YOU WANT TO", image: workImage },
    { title: "DEALS & DISCOUNTS", image: dealsImage },
    { title: "TRANSPARENT EARNINGS", image: earningImage },
    { title: "RIDER GEAR", image: gearImage },
  ];

  return (
    <>
      <BannerTemplate
        bannerImage={deliveryMan}
        heading={"Chooseyour ownRide"}
        subHeading={"Delivering freedom to any doorstep"}
        description={
          "We enable the freedom to pursue your dreams and passions, providing the flexibility and means to make it happen. Whether you’re looking for a side gig or to achieve a personal dream, we’re here to help you achieve your goals at your own pace."
        }></BannerTemplate>

      <UsersCTASection
        btnLabel={"Become a rider"}
        heading={"Hello Rider"}
        subHeading={
          "Whether you’re looking for a side gig or to achieve a personal dream, we’re here to help you achieve your goals at your own pace.!"
        }
        ctaImg={gearImage}
        link={"/partners/register"}
        userLocation={"rider"}></UsersCTASection>
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
