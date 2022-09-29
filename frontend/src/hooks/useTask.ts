import { useLazyQuery, useMutation } from "@apollo/client";
import { TaskMutation } from "mutation";
import { TaskQuery } from "query";
import { TaskTypes } from "types";
import { NotificationUtils } from "utils";
import { TaskVariables } from "variables";
import useLayout from "./useLayout";
import useVar from "./useVar";

const useTask = (): TaskTypes.Hook => {
  const [state, setState] = useVar<TaskTypes.State>(TaskVariables.state);
  const { closeModal } = useLayout();

  const setTasks = (tasks: TaskTypes.Task[]) =>
    setState((state) => ({ ...state, tasks }));

  const [getAllInvoke, { loading: getAllLoading }] =
    useLazyQuery<TaskTypes.GetAll.Response>(TaskQuery.GetAll, {
      onCompleted: (data) => setTasks(data.tasks),
    });

  const [createInvoke, { loading: createLoading }] = useMutation<
    TaskTypes.Create.Response,
    TaskTypes.Create.Request
  >(TaskMutation.CreateTask, {
    onCompleted: (data) => {
      NotificationUtils.notify(
        "Task created",
        "Task has been successfully created.",
        "success"
      );
      closeModal();
    },
    onError: (error) => {
      console.log(error);
      NotificationUtils.notify(
        "Task not created",
        "Something went wrong when creating a task.",
        "error"
      );
    },
  });

  const [updateInvoke, { loading: updateLoading }] = useMutation<
    TaskTypes.Update.Response,
    TaskTypes.Update.Request
  >(TaskMutation.UpdateTask, {
    onCompleted: (data) => {
      NotificationUtils.notify(
        "Task updated",
        "Task has been successfully updated.",
        "success"
      );
      closeModal();
    },
    onError: (error) => {
      console.log(error);
      NotificationUtils.notify(
        "Task not upated",
        "Something went wrong when updating a task.",
        "error"
      );
    },
  });

  const [deleteInvoke, { loading: deleteLoading }] = useMutation<
    TaskTypes.Delete.Response,
    TaskTypes.Delete.Request
  >(TaskMutation.DeleteTask, {
    onCompleted: (data) => {
      NotificationUtils.notify(
        "Task deleted",
        "Task has been successfully deleted.",
        "success"
      );
      closeModal();
    },
    onError: (error) => {
      NotificationUtils.notify(
        "Task not deleted",
        "Something went wrong when deleting a task.",
        "error"
      );
    },
  });

  return {
    tasks: state.tasks,
    getAll: {
      invoke: getAllInvoke,
      loading: getAllLoading,
    },
    create: {
      invoke: createInvoke,
      loading: createLoading,
    },
    update: {
      invoke: updateInvoke,
      loading: updateLoading,
    },
    delete: {
      invoke: deleteInvoke,
      loading: deleteLoading,
    },
  };
};

export default useTask;
