import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import clsx from "clsx";

import { SidebarListProjectProps } from "./SidebarListProject.props";

import styles from "./SidebarListProject.module.scss";

const SidebarListProject: FunctionComponent<SidebarListProjectProps> = ({
  to,
  name,
  color,
}) => {
  return (
    <Link to={to} className={styles.root}>
      <span
        className={clsx(color, "w-2.5 h-2.5 mr-4 rounded-full")}
        aria-hidden="true"
      />
      <span className={styles.text}>{name}</span>
    </Link>
  );
};

export default SidebarListProject;
