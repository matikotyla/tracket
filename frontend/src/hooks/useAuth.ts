import { useReactiveVar } from "@apollo/client";
import { AuthContext } from "context";
import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthTypes } from "types";
import { AuthUtils } from "utils";
import { AuthVariables } from "variables";
import useUser from "./useUser";

const useAuth = (): AuthTypes.State.Hook => {
  // const navigate = useNavigate();
  const { removeUser } = useUser();
  const authenticated = useReactiveVar(AuthVariables.authenticated);

  const signIn = useCallback((token: string): void => {
    AuthVariables.authenticated(true);
    AuthUtils.setToken(token);
    // navigate("/app");
  }, []);

  const signOut = (): void => {
    AuthVariables.authenticated(false);
    AuthUtils.removeToken();
    removeUser();
  };

  return {
    authenticated,
    signIn,
    signOut,
  };
};

export default useAuth;
