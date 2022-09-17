import { FunctionComponent } from "react";
import { BellIcon } from "@heroicons/react/24/outline";

import styles from "./SidebarNavigationNotification.module.scss";

const SidebarNavigationNotification: FunctionComponent = () => {
  return (
    <button type="button" className={styles.root}>
      <BellIcon className={styles.icon} aria-hidden="true" />
    </button>
  );
};

export default SidebarNavigationNotification;
