// src/components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
// import { isAuthenticated } from "../utils/auth";

const PrivateRoute = ({ element }) => {
   const isAuthenticated= !!localStorage.getItem("token");
  return isAuthenticated ? false : <Navigate to="/login" />;
};

export default PrivateRoute;
