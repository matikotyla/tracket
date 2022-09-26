import { FunctionComponent } from "react";

import { TaskTextProps } from "./TaskText.props";

import styles from "./TaskText.module.scss";

const TaskText: FunctionComponent<TaskTextProps> = ({ value }) => {
  return <p className={styles.root}>{value}</p>;
};

export default TaskText;
