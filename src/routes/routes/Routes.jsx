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
import DashboardLayout from "../../layout/DashboardLayout";
import { AdminDashboard } from "../../pages/Dashboard/Admin/AdminDashboard";
import { RestaurantsList } from "../../pages/Dashboard/Admin/RestaurantsList";
import { ManageRestaurant } from "../../pages/Dashboard/Admin/ManageRestaurant";
import { ManageUsers } from "../../pages/Dashboard/Admin/ManageUsers";
import { PartnersDashboard } from "../../pages/Dashboard/Partner/PartnersDashboard";
import { RiderDashboard } from "../../pages/Dashboard/Rider/RiderDashboard";

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
        element: (
          <PrivateRoute>
            <PartnerRegistration></PartnerRegistration>
          </PrivateRoute>
        ),
        // element:<PartnerRegistration />
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

  // Dashboard Routes ==========>
  {
    path: "/dashboard",
    element: (
      <>
        <ScrollToTop></ScrollToTop>
        <DashboardLayout></DashboardLayout>
      </>
    ),
    children: [
      // admin routes
      { path: "/dashboard/admin", element: <AdminDashboard></AdminDashboard> },
      { path: "/dashboard/restaurants-list", element: <RestaurantsList /> },
      { path: "/dashboard/manage-restaurant", element: <ManageRestaurant /> },
      { path: "/dashboard/manage-users", element: <ManageUsers /> },

      // rider routes
      { path: "/dashboard/rider", element: <RiderDashboard></RiderDashboard> },

      // partner routes
      {
        path: "/dashboard/partners",
        element: <PartnersDashboard></PartnersDashboard>,
      },
      {
        path: "/dashboard/manage",
        element: <PartnersDashboard></PartnersDashboard>,
      },
    ],
  },
]);
export default router;
