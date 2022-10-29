import { joiResolver } from "@hookform/resolvers/joi";
import { useTask } from "hooks";
import React, { FunctionComponent } from "react";
import { Controller, useForm } from "react-hook-form";
import { TaskSchema } from "schema";
import { TaskTypes } from "types";
import { ModalUpdateTaskProps } from "./ModalUpdateTask.props";
import { Button, Input } from "components";
import { ErrorUtils } from "utils";

const ModalUpdateTask: FunctionComponent<ModalUpdateTaskProps> = ({
  type,
  data,
  onClose,
}) => {
  const {
    update: { invoke, loading },
  } = useTask();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskTypes.Update.Form>({
    resolver: joiResolver(TaskSchema.Update.Form),
  });

  const handleFormSubmit = ({
    content,
    description,
  }: TaskTypes.Update.Form): void => {
    invoke({
      variables: {
        id: data.id,
        content,
        description,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="text-center sm:text-left">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Update task
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Update an already existing task
        </p>
      </div>
      <div className="mt-4 space-y-4">
        <div>
          <Controller
            name="content"
            control={control}
            defaultValue={data.content}
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
                autoComplete="off"
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="description"
            control={control}
            defaultValue={data.description}
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
                autoComplete="off"
              />
            )}
          />
        </div>
      </div>
      <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
        <div className="sm:col-start-2">
          <Button
            variant="primary"
            text="Update"
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

export default ModalUpdateTask;
