import { useGetbaseApiByEmailQuery } from "../../redux/feature/baseApi";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RoleBasedRoute = ({ children, allowedRoles }) => {
  const user = useSelector((state) => state.user.user);
  const location = useLocation();
  const { data: userRole = {} } = useGetbaseApiByEmailQuery(`${user?.email}`);

  // Check if the user's role is in the allowedRoles array
  if (user && allowedRoles.includes(userRole?.role)) {
    return children;
  }

  // Redirect to a suitable route if the user is not authorized
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default RoleBasedRoute;
