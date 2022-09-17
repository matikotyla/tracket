import { UserTypes } from "types";
import { ContextUtils } from "utils";

export const [UserContext, UserProvider] =
  ContextUtils.initializeContext<UserTypes.State>({
    user: null,
    loading: false,
  });
