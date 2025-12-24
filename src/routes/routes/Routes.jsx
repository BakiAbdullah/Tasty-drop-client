import { createBrowserRouter } from "react-router-dom";
import Main from "./../../layout/Main";
import Home from "../../pages/home/Home";
import Rider from "../../pages/rider/Rider";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignUp from "../../pages/signup/SignUp";
import Partner from "../../pages/partner/Partner";
import ErrorPage from "../../components/shared/ErrorPage/ErrorPage";
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
import ScrollToTop from "../../components/Utils/ScrollToTop";
import ManageUsers from "./../../pages/Dashboard/Admin/ManageUsers";
import OrderList from "../../pages/Dashboard/Rider/OrderList";
import ManageOrder from "../../pages/Dashboard/Partner/ManageOrder";
import SearchResultSection from "../../pages/home/SearchResult/SearchResultSection";
// import RoleBasedRoute from "../PartnerRoute/RoleBasedRoute";
import { Checkout } from "../../pages/orderCheckout/Checkout";
import PaymentSuccess from "../../pages/PaymentSuccess/PaymentSuccess";
import PaymentFail from "../../pages/PaymentFail/PaymentFail";
import ProfileDetails from "../../pages/profile/ProfileDetails";
import Login from "../../pages/login/Login";
import { OrderHistory } from "../../pages/orderHistory/OrderHistory";
import { TastyDropPlus } from "../../pages/tastydropPlus/TastyDropPlus";
import ManageOrders from "../../pages/Dashboard/Rider/ManageOrders";
import PushNotification from "../../components/PushNotification";
import UpdateRestaurantInfo from "../../pages/Dashboard/Partner/UpdateRestaurantInfo";
import FAQs from "../../pages/FAQs/FAQs";
import TermsConditions from "../../pages/Terms&Conditions/TermsConditions";
import PrivacyPolicy from "../../pages/PrivacyPolicy/PrivacyPolicy";
import AboutUsPage from "../../pages/AboutUs/AboutUsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Main />
        <ScrollToTop />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "push-notifications",
        element: <PushNotification />,
      },
      {
        path: "riders",
        element: <Rider />,
      },
      {
        path: "partners",
        element: <Partner />,
      },
      {
        path: "business",
        element: <BusinessPartner />,
      },
      {
        path: "profile",
        element: <ProfileDetails />,
      },
      {
        path: "search-results",
        element: <SearchResultSection />,
      },
      {
        path: "city/:cityName",
        element: (
          <>
            <ScrollToTop />
            <AllRestaurant />,
          </>
        ),
      },
      {
        path: `payment/success/:tranId`,
        element: <PaymentSuccess />,
      },
      {
        path: `payment/fail`,
        element: <PaymentFail />,
      },
      {
        path: "/tastydrop-plus",
        element: (
          <PrivateRoute>
            <TastyDropPlus />
          </PrivateRoute>
        ),
      },
      {
        path: "/order-history",
        element: (
          <PrivateRoute>
            <OrderHistory />
          </PrivateRoute>
        ),
      },
      {
        path: "/faqs",
        element: <FAQs />,
      },
      {
        path: "/about",
        element: <AboutUsPage />,
      },
      {
        path: "/terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "restaurant/:id",
        element: <Restaurant />,
      },

      {
        path: "/partners/register",
        element: (
          <PrivateRoute>
            <PartnerRegistration />
          </PrivateRoute>
        ),
      },

      // Login & Signup Routes
      {
        path: "/loginpage",
        element: <LoginPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/order-checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
    ],
  },

  // Dashboard Routes ==========>
  {
    path: "/dashboard",
    element: (
      <>
        <ScrollToTop />
        <DashboardLayout />
      </>
    ),

    children: [
      // admin routes
      {
        path: "admin",
        element: <AdminDashboard />,
      },
      {
        path: "restaurants-list",
        element: <RestaurantsList />,
      },
      {
        path: "manage-restaurant",
        element: <ManageRestaurant />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },

      // rider routes
      {
        path: "rider",
        element: <RiderDashboard />,
      },
      {
        path: "manage-orders",
        element: <ManageOrders />,
      },
      {
        path: "orders-list",
        element: <OrderList />,
      },

      // Partner/Restaurant Owner routes
      {
        path: "partner",
        element: <PartnersDashboard />,
      },
      {
        path: "add-menu",
        element: <AddMenu />,
      },
      {
        path: "manage-menu",
        element: <ManageMenu />,
      },
      {
        path: "manage-bookings",
        element: <ManageOrder />,
      },
      {
        path: "Update-Restaurant-info",
        element: <UpdateRestaurantInfo />,
      },
    ],
  },
]);
export default router;
