import { createBrowserRouter } from "react-router-dom";
import Main from "./../../layout/Main";
import Home from "../../pages/home/Home";
import Errorpage from "../../components/shared/ErrorPage/Errorpage";
import Rider from "../../pages/rider/Rider";
import Login from "../../pages/login/Login";
import SignUp from "../../pages/signup/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "riders",
        element: <Rider></Rider>,
      },

      // Login & Signup Routes
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
