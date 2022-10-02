import {
  makeVar,
  useLazyQuery,
  useMutation,
  useReactiveVar,
} from "@apollo/client";
import { UserMutation } from "mutation";
import { UserQuery } from "query";
import { useEffect } from "react";
import { UserTypes } from "types";
import { NotificationUtils } from "utils";
import { UserVariables } from "variables";
import useAuth from "./useAuth";
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
      onError: () => {
        NotificationUtils.notify(
          "User error",
          "Cannot fetch user data.",
          "error"
        );
      },
    });

  const [updateUser, { data: updateData, loading: updateLoading }] =
    useMutation<UserTypes.Update.Response, UserTypes.Update.Request>(
      UserMutation.UpdateUser,
      {
        onCompleted: () => {
          NotificationUtils.notify(
            "User updated",
            "User has been successfully updated",
            "success"
          );
        },
        onError: (error) => {
          console.log(error);
          NotificationUtils.notify(
            "User not updated",
            "Something went wrong when updating a user",
            "error"
          );
        },
      }
    );

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
    update: {
      invoke: updateUser,
      loading: updateLoading,
    },
  };
};

export default useUser;
