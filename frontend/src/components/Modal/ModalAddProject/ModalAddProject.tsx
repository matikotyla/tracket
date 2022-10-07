import { Fragment, FunctionComponent } from "react";
import { Button, Input, Picker } from "components";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useLayout, useProject } from "hooks";
import { ModalTypes, ProjectTypes } from "types";
import { ModalAddProjectProps } from "./ModalAddProject.props";
import { Controller, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { ProjectSchema } from "schema";
import { StylesData } from "data";
import { ErrorUtils } from "utils";

const ModalAddProject: FunctionComponent<ModalAddProjectProps> = ({
  type,
  data,
  onClose,
}) => {
  const {
    create: { invoke, loading },
  } = useProject();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectTypes.Create.Form>({
    resolver: joiResolver(ProjectSchema.Create.Form),
  });

  const handleFormSubmit = (data: ProjectTypes.Create.Form): void => {
    invoke({
      variables: {
        name: data.name,
        color: data.color,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="text-center sm:text-left">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Add project
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Create a project to store your tasks
        </p>
      </div>
      <div className="mt-4 space-y-4">
        <div>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field: { name, value, onChange } }) => (
              <Input
                id={name}
                name={name}
                type="text"
                value={value}
                label="Name"
                onChange={onChange}
                valid={!errors.name}
                error={errors.name?.message}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="color"
            control={control}
            defaultValue={StylesData.colors[0]}
            render={({ field: { name, value, onChange } }) => (
              <Picker
                id={name}
                name={name}
                value={value}
                label="Color"
                onChange={onChange}
                valid={!errors.color}
                error={errors.color?.message}
              />
            )}
          />
        </div>
      </div>
      <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
        <div className="sm:col-start-2">
          <Button
            variant="primary"
            text="Add"
            loading={loading}
            disabled={loading || !ErrorUtils.isErrorsEmpty(errors)}
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
    </form>
  );
};

export default ModalAddProject;
