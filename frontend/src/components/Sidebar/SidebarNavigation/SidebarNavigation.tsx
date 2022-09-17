import { FunctionComponent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { SidebarNavigationProps } from "./SidebarNavigation.props";

import SidebarNavigationDropdown from "./SidebarNavigationDropdown/SidebarNavigationDropdown";
import SidebarNavigationNotification from "./SidebarNavigationNotification/SidebarNavigationNotification";

import styles from "./SidebarNavigation.module.scss";
import { AnimationData } from "data";
import { CommonAnimations } from "animations";

const SidebarNavigation: FunctionComponent<SidebarNavigationProps> = ({
  show,
  onClick,
}) => {
  return (
    <AnimatePresence mode="wait">
      {show ? (
        <motion.div
          className={styles.root}
          {...AnimationData.animation}
          key={1}
          variants={CommonAnimations.navbar}
        >
          <button
            type="button"
            className={styles.openButton}
            onClick={() => onClick(true)}
          >
            <Bars3BottomLeftIcon
              className={styles.openIcon}
              aria-hidden="true"
            />
          </button>
          <div className={styles.container}>
            <div className={styles.content}>
              <SidebarNavigationNotification />
              <SidebarNavigationDropdown />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          {...AnimationData.animation}
          key={2}
          variants={CommonAnimations.navbar}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default SidebarNavigation;
