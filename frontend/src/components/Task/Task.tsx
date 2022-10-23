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
  value,
  disabled = false,
  variant = "desktop",
  onUpdateClick,
  onDeleteClick,
  onCheckboxClick,
}) => {
  const [checked, setChecked] = useState<boolean>(false);

  return variant === "desktop" ? (
    <TableRow>
      <TableData>
        <div className={styles.content}>
          <div>
            <TaskCheckbox
              value={value}
              disabled={disabled}
              onChange={onCheckboxClick}
            />
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
        <TaskActions
          onUpdateClick={onUpdateClick}
          onDeleteClick={onDeleteClick}
        />
      </TableData>
    </TableRow>
  ) : (
    <>
      <TableRow>
        <TableData>
          <TaskTitle value="Name" />
        </TableData>
        <TableData>
          <div className={styles.content}>
            <div>
              <TaskCheckbox
                value={value}
                disabled={disabled}
                onChange={onCheckboxClick}
              />
            </div>
            <div>
              <TaskTitle value={content} />
              <TaskText value={description} />
            </div>
          </div>
        </TableData>
      </TableRow>
      <TableRow>
        <TableData>
          <TaskTitle value="Time" />
        </TableData>
        <TableData>
          <TaskText value={time} />
        </TableData>
      </TableRow>
      <TableRow>
        <TableData>
          <TaskTitle value="Priority" />
        </TableData>
        <TableData>
          <TaskText value={priority} />
        </TableData>
      </TableRow>
      <TableRow>
        <TableData>
          <TaskTitle value="Project" />
        </TableData>
        <TableData>
          <TaskTag name={tag} color={color} />
        </TableData>
      </TableRow>
      <TableRow>
        <TableData>
          <TaskTitle value="More" />
        </TableData>
        <TableData>
          <TaskActions
            onUpdateClick={onUpdateClick}
            onDeleteClick={onDeleteClick}
          />
        </TableData>
      </TableRow>
    </>
  );
};

export default Task;
