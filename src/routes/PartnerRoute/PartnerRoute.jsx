import { useGetRoleApisByEmailQuery } from "../../redux/feature/roleApis";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PartnerRoute = ({ children }) => {
  const user = useSelector((state) => state.user.user);
  const location = useLocation();
  // Geting user role from userRole api
  const { data: userRole = {} } = useGetRoleApisByEmailQuery(`${user?.email}`);
  if (user && userRole?.role === "partner") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default PartnerRoute;
