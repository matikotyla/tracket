import ProjectTypes from "./Project.types";

namespace ModalTypes {
  export enum Type {
    AddProject = "addProject",
    EditProject = "editProject",
    RemoveProject = "removeProject",
  }

  export type Data = {
    [Type.AddProject]: null;
    [Type.EditProject]: ProjectTypes.Project;
    [Type.RemoveProject]: Pick<ProjectTypes.Project, "id">;
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
