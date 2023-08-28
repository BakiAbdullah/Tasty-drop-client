import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useGetRoleApisByEmailQuery } from "../../redux/feature/roleApis";

const RoleBasedRoute = ({ children, allowedRoles }) => {
    const location = useLocation()
    const { data: userRole = {} } = useGetRoleApisByEmailQuery(`${ user?.email }`);
    const user = useSelector((state) => state.user.user);
    // Check if the user's role is in the allowedRoles array
    if (user && allowedRoles.includes(userRole?.role)) {
      return children;
    }
  
    // Redirect to a suitable route if the user is not authorized
    return <Navigate to="/" state={{ from: location }} replace />;
  };
  
  export default RoleBasedRoute;