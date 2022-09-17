import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import clsx from "clsx";

import { AnimationData, SidebarData } from "data";

import SidebarDesktopLogo from "./SidebarDesktopLogo/SidebarDesktopLogo";

import styles from "./SidebarDesktop.module.scss";
import { SidebarDesktopProps } from "./SidebarDesktop.props";
import { AnimatePresence } from "framer-motion";
import { CommonAnimations } from "animations";

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
              <nav className={styles.list}>
                {SidebarData.links.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={({ isActive }) =>
                      clsx(
                        styles.item,
                        isActive ? styles.itemActive : styles.itemInactive
                      )
                    }
                  >
                    <item.icon className={styles.itemIcon} aria-hidden="true" />
                    {item.name}
                  </NavLink>
                ))}
              </nav>
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
