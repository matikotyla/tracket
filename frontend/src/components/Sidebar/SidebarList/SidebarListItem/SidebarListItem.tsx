import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { SidebarListItemProps } from "./SidebarListItem.props";

import styles from "./SidebarListItem.module.scss";
import clsx from "clsx";

const SidebarListItem: FunctionComponent<SidebarListItemProps> = ({
  to,
  name,
  icon: Icon,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(styles.root, isActive ? styles.active : styles.inactive)
      }
    >
      <Icon className={styles.icon} aria-hidden="true" />
      {name}
    </NavLink>
  );
};

export default SidebarListItem;
