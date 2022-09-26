import { Dialog } from "@headlessui/react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import Button from "components/Button/Button";
import { useProject } from "hooks";
import React, { FunctionComponent } from "react";
import { ModalRemoveProjectProps } from "./ModalRemoveProject.props";

const ModalRemoveProject: FunctionComponent<ModalRemoveProjectProps> = ({
  type,
  data,
  onClose,
}) => {
  const {
    delete: { invoke, loading },
  } = useProject();

  const handleDeleteClick = (): void => {
    invoke({
      variables: {
        id: data.id,
      },
    });
  };

  return (
    <>
      <div>
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
          <ExclamationCircleIcon
            className="h-6 w-6 text-red-600"
            aria-hidden="true"
          />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <Dialog.Title
            as="h3"
            className="text-lg leading-6 font-medium text-gray-900"
          >
            Delete project
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this project? All of data
              associated with it will be permanently removed from our servers
              forever. This action cannot be undone.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
        <div className="sm:col-start-2">
          <Button
            variant="error"
            text="Delete"
            onClick={handleDeleteClick}
            loading={loading}
            disabled={loading}
            fullWidth
          />
        </div>
        <button
          type="button"
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:col-start-1 sm:text-sm"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default ModalRemoveProject;
