import { AuthContext } from "context";
import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthTypes } from "types";
import { AuthUtils } from "utils";

const useAuth = (): AuthTypes.State.Hook => {
  const navigate = useNavigate();

  const {
    state: { authenticated },
    setState,
  } = useContext(AuthContext);

  const signIn = useCallback(
    (token: string): void => {
      setState({ authenticated: true });
      AuthUtils.setToken(token);
      // navigate("/app");
    },
    [setState]
  );

  const signOut = (): void => {
    setState({ authenticated: false });
    AuthUtils.removeToken();
  };

  return {
    authenticated,
    signIn,
    signOut,
  };
};

export default useAuth;
