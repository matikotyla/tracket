import { AuthTypes } from "types";
import { ContextUtils } from "utils";

export const [AuthContext, AuthProvider] =
  ContextUtils.initializeContext<AuthTypes.State.Context>({
    authenticated: false,
  });
