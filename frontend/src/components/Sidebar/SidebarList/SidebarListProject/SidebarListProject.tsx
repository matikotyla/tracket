import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { FolderIcon, TrashIcon } from "@heroicons/react/24/outline";

import clsx from "clsx";

import { SidebarListProjectProps } from "./SidebarListProject.props";

import styles from "./SidebarListProject.module.scss";

const SidebarListProject: FunctionComponent<SidebarListProjectProps> = ({
  name,
  color,
  onClick,
  onButtonClick,
}) => {
  return (
    <button className={styles.root} onClick={onClick}>
      <div className="flex items-center">
        <span
          className={clsx(
            styles[`dot-${color}`],
            "w-2.5 h-2.5 mr-4 rounded-full"
          )}
          aria-hidden="true"
        />
        <span className={styles.text}>{name}</span>
      </div>
      <TrashIcon
        className={styles.icon}
        onClick={(e) => {
          e.stopPropagation();
          onButtonClick();
        }}
      />
    </button>
  );
};

export default SidebarListProject;
