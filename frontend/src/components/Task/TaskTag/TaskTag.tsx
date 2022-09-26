import React, { FunctionComponent } from "react";
import { TaskTagProps } from "./TaskTag.props";

import styles from "./TaskTag.module.scss";
import { TagIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const TaskTag: FunctionComponent<TaskTagProps> = ({ name, color }) => {
  return (
    <div className={styles.root}>
      <TagIcon className={clsx(styles.icon, styles[`icon-${color}`])} />
      <p className={clsx(styles.text, styles[`text-${color}`])}>{name}</p>
    </div>
  );
};

export default TaskTag;
