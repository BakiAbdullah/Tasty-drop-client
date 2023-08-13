import Header from "../../src/components/shared/header/Header";

import { Outlet } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";
const Main = () => {
 
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-98px)] ">
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
