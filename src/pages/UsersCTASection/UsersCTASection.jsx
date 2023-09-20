import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const UsersCTASection = ({
  ctaImg,
  heading,
  subHeading,
  btnLabel,
  link,
  userLocation,
}) => {
  const navigate = useNavigate();
  const navigateToForm = () => {
    navigate(link, { state: { from: userLocation } });
  };
  return (
    <div className="w-[90%] xl:w-[70%] flex flex-col-reverse md:flex-row mx-auto gap-20 items-center justify-center my-28">
      <div>
        <h5 className="text-pink text-2xl xl:text-3xl font-bold">{heading}!</h5>
        <p className="text-black/70 py-3 text-xs xl:text-base">{subHeading}</p>
        {/* <Link to={link}> */}
        <Button onClickHandler={navigateToForm} label={btnLabel}></Button>
        {/* <button>
            <Navigate to={link} state={{ from: about }} replace >{btnLabel}</Navigate>
          </button> */}
        {/* </Link> */}
      </div>
      <div className="rounded-lg">
        <img className="rounded-3xl" src={ctaImg} alt="" />
      </div>
    </div>
  );
};

export default UsersCTASection;
