import { createBrowserRouter } from "react-router-dom";
import Main from "./../../layout/Main";
import Home from "../../pages/home/Home";
import Rider from "../../pages/rider/Rider";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignUp from "../../pages/signup/SignUp";
import ScrollToTop from "../../components/ScrollToTop";
import Partner from "../../pages/partner/Partner";
import Worker from "../../pages/Worker/Worker";
import ErrorPage from "../../components/shared/ErrorPage/ErrorPage";
import Login from "../../pages/Login/Login";
import Restaurant from "../../pages/home/Restaurant/Restaurant";
import AllRestaurant from "../../pages/AllRestaurant/AllRestaurant";
import PartnerRegistration from "../../pages/partner/PartnerRegistration";
import PrivateRoute from "../privateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Main />
        <ScrollToTop></ScrollToTop>
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "riders",
        element: <Rider></Rider>,
      },
      {
        path: "partners",
        element: <Partner></Partner>,
      },
      {
        path: "teams",
        element: <Worker></Worker>,
      },
      {
        path: "city/:cityName",
        element: <AllRestaurant></AllRestaurant>,
      },
      {
        path: "restaurant",
        element: <Restaurant></Restaurant>,
      },

      {
        path: "/partners/register",
        element: <PartnerRegistration></PartnerRegistration>,
      },

      // Login & Signup Routes
      {
        path: "/loginpage",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default router;
