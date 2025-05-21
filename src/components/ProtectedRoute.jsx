import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";
import SuspenseLoader from "./SuspenseLoader";

// const getUser = () => {
//   const user = JSON.parse(localStorage.getItem("user")); // adjust to your auth logic
//   return user;
// };

const ProtectedRoute = ({ allowedRoles }) => {
  const {user, loading}=useAppContext()
  // const user = getUser();
  if(loading){
    return<SuspenseLoader/>
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
