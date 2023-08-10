import Header from "../components/shared/header/Header";
import Footer from "../components/shared/footer/Footer";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <div>
      <div>
        <Header />
        <div className="min-h-[calc(100vh-98px)]">
          <Outlet />
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
