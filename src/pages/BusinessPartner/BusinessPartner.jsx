import teamImg from "../../assets/asset/Category Card/team.jpg";

import ownJourneyImg from "../../assets/asset/facility-card-images/own-journey.jpg";
import innovationImg from "../../assets/asset/facility-card-images/innovation.jpg";
import businessImg from "../../assets/asset/facility-card-images/newCustomer.jpg";
import satisfiedImg from "../../assets/asset/facility-card-images/satisfiedCustomer.jpg";

import UsersCTASection from "../UsersCTASection/UsersCTASection";
import FacilityCard from "../../components/Cards/FacilityCard";
import BannerTemplate from "../../components/Banner/dynamicBanner/BannerTemplate";
const BusinessPartner = () => {
  const facilities = [
    { title: "FREEDOM TO CREATE YOUR OWN JOURNEY", image: ownJourneyImg },
    { title: "GROWING BUSINESS OPPORTUNITIES", image: businessImg },
    { title: "INNOVATION IN EVERYTHING WE DO", image: innovationImg },
    { title: "WE ARE FUELLED BY DIVERSITY", image: satisfiedImg },
  ];

  return (
    <>
      <BannerTemplate
        bannerImage={teamImg}
        heading={"Freedom to create your own journey"}
        subHeading={"Own your growth & development"}
        description={
          "You’ll be part of a team of +2000 people in eight countries across Europe. In our fast-paced and cutting-edge industry, you’ll experience the excitement of being at the forefront of innovation. With our international backing as part of the Delivery Hero family, while still maintaining a startup DNA and challenges unique to us, you’ll enjoy a unique blend of global reach and entrepreneurial spirit."
        }></BannerTemplate>
      <UsersCTASection
        btnLabel={"Apply for Business"}
        heading={"Hello"}
        subHeading={
          "Tasty Food is live across all major cities. Take your business to new heights by partnering with us!"
        }
        ctaImg={satisfiedImg}
        link={"/partners/register"}
        userLocation={"business"}></UsersCTASection>

      <div>
        <p className="text-center text-3xl tracking-tighter text-sky-900 font-bold font-sans mt-20">
          {"Why work at Tasty Drop?"}
        </p>

        <FacilityCard facilities={facilities}></FacilityCard>
      </div>
    </>
  );
};

export default BusinessPartner;
