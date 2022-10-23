import React, { Fragment, useEffect } from "react";
import { PlusIcon } from "@heroicons/react/20/solid";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
  Task,
  TaskLoader,
} from "components";
import { useLayout, useTask } from "hooks";
import { ModalTypes } from "types";

const DashboardTable = () => {
  const {
    tasks,
    getAll: { invoke, loading },
    update: { invoke: updateInvoke, loading: updateLoading },
  } = useTask();
  const { openModal } = useLayout();

  useEffect(() => {
    invoke();
  }, []);

  return (
    <>
      <div className="hidden lg:block">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>
                <p className="pl-1 sm:pl-3 text-xs font-medium uppercase tracking-wide text-gray-500">
                  Name
                </p>
              </TableHeader>
              <TableHeader>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Time
                </p>
              </TableHeader>
              <TableHeader>
                <p className="text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                  Priority
                </p>
              </TableHeader>
              <TableHeader>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Project
                </p>
              </TableHeader>
              <TableHeader>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  More
                </p>
              </TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              [1, 2, 3, 4].map((i) => <TaskLoader key={i} />)
            ) : tasks.length > 0 ? (
              tasks.map((task) => (
                <Task
                  key={task.id}
                  content={task.content}
                  description={task.description}
                  time="14 Sep 14:00"
                  priority="Important"
                  tag={task.project.name}
                  color={task.project.color}
                  value={task.completed}
                  disabled={updateLoading}
                  onUpdateClick={() =>
                    openModal({
                      type: ModalTypes.Type.UpdateTask,
                      data: task,
                    })
                  }
                  onDeleteClick={() =>
                    openModal({
                      type: ModalTypes.Type.DeleteTask,
                      data: {
                        id: task.id,
                      },
                    })
                  }
                  onCheckboxClick={() =>
                    updateInvoke({
                      variables: {
                        id: task.id,
                        completed: !task.completed,
                      },
                    })
                  }
                />
              ))
            ) : (
              <tr>
                <td colSpan={5}>
                  <div className="relative h-96 w-full flex items-center justify-center rounded-lg">
                    <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          vectorEffect="non-scaling-stroke"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                        />
                      </svg>
                      <h3 className="mt-2 text-sm font-medium text-gray-900">
                        No tasks
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Get started by creating a new task.
                      </p>
                      <div className="mt-6">
                        {/* <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <PlusIcon
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    Add task
                  </button> */}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="lg:hidden mt-8">
        <Table>
          {tasks.map((task) => (
            <Fragment key={task.id}>
              <TableHead>
                <TableRow>
                  <TableHeader colSpan={2}>
                    <div className="py-3"></div>
                  </TableHeader>
                </TableRow>
              </TableHead>
              <TableBody key={task.id}>
                <Task
                  content={task.content}
                  description={task.description}
                  time="14 Sep 14:00"
                  priority="Important"
                  tag={task.project.name}
                  color={task.project.color}
                  value={task.completed}
                  disabled={updateLoading}
                  variant="mobile"
                  onUpdateClick={() =>
                    openModal({
                      type: ModalTypes.Type.UpdateTask,
                      data: task,
                    })
                  }
                  onDeleteClick={() =>
                    openModal({
                      type: ModalTypes.Type.DeleteTask,
                      data: {
                        id: task.id,
                      },
                    })
                  }
                  onCheckboxClick={() =>
                    updateInvoke({
                      variables: {
                        id: task.id,
                        completed: !task.completed,
                      },
                    })
                  }
                />
              </TableBody>
            </Fragment>
          ))}
        </Table>
      </div>
    </>
  );
};

export default DashboardTable;
