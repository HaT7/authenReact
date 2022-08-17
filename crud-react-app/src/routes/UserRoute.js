import React, {  useContext } from "react";
import { Navigate } from "react-router-dom";
import{AuthenticationContext} from "../service/authentication/authentication.context";

const UserRoute = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  return user && user.token ? children : <Navigate to="/login" />;
};

export default UserRoute;