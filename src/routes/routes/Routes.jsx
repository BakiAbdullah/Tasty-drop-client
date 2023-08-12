import { createBrowserRouter } from "react-router-dom";
import Main from "./../../layout/Main";
import Home from "../../pages/home/Home";
import Errorpage from "../../components/shared/ErrorPage/Errorpage";
import Rider from "../../pages/rider/Rider";

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
        path: 'riders',
        element:<Rider></Rider>
      }
    ],
  },
]);
export default router;
