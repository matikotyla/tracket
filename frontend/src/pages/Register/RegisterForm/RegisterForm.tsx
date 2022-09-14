import {
  ChangeEvent,
  ChangeEventHandler,
  FormEventHandler,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { joiResolver } from "@hookform/resolvers/joi";

import { Button, Checkbox, Input } from "components";

import styles from "./RegisterForm.module.scss";
import { ApolloError, gql, useMutation } from "@apollo/client";
import { AuthMutation } from "mutation";
import { NotificationUtils } from "utils";
import { Controller, useForm } from "react-hook-form";
import { AuthTypes } from "types";
import { AuthSchema } from "schema";

const RegisterForm: FunctionComponent = () => {
  const navigate = useNavigate();

  const [registerUser, { loading, data, error, reset }] = useMutation<
    AuthTypes.Register.Response,
    AuthTypes.Register.Request
  >(AuthMutation.RegisterUser);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthTypes.Register.Form>({
    resolver: joiResolver(AuthSchema.Register.Form),
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    onChange: ChangeEventHandler<HTMLInputElement>
  ): void => {
    if (error) {
      reset();
    }
    onChange(event);
  };

  const handleFormSubmit = (data: AuthTypes.Register.Form): void => {
    registerUser({
      variables: {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
      },
    })
      .then(() => {
        NotificationUtils.notify(
          "User created!",
          "User has been successfully created.",
          "success"
        );
        navigate("/login");
      })
      .catch(console.log);
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit(handleFormSubmit)}>
      <div className={styles.row}>
        <div className={styles.column}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field: { name, value, onChange } }) => (
              <Input
                id={name}
                name={name}
                type="text"
                value={value}
                label="First name"
                autoComplete="given-name"
                onChange={(e) => handleInputChange(e, onChange)}
                valid={!errors.firstName}
                error={errors.firstName?.message}
              />
            )}
          />
        </div>
        <div className={styles.column}>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field: { name, value, onChange } }) => (
              <Input
                id={name}
                name={name}
                type="text"
                value={value}
                label="Last name"
                autoComplete="family-name"
                onChange={(e) => handleInputChange(e, onChange)}
                valid={!errors.lastName}
                error={errors.lastName?.message}
              />
            )}
          />
        </div>
      </div>
      <div>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field: { name, value, onChange } }) => (
            <Input
              id={name}
              name={name}
              type="email"
              value={value}
              label="Email address"
              autoComplete="email"
              onChange={(e) => handleInputChange(e, onChange)}
              valid={!errors.email}
              error={errors.email?.message}
            />
          )}
        />
      </div>
      <div>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field: { name, value, onChange } }) => (
            <Input
              id={name}
              name={name}
              type="password"
              value={value}
              label="Password"
              autoComplete="new-password"
              onChange={(e) => handleInputChange(e, onChange)}
              valid={!errors.password}
              error={errors.password?.message}
            />
          )}
        />
      </div>
      <div>
        <p className={styles.error}>{error && error.message}</p>
      </div>
      <div className={styles.checkbox}>
        <Controller
          name="approval"
          control={control}
          defaultValue={false}
          render={({ field: { name, value, onChange } }) => (
            <Checkbox
              id={name}
              name={name}
              checked={value}
              onChange={(e) => handleInputChange(e, onChange)}
              error={errors.approval?.message}
            >
              I agree to{" "}
              <Link to="/" className={styles.link}>
                privacy policy
              </Link>
            </Checkbox>
          )}
        />
      </div>
      <div>
        <Button
          type="submit"
          text="Sign up"
          loading={loading}
          disabled={loading}
          fullWidth
        />
      </div>
      <div>
        <p className={styles.text}>
          Already have an account?{" "}
          <Link to="/login" className={styles.link}>
            Log in
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
