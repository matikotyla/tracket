import { useAuth, useUser } from "hooks";
import { FunctionComponent, PropsWithChildren, useEffect } from "react";
import { AuthTypes } from "types";
import { AuthUtils, ContextUtils } from "utils";

export const [AuthContext, AuthProvider] =
  ContextUtils.initializeContext<AuthTypes.State.Context>({
    authenticated: AuthUtils.isToken(),
  });

export const AuthListener: FunctionComponent = () => {
  const { authenticated } = useAuth();
  const { getUser } = useUser();

  useEffect(() => {
    if (authenticated) {
      getUser();
    }
  }, [authenticated]);

  return null;
};
