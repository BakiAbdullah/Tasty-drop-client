import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../api/useAuth";

const RoleBasedRoute = ({ children, allowedRoles }) => {
  const { user, userRole } = useAuth();
  const location = useLocation();

  // Check if the user's role is in the allowedRoles array
  if (user && allowedRoles.includes(userRole)) {
    return children;
  }

  // Redirect to a suitable route if the user is not authorized
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default RoleBasedRoute;
