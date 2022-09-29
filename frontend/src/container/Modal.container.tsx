import React from "react";

import {
  Modal,
  ModalAddProject,
  ModalCreateTask,
  ModalEditProject,
  ModalUpdateTask,
  ModalRemoveProject,
  ModalDeleteTask,
} from "components";
import { ModalTypes } from "types";

const ModalContainer = () => {
  return (
    <>
      <Modal
        type={ModalTypes.Type.AddProject}
        content={ModalAddProject as any}
      />
      <Modal
        type={ModalTypes.Type.EditProject}
        content={ModalEditProject as any}
      />
      <Modal
        type={ModalTypes.Type.RemoveProject}
        content={ModalRemoveProject as any}
      />
      <Modal
        type={ModalTypes.Type.CreateTask}
        content={ModalCreateTask as any}
      />
      <Modal
        type={ModalTypes.Type.UpdateTask}
        content={ModalUpdateTask as any}
      />
      <Modal
        type={ModalTypes.Type.DeleteTask}
        content={ModalDeleteTask as any}
      />
    </>
  );
};

export default ModalContainer;
