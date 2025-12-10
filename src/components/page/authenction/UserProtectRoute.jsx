import React from 'react'
import { Navigate } from "react-router-dom"
const UserProtectRoute = ({ children }) => {
    const token = localStorage.getItem("authtoken");
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

export default UserProtectRoute
