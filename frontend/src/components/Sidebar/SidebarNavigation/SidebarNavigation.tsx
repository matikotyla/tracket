import { FunctionComponent } from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { SidebarNavigationProps } from "./SidebarNavigation.props";

import SidebarNavigationDropdown from "./SidebarNavigationDropdown/SidebarNavigationDropdown";
import SidebarNavigationNotification from "./SidebarNavigationNotification/SidebarNavigationNotification";

import styles from "./SidebarNavigation.module.scss";

const SidebarNavigation: FunctionComponent<SidebarNavigationProps> = ({
  onClick,
}) => {
  return (
    <div className={styles.root}>
      <button
        type="button"
        className={styles.openButton}
        onClick={() => onClick(true)}
      >
        <Bars3BottomLeftIcon className={styles.openIcon} aria-hidden="true" />
      </button>
      <div className={styles.container}>
        <div className={styles.content}>
          <SidebarNavigationNotification />
          <SidebarNavigationDropdown />
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;
