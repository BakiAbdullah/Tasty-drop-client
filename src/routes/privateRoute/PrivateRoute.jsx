import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const user = useSelector(state=> state.user.user)
  const loading = useSelector((state) => state.user.loading);
  

  if(loading) {
    return <h1>Loooooding!!</h1>
  }

  if(user) {
    return children
  } else {
    toast.error('Please Login to continue')
  }

  return (
  <Navigate to='/loginpage'></Navigate>
  );
};

export default PrivateRoute;