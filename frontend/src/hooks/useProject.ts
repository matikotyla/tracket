import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { ProjectMutation } from "mutation";

import { ProjectQuery } from "query";
import { useEffect } from "react";
import { ProjectTypes } from "types";
import { NotificationUtils } from "utils";
import { ProjectVariables } from "variables";
import useLayout from "./useLayout";
import useVar from "./useVar";

const useProject = (): ProjectTypes.Hook => {
  const [state, setState] = useVar<ProjectTypes.State>(ProjectVariables.state);
  const { closeModal } = useLayout();

  const setProjects = (projects: ProjectTypes.Project[]) =>
    setState((state) => ({ ...state, projects }));

  const [
    getProjects,
    { data: getAllData, loading: getAllLoading, error: getAllError },
  ] = useLazyQuery<ProjectTypes.Get.Response>(ProjectQuery.Get, {
    onCompleted: (data) => {
      setProjects(data.projects);
    },
  });

  const [
    createProject,
    { data: createData, loading: createLoading, error: createError, reset },
  ] = useMutation<ProjectTypes.Create.Response, ProjectTypes.Create.Request>(
    ProjectMutation.CreateProject,
    {
      onCompleted: (data) => {
        NotificationUtils.notify(
          "Project created",
          "Project has been successfully created.",
          "success"
        );
        closeModal();
      },
      onError: (error) => {
        console.log(error);
        NotificationUtils.notify(
          "Project not created",
          "Something went wrong when creating a project.",
          "error"
        );
      },
      // update: (cache, data) => {
      //   cache.modify({
      //     fields: {
      //       projects(existingProjects = [], other) {
      //         const items = cache.readQuery<{
      //           projects: ProjectTypes.Project[];
      //         }>({
      //           query: ProjectQuery.Get,
      //         });

      //         let newItems: ProjectTypes.Project[] = [];
      //         if (items && data.data?.createProject) {
      //           newItems = [...items.projects, data.data?.createProject];
      //         }

      //         cache.writeQuery({
      //           query: ProjectQuery.Get,
      //           data: {
      //             projects: newItems,
      //           },
      //         });

      //         // cache.writeQuery({
      //         //   query: ProjectQuery.Get,
      //         //   data: {
      //         //     projects: [...existingProjects, data.data?.createProject],
      //         //   },
      //         // });
      //         // return [...existingProjects];
      //       },
      //     },
      //   });
      //   console.log(data.data?.createProject);
      // },
    }
  );

  const [
    updateProject,
    { data: updateData, loading: updateLoading, error: updateError },
  ] = useMutation<ProjectTypes.Update.Response, ProjectTypes.Update.Request>(
    ProjectMutation.UpdateProject,
    {
      onCompleted: (data) => {
        NotificationUtils.notify(
          "Project updated",
          "Project has been successfully updated.",
          "success"
        );
        closeModal();
      },
      onError: () => {
        NotificationUtils.notify(
          "Project not upated",
          "Something went wrong when updating a project.",
          "error"
        );
      },
    }
  );

  const [
    deleteProject,
    { data: deleteData, loading: deleteLoading, error: deleteError },
  ] = useMutation<ProjectTypes.Delete.Response, ProjectTypes.Delete.Request>(
    ProjectMutation.DeleteProject,
    {
      onCompleted: (data) => {
        NotificationUtils.notify(
          "Project deleted",
          "Project has been successfully deleted.",
          "success"
        );
        closeModal();
      },
      onError: (error) => {
        NotificationUtils.notify(
          "Project not deleted",
          "Something went wrong when deleting a project.",
          "error"
        );
      },
      // update(cache, data) {
      //   console.log("here");
      //   cache.modify({
      //     fields: {
      //       tasks(existingTasks = [], other) {
      //         console.log("here");
      //         console.log(data);
      //         console.log(existingTasks);
      //         console.log(other);
      //       },
      //     },
      //   });
      // },
    }
  );

  return {
    loading: getAllLoading,
    projects: state.projects,
    getProjects: {
      invoke: getProjects,
      loading: getAllLoading,
      error: getAllError,
    },
    create: {
      invoke: createProject,
      loading: createLoading,
      error: createError,
    },
    update: {
      invoke: updateProject,
      loading: updateLoading,
      error: updateError,
    },
    delete: {
      invoke: deleteProject,
      loading: deleteLoading,
      error: deleteError,
    },
  };
};

export default useProject;
