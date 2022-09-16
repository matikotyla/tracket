import { useLazyQuery, useReactiveVar } from "@apollo/client";
import { UserQuery } from "query";
import { useEffect } from "react";
import { UserTypes } from "types";
import { NotificationUtils } from "utils";
import { UserVariables } from "variables";

const useUser = () => {
  const user = useReactiveVar(UserVariables.user);
  const loading = useReactiveVar(UserVariables.loading);

  const setUser = (user: UserTypes.User) => UserVariables.user(user);
  const removeUser = () => UserVariables.user(null);
  const setLoading = (loading: boolean) => UserVariables.loading(loading);

  const [getUser, { loading: getUserLoading }] =
    useLazyQuery<UserTypes.Get.Response>(UserQuery.Get, {
      fetchPolicy: "network-only",
      onCompleted: (data) => {
        setUser(data.user);
      },
      onError: () =>
        NotificationUtils.notify(
          "User error",
          "Cannot fetch user data.",
          "error"
        ),
    });

  useEffect(() => {
    if (!getUserLoading) {
      setTimeout(() => setLoading(getUserLoading), 3000);
    } else {
      setLoading(getUserLoading);
    }
  }, [getUserLoading]);

  return {
    user,
    loading,
    setUser,
    removeUser,
    getUser,
  };
};

export default useUser;
