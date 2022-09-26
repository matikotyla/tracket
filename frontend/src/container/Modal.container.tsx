import React from "react";

import {
  Modal,
  ModalAddProject,
  ModalEditProject,
  ModalRemoveProject,
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
    </>
  );
};

export default ModalContainer;
