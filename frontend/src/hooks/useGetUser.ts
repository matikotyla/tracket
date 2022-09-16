import { useLazyQuery } from "@apollo/client";
import { UserQuery } from "query";
import { UserTypes } from "types";
import { NotificationUtils } from "utils";

const useGetUser = () => {
  return useLazyQuery<UserTypes.Get.Response>(UserQuery.Get, {
    onCompleted: () => console.log("done"),
    onError: () =>
      NotificationUtils.notify(
        "User error",
        "Cannot fetch user data.",
        "error"
      ),
  });
};

export default useGetUser;
