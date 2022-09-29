import { FunctionComponent, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { Loader } from "components";
import { useProject, useUser } from "hooks";

const AppContainer: FunctionComponent = () => {
  const { user, loading } = useUser();
  const {
    getProjects: { invoke },
  } = useProject();

  useEffect(() => {
    if (user) {
      // console.log("getting");
      invoke();
    }
  }, [user, invoke]);

  return loading || !user ? (
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
