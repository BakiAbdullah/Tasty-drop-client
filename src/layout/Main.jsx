import Home from "../pages/home/Home";
import Header from "../components/shared/header/Header";
const Main = () => {
  return (
    <div className="overflow-hidden">
      <div>
        <Header />
        <Home />
      </div>
    </div>
  );
};

export default Main;
