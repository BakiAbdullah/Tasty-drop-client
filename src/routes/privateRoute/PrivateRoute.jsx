import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const PrivateRoute = ({ children }) => {
    const user = useSelector(state => state.user.user)
    const loading = useSelector((state) => state.user.loading);
    const location = useLocation();
    
    console.log(user)

    if (loading) {
        return <Loader></Loader>
    }

    if (user) {
        return children
    }
    else{
        toast.error('Please Login to continue')
    }
    
    return (
        <Navigate to='/loginpage' state={{ loading: location }} ></Navigate>
        
    );
};

export default PrivateRoute;