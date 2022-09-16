import { makeVar, useLazyQuery } from "@apollo/client";
import { UserContext, UserLoading } from "context";
import { UserQuery } from "query";
import { useContext, useEffect } from "react";
import { UserTypes } from "types";
import { NotificationUtils } from "utils";

const useUser = () => {
  const {
    state: { user },
    setState,
  } = useContext(UserContext);

  const setUser = (user: UserTypes.User) => {
    setState((state) => ({ ...state, user }));
  };

  const removeUser = () => setState((state) => ({ ...state, user: null }));

  const getUser = useLazyQuery<UserTypes.Get.Response>(UserQuery.Get, {
    onCompleted: (data) => {
      // setState((state) => ({ ...state, user: data.user }));
    },
    onError: () =>
      NotificationUtils.notify(
        "User error",
        "Cannot fetch user data.",
        "error"
      ),
  });

  return {
    user,
    loading: false,
    setUser,
    removeUser,
    getUser,
  };
};

export default useUser;
