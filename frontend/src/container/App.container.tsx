import { FunctionComponent, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { Loader } from "components";
import { useUser } from "hooks";

const AppContainer: FunctionComponent = () => {
  const { loading } = useUser();

  return loading ? (
    <Loader />
  ) : (
    <div className="pt-16 md:pl-64">
      <div className="py-6 mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AppContainer;
