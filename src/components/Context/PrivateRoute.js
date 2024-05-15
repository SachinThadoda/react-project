import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";
import LoadingSpinner from "../Common/LoadingSpinner";
const PrivateRoute = () => {
    
    const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return <LoadingSpinner />;

  if (!isAuthenticated) return <Navigate to="/login" />;
  return <Outlet />;
};

export default PrivateRoute;