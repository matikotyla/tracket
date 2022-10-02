import { FunctionComponent } from "react";
import { FolderIcon, BeakerIcon } from "@heroicons/react/24/solid";

import { useLayout } from "hooks";
import { ModalTypes } from "types";

import styles from "./DashboardHeader.module.scss";

const DashboardHeader: FunctionComponent = () => {
  const { openModal } = useLayout();

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1 className={styles.title}>Dashboard</h1>
        <p className={styles.text}>
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>
      <div className={styles.menu}>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
          onClick={() =>
            openModal({
              type: ModalTypes.Type.CreateTask,
              data: null,
            })
          }
        >
          <BeakerIcon className={styles.icon} aria-hidden="true" />
          Add task
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
          onClick={() =>
            openModal({
              type: ModalTypes.Type.AddProject,
              data: null,
            })
          }
        >
          <FolderIcon className={styles.icon} aria-hidden="true" />
          Add project
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
