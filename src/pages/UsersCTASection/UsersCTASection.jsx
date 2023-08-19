import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const UsersCTASection = ({ctaImg, heading, subHeading, btnLabel, link}) => {
  return (
    <div className="w-[70%] flex mx-auto gap-20 items-center justify-center my-28">
      <div>
        <h5 className="text-pink text-3xl font-bold">{heading}!</h5>
        <p className="text-black/70 py-3">{subHeading}</p>
        <Link to={link}>
          <Button label={btnLabel}></Button>
        </Link>
      </div>
      <div className="rounded-lg">
        <img className="rounded-3xl " src={ctaImg} alt="" />
      </div>
    </div>
  );
};

export default UsersCTASection;