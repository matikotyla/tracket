import { useLazyQuery, useQuery, useReactiveVar } from "@apollo/client";
import { Loader } from "components";
import { useAuth, useUser } from "hooks";
import useGetUser from "hooks/useGetUser";
import { Dashboard } from "pages";
import { UserQuery } from "query";
import { FunctionComponent, useEffect, useState } from "react";
import { Outlet, Route } from "react-router-dom";
import { PrivateRoute } from "routes";
import { UserTypes } from "types";
import { NotificationUtils } from "utils";

const AppContainer = () => {
  const { loading } = useUser();

  useEffect(() => console.log(loading), [loading]);

  return loading ? <Loader /> : <Outlet />;

  // return <Outlet />;

  // return (
  //   <>
  //     <Outlet />
  //   </>
  // );
};

export default AppContainer;
