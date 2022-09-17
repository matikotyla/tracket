import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

import clsx from "clsx";

import { SidebarData } from "data";

import SidebarDesktopLogo from "./SidebarDesktopLogo/SidebarDesktopLogo";

import styles from "./SidebarDesktop.module.scss";

const SidebarDesktop: FunctionComponent = () => {
  return (
    <div className={styles.root}>
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
    </div>
  );
};

export default SidebarDesktop;
