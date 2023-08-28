import { createBrowserRouter } from "react-router-dom";
import Main from "./../../layout/Main";
import Home from "../../pages/home/Home";
import Rider from "../../pages/rider/Rider";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignUp from "../../pages/signup/SignUp";
import Partner from "../../pages/partner/Partner";
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
import { PartnersDashboard } from "../../pages/Dashboard/Partner/PartnersDashboard";
import { RiderDashboard } from "../../pages/Dashboard/Rider/RiderDashboard";
import BusinessPartner from "../../pages/BusinessPartner/BusinessPartner";
import AddMenu from "../../pages/Dashboard/Partner/AddMenu";
import ManageMenu from "../../pages/Dashboard/Partner/ManageMenu";
import ManageBookings from "../../pages/Dashboard/Partner/ManageBookings";
import ScrollToTop from "../../components/Utils/ScrollToTop";
import ManageUsers from "./../../pages/Dashboard/Admin/ManageUsers";
import PartnerRoute from "../PartnerRoute/PartnerRoute";

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
        path: "business",
        element: <BusinessPartner></BusinessPartner>,
      },
      {
        path: "city/:cityName",
        element: <AllRestaurant></AllRestaurant>,
      },
      {
        path: "restaurant/:id",
        element: <Restaurant></Restaurant>,
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_LIVE_URL}singleRestaurant/${params.id}`
          ),
      },

      {
        path: "/partners/register",
        element: (
          <PrivateRoute>
            <PartnerRegistration></PartnerRegistration>
          </PrivateRoute>
        ),
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
      { path: "admin", element: <AdminDashboard></AdminDashboard> },
      { path: "restaurants-list", element: <RestaurantsList /> },
      { path: "manage-restaurant", element: <ManageRestaurant /> },
      { path: "manage-users", element: <ManageUsers /> },

      // rider routes
      { path: "rider", element: <RiderDashboard></RiderDashboard> },

      // Partner/Restaurant Owner routes
      {
        path: "partners",
        element: (
          <PartnerRoute>
            <PartnersDashboard></PartnersDashboard>
          </PartnerRoute>
        ),
      },
      {
        path: "rider",
        element: <RiderDashboard></RiderDashboard>,
      },
      {
        path: "add-menu",
        element: (
          <PartnerRoute>
            <AddMenu></AddMenu>
          </PartnerRoute>
        ),
      },
      {
        path: "manage-menu",
        element: (
          <PartnerRoute>
            <ManageMenu></ManageMenu>
          </PartnerRoute>
        ),
      },
      {
        path: "manage-bookings",
        element: (
          <PartnerRoute>
            <ManageBookings></ManageBookings>
          </PartnerRoute>
        ),
      },
    ],
  },
]);
export default router;
