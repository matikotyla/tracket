import React, { FunctionComponent, useState } from "react";
import TaskCheckbox from "./TaskCheckbox/TaskCheckbox";

import styles from "./Task.module.scss";
import { TableData, TableRow } from "components";
import TaskTag from "./TaskTag/TaskTag";
import TaskActions from "./TaskActions/TaskActions";
import TaskText from "./TaskText/TaskText";
import TaskTitle from "./TaskTitle/TaskTitle";
import { TaskProps } from "./Task.props";

const Task: FunctionComponent<TaskProps> = ({
  content,
  description,
  time,
  priority,
  tag,
  color,
}) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <TableRow>
      <TableData>
        <div className={styles.content}>
          <div>
            <TaskCheckbox value={checked} onChange={(v) => setChecked(v)} />
          </div>
          <div>
            <TaskTitle value={content} />
            <TaskText value={description} />
          </div>
        </div>
      </TableData>
      <TableData>
        <TaskText value={time} />
      </TableData>
      <TableData>
        <TaskText value={priority} />
      </TableData>
      <TableData>
        <TaskTag name={tag} color={color} />
      </TableData>
      <TableData>
        <TaskActions />
      </TableData>
    </TableRow>
  );
};

export default Task;
