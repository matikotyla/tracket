import { FunctionComponent } from "react";
import { Button, Input } from "components";
import { useUser } from "hooks";
import { Controller, useForm } from "react-hook-form";
import { UserTypes } from "types";
import { joiResolver } from "@hookform/resolvers/joi";
import { UserSchema } from "schema";
import { ErrorUtils, NotificationUtils } from "utils";
import { useNavigate } from "react-router-dom";

const SettingsProfile: FunctionComponent = () => {
  const navigate = useNavigate();

  const {
    user,
    update: { invoke, loading },
  } = useUser();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserTypes.Update.Form>({
    resolver: joiResolver(UserSchema.Update.Form),
  });

  const handleFormSubmit = ({
    name,
    firstName,
    lastName,
  }: UserTypes.Update.Form): void => {
    invoke({
      variables: {
        name,
        firstName,
        lastName,
      },
    });
    // .then(() => {
    //   navigate("/app/dashboard");
    // });
  };

  return (
    <div className="py-4 flex space-x-8">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-medium text-gray-900">Profile</h2>
          <p className="mt-1 text-sm font-normal text-gray-500">
            This information will be displayed publicly so be careful what you
            share. Remember that everyone can see this.
          </p>
        </div>
        <form
          className="lg:col-span-3 space-y-4 lg:space-y-6"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className="flex space-x-4">
            <Controller
              name="firstName"
              control={control}
              defaultValue={user?.firstName}
              render={({ field: { name, value, onChange } }) => (
                <Input
                  id={name}
                  name={name}
                  type="text"
                  value={value}
                  label="First name"
                  autoComplete="given-name"
                  onChange={onChange}
                  valid={!errors.firstName}
                  error={errors.firstName?.message}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              defaultValue={user?.lastName}
              render={({ field: { name, value, onChange } }) => (
                <Input
                  id={name}
                  name={name}
                  type="text"
                  value={value}
                  label="Last name"
                  autoComplete="family-name"
                  onChange={onChange}
                  valid={!errors.lastName}
                  error={errors.lastName?.message}
                />
              )}
            />
          </div>
          <Input
            label="Email"
            value={user?.email ?? ""}
            onChange={console.log}
            disabled
          />
          <Controller
            name="name"
            control={control}
            defaultValue={user?.name}
            render={({ field: { name, value, onChange } }) => (
              <Input
                id={name}
                name={name}
                type="text"
                value={value}
                label="Name"
                autoComplete="nickname"
                onChange={onChange}
                valid={!errors.name}
                error={errors.name?.message}
              />
            )}
          />
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-teal-gray-900 shadow-sm hover:bg-teal-gray-50 focus:outline-none"
              onClick={() => reset()}
            >
              Cancel
            </button>
            <Button
              type="submit"
              text="Save"
              loading={loading}
              disabled={loading || !ErrorUtils.isErrorsEmpty(errors)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsProfile;
