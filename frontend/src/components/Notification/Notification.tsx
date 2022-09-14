import { FunctionComponent, useMemo } from "react";
import { XIcon } from "@heroicons/react/solid";

import { NotificationProps } from "./Notification.props";

import styles from "./Notification.module.scss";
import clsx from "clsx";
import { NotificationUtils } from "utils";

const Notification: FunctionComponent<NotificationProps> = ({
  type,
  title,
  message,
  onClose,
}) => {
  const Icon = useMemo(() => NotificationUtils.getIcon(type), [type]);

  return (
    <div className={clsx(styles.root, styles[type])}>
      <div className={styles.container}>
        <div className={styles.box}>
          <Icon className={styles.icon} />
        </div>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <p className={styles.message}>{message}</p>
        </div>
        <div className={styles.action}>
          <button type="button" className={styles.button} onClick={onClose}>
            <span className="sr-only">Close</span>
            <XIcon className={styles.close} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
