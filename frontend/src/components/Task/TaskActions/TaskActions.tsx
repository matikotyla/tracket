import { FunctionComponent } from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

import styles from "./TaskActions.module.scss";
import { TaskActionsProps } from "./TaskActions.props";

const TaskActions: FunctionComponent<TaskActionsProps> = ({
  onUpdateClick,
  onDeleteClick,
}) => {
  return (
    <div className={styles.root}>
      <button onClick={onUpdateClick}>
        <PencilSquareIcon className={styles.icon} />
      </button>
      <button onClick={onDeleteClick}>
        <TrashIcon className={styles.icon} />
      </button>
    </div>
  );
};

export default TaskActions;
