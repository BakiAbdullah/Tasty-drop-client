import Header from "../../src/components/shared/header/Header";

import { Outlet } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";
import { useLocation } from "react-router-dom";
const Main = () => {
  const location = useLocation();
   const login = location.pathname.includes("login");
   const signup = location.pathname.includes("signup");
 
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-98px)] ">
        <Outlet />
      </div>
      {login || signup ? "" : <Footer></Footer>}
    </>
  );
};

export default Main;
