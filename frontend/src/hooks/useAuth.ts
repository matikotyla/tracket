import { AuthContext } from "context";
import { useCallback, useContext } from "react";
import { AuthTypes } from "types";

const useAuth = (): AuthTypes.State.Hook => {
  const {
    state: { authenticated },
    setState,
  } = useContext(AuthContext);

  const signIn = useCallback(
    (): void => setState({ authenticated: true }),
    [setState]
  );

  const signOut = (): void => setState({ authenticated: false });

  return {
    authenticated,
    signIn,
    signOut,
  };
};

export default useAuth;
