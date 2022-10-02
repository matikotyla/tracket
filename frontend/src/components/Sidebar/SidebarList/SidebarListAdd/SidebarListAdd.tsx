import { FunctionComponent } from "react";
import { FolderPlusIcon } from "@heroicons/react/24/outline";

import { useLayout } from "hooks";
import { ModalTypes } from "types";

import styles from "./SidebarListAdd.module.scss";

const SidebarListAdd: FunctionComponent = () => {
  const { openModal } = useLayout();

  return (
    <button
      className={styles.root}
      onClick={() =>
        openModal({
          type: ModalTypes.Type.AddProject,
          data: null,
        })
      }
    >
      <div className={styles.container}>
        <FolderPlusIcon className={styles.icon} />
        <span className={styles.text}>Add</span>
      </div>
    </button>
  );
};

export default SidebarListAdd;
