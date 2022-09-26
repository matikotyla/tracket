import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";

import styles from "./TaskActions.module.scss";

const TaskActions = () => {
  return (
    <div className={styles.root}>
      <button>
        <PencilSquareIcon className={styles.icon} />
      </button>
      <button>
        <TrashIcon className={styles.icon} />
      </button>
    </div>
  );
};

export default TaskActions;
