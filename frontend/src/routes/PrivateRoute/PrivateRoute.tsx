import { FunctionComponent } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "hooks";
import { PrivateRouteProps } from "./PrivateRoute.props";

const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({ to = "/" }) => {
  const { authenticated } = useAuth();

  return authenticated ? <Outlet /> : <Navigate to={to} />;
};

export default PrivateRoute;
