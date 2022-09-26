import { FunctionComponent } from "react";

import { TaskTitleProps } from "./TaskTitle.props";

import styles from "./TaskTitle.module.scss";

const TaskTitle: FunctionComponent<TaskTitleProps> = ({ value }) => {
  return <p className={styles.root}>{value}</p>;
};

export default TaskTitle;
