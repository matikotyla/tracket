import { FunctionComponent } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "hooks";
import { PublicRouteProps } from "./PublicRoute.props";

const PublicRoute: FunctionComponent<PublicRouteProps> = ({ to = "/" }) => {
  const { authenticated } = useAuth();

  return authenticated ? <Navigate to={to} /> : <Outlet />;
};

export default PublicRoute;
