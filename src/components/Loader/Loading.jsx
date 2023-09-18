import { Player } from "@lottiefiles/react-lottie-player";
import loader from "../../assets/icon/spinner.svg";
import loading from "../../assets/others/food-loader.json";
const Loading = () => {
  return (
    <div className="min-h-[calc(100vh-487px)] flex items-center justify-center">
      <Player
        autoplay
        loop
        src={loading}
        style={{ height: "300px", width: "300px" }}></Player>
    </div>
  );
};

export default Loading;
