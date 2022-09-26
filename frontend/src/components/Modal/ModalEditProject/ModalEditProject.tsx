import { Fragment, FunctionComponent } from "react";
import { Input, Picker } from "components";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useLayout, useProject } from "hooks";
import { ModalTypes, ProjectTypes } from "types";
import { Controller, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { ProjectSchema } from "schema";
import { StylesData } from "data";
import { ModalEditProjectProps } from "./ModalEditProject.props";

const ModalEditProject: FunctionComponent<ModalEditProjectProps> = ({
  type,
  data,
  onClose,
}) => {
  const {
    update: { invoke },
  } = useProject();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectTypes.Update.Form>({
    resolver: joiResolver(ProjectSchema.Update.Form),
  });

  const handleFormSubmit = ({
    name,
    color,
  }: ProjectTypes.Update.Form): void => {
    invoke({
      variables: {
        id: data.id,
        name: name,
        color: color,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="text-center sm:text-left">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Edit project
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Edit an already existing project
        </p>
      </div>
      <div className="mt-4 space-y-4">
        <div>
          <Controller
            name="name"
            control={control}
            defaultValue={data.name}
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
            defaultValue={data.color}
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
        <button
          type="submit"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-600 text-base font-medium text-white hover:bg-teal-700 focus:outline-none sm:col-start-2 sm:text-sm"
        >
          Edit
        </button>
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

export default ModalEditProject;
