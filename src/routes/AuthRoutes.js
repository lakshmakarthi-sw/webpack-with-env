import React from 'react';
import { useLocation, Navigate } from "react-router-dom";
import { checkAuth } from '../utils/services';

const AuthRoutes = ({ children }) => {
    let location = useLocation();
    if (checkAuth() === null) {
        return <Navigate to="/reports/login" state={{ from: location }} replace />;
    }
    return children;
}

export default AuthRoutes;