import { NotificationTypes } from "types";

export interface NotificationProps {
  type: NotificationTypes.Type;
  title: string;
  message: string;
  onClose?: () => void;
}
