import ProjectTypes from "./Project.types";
import TaskTypes from "./Task.types";

namespace ModalTypes {
  export enum Type {
    AddProject = "addProject",
    EditProject = "editProject",
    RemoveProject = "removeProject",

    CreateTask = "createTask",
    UpdateTask = "updateTask",
    DeleteTask = "deleteTask",
  }

  export type Data = {
    [Type.AddProject]: null;
    [Type.EditProject]: ProjectTypes.Project;
    [Type.RemoveProject]: Pick<ProjectTypes.Project, "id">;
    [Type.CreateTask]: null;
    [Type.UpdateTask]: TaskTypes.Task;
    [Type.DeleteTask]: Pick<TaskTypes.Task, "id">;
  };

  export interface Content<T extends Type = Type> {
    type: T;
    data: Data[T];
  }

  export interface Props<T extends Type = Type> extends Content<T> {
    onClose: () => void;
  }
}

export default ModalTypes;
