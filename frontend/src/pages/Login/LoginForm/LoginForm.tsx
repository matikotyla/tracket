import { ChangeEvent, ChangeEventHandler, FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Checkbox, Input } from "components";

import styles from "./LoginForm.module.scss";
import { useMutation } from "@apollo/client";
import { AuthMutation } from "mutation";
import { AuthTypes } from "types";
import { Controller, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { AuthSchema } from "schema";
import { ErrorUtils, NotificationUtils } from "utils";
import { useAuth } from "hooks";

const LoginForm: FunctionComponent = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [loginUser, { data, loading, error, reset }] = useMutation<
    AuthTypes.Login.Response,
    AuthTypes.Login.Request
  >(AuthMutation.LoginUser, {
    fetchPolicy: "no-cache",
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthTypes.Login.Form>({
    resolver: joiResolver(AuthSchema.Login.Form),
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

  const handleFormSubmit = (data: AuthTypes.Login.Form): void => {
    loginUser({
      variables: {
        email: data.email,
        password: data.password,
      },
    })
      .then(({ data }) => {
        NotificationUtils.notify(
          "Logged in!",
          "You have been successfully logged in.",
          "success"
        );
        if (data) {
          signIn(data.loginUser.token);
        }
      })
      .catch(console.log);
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit(handleFormSubmit)}>
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
              autoComplete="current-password"
              onChange={(e) => handleInputChange(e, onChange)}
              valid={!errors.password}
              error={errors.password?.message}
            />
          )}
        />
      </div>
      <div>
        <div>
          <p className={styles.error}>{error && error.message}</p>
        </div>
      </div>
      <div className={styles.checkbox}>
        <Checkbox checked={true} onChange={console.log}>
          Remember me
        </Checkbox>
        <Link to="/" className={styles.link}>
          Forgot your password?
        </Link>
      </div>
      <div>
        <Button
          type="submit"
          text="Sign in"
          loading={loading}
          disabled={loading || !!error || !ErrorUtils.isErrorsEmpty(errors)}
          fullWidth
        />
      </div>
      <div>
        <p className={styles.text}>
          Don&apos;t have an account?{" "}
          <Link to="/register" className={styles.link}>
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
