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
  }

  return <Navigate to="/loginpage" state={{ loading: location }}></Navigate>;
};

export default PrivateRoute;
