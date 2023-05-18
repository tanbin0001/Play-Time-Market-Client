

import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProviders";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    console.log(location);
    if (loading) {
        return <div className=" flex justify-center mt-96"><progress className="progress w-56  "></progress></div>
    }
    if (user) {
        return children;
    } return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default PrivateRouter;