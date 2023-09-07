import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="md:w-[720px] mx-auto">
        {" "}
        <Player autoplay loop src="./404.json"></Player>
      </div>
      <div className="text-center mt-10">
        <Link
          to="/"
          className="  p-4 text-white bg-pink text-center  text-lg font-semibold rounded-md cursor-pointer"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
