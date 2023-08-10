import Home from "../pages/home/Home";
import Header from "../components/shared/header/Header";
import Footer from "../components/shared/footer/Footer";
const Main = () => {
  return (
    <div className="overflow-hidden">
      <div>
        <Header />
        <Home />
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
