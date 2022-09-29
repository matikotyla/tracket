import { FunctionComponent } from "react";
import { Controller, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { TaskTypes } from "types";
import { TaskSchema } from "schema";
import { useProject, useTask } from "hooks";
import { Button, Input, Select, SelectOption } from "components";

import { ModalCreateTaskProps } from "./ModalCreateTask.props";
import { ErrorUtils } from "utils";

const ModalCreateTask: FunctionComponent<ModalCreateTaskProps> = ({
  type,
  data,
  onClose,
}) => {
  const { projects } = useProject();

  const {
    create: { invoke, loading },
  } = useTask();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskTypes.Create.Form>({
    resolver: joiResolver(TaskSchema.Create.Form),
  });

  const handleFormSubmit = (data: TaskTypes.Create.Form): void => {
    invoke({
      variables: {
        content: data.content,
        description: data.description,
        projectId: data.project.id,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="text-center sm:text-left">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Create task
        </h3>
        <p className="mt-2 text-sm text-gray-500">Create a new task</p>
      </div>
      <div className="mt-4 space-y-4">
        <div>
          <Controller
            name="content"
            control={control}
            defaultValue=""
            render={({ field: { name, value, onChange } }) => (
              <Input
                id={name}
                name={name}
                type="text"
                value={value}
                label="Content"
                onChange={onChange}
                valid={!errors.content}
                error={errors.content?.message}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field: { name, value, onChange } }) => (
              <Input
                id={name}
                name={name}
                type="text"
                value={value}
                label="Description"
                onChange={onChange}
                valid={!errors.description}
                error={errors.description?.message}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="project"
            control={control}
            defaultValue={projects[0]}
            render={({ field: { name, value, onChange } }) => (
              <Select
                id={name}
                name={name}
                value={value}
                label="Project"
                text={value.name}
                onChange={onChange}
                valid={!errors.project}
                error={errors.project?.message}
              >
                {projects.map((project) => (
                  <SelectOption
                    key={project.id}
                    value={project}
                    selected={value.id === project.id}
                  >
                    {project.name}
                  </SelectOption>
                ))}
              </Select>
            )}
          />
        </div>
      </div>
      <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
        <div className="sm:col-start-2">
          <Button
            variant="primary"
            text="Add"
            // onClick={}
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

export default ModalCreateTask;
