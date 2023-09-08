import { toast } from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import useAuth from "../../api/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  console.log(user);

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (user) {
    return children;
  } else {
    toast.error("Please Login to continue");
  }

  return <Navigate to="/loginpage" state={{ loading: location }}></Navigate>;
};

export default PrivateRoute;
