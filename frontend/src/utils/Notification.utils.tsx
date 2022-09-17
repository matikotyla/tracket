import { toast, ToastContentProps } from "react-toastify";
import { CommonTypes, NotificationTypes } from "types";
import { Notification } from "components";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

namespace NotificationUtils {
  export const notify = (
    title: string,
    message: string,
    type: NotificationTypes.Type
  ): void => {
    toast(({ closeToast }) => (
      <Notification
        title={title}
        message={message}
        type={type}
        onClose={closeToast}
      />
    ));
  };

  export const getIcon = (type: NotificationTypes.Type): CommonTypes.Icon => {
    switch (type) {
      case "success":
        return CheckCircleIcon;
      case "error":
        return XCircleIcon;
      case "warning":
        return ExclamationCircleIcon;
      case "info":
        return InformationCircleIcon;
    }
  };
}

export default NotificationUtils;
