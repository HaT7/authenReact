import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import{AuthenticationContext} from "../service/authentication/authentication.context";

const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  return user && user.token && user.role === "admin" ? children : <Navigate to="/login" />;
};

export default AdminRoute;