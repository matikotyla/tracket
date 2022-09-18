import { FunctionComponent } from "react";
import { motion } from "framer-motion";

import { AnimationData } from "data";

import SidebarDesktopLogo from "./SidebarDesktopLogo/SidebarDesktopLogo";

import styles from "./SidebarDesktop.module.scss";
import { SidebarDesktopProps } from "./SidebarDesktop.props";
import { AnimatePresence } from "framer-motion";
import { CommonAnimations } from "animations";
import SidebarList from "../SidebarList/SidebarList";

const SidebarDesktop: FunctionComponent<SidebarDesktopProps> = ({ show }) => {
  return (
    <AnimatePresence mode="wait">
      {show ? (
        <motion.div
          className={styles.root}
          {...AnimationData.animation}
          key={1}
          variants={CommonAnimations.sidebar}
        >
          <div className={styles.container}>
            <SidebarDesktopLogo />
            <div className={styles.content}>
              <SidebarList />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          {...AnimationData.animation}
          key={2}
          variants={CommonAnimations.sidebar}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default SidebarDesktop;
