import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import Header from "../../src/components/shared/header/Header";
import Footer from "../components/shared/footer/Footer";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import { RightBar } from "../components/Utils/RightBar";

const Main = () => {
  const location = useLocation();
  const login = location.pathname.includes("login");
  const signup = location.pathname.includes("signup");
  const registerPage = location.pathname.includes("/partners/register");

  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAppLoading(false);
    }, 700);
  }, []); //it will show loader for 700 mili seconds......

  return (
    <>
      {appLoading ? (
        <Loader /> // it will show the loader while the app is loading........
      ) : (
        <>
          <Header />

          <div className="min-h-[calc(100vh-98px)] ">
            <Outlet />
          </div>
          {login || signup || registerPage ? "" : <Footer></Footer>}
          <Toaster />
        </>
      )}
    </>
  );
};

export default Main;
