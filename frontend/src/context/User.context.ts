import { makeVar } from "@apollo/client";
import { UserTypes } from "types";
import { ContextUtils } from "utils";

export const [UserContext, UserProvider] =
  ContextUtils.initializeContext<UserTypes.State.Context>({
    user: null,
    loading: false,
  });

export const UserLoading = makeVar<boolean>(false);
