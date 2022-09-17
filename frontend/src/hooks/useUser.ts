import { makeVar, useLazyQuery, useReactiveVar } from "@apollo/client";
import { UserQuery } from "query";
import { useEffect } from "react";
import { UserTypes } from "types";
import { NotificationUtils } from "utils";
import { UserVariables } from "variables";
import useVar from "./useVar";

const useUser = (): UserTypes.Hook => {
  const [state, setState] = useVar<UserTypes.State>(UserVariables.state);

  const setUser = (user: UserTypes.User | null) =>
    setState((state) => ({ ...state, user }));
  const removeUser = () => setUser(null);
  const setLoading = (loading: boolean) =>
    setState((state) => ({ ...state, loading }));

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
    const isLoading = getUserLoading;

    if (!isLoading) {
      setTimeout(() => setLoading(isLoading), 3000);
    } else {
      setLoading(isLoading);
    }
  }, [getUserLoading]);

  return {
    user: state.user,
    loading: state.loading,
    setUser,
    removeUser,
    getUser,
  };
};

export default useUser;
