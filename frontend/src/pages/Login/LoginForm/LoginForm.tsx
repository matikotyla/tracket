import { ChangeEvent, ChangeEventHandler, FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { Button, Checkbox, Input } from "components";

import styles from "./LoginForm.module.scss";
import { useMutation } from "@apollo/client";
import { AuthMutation } from "mutation";
import { AuthTypes } from "types";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { AuthSchema } from "schema";

const LoginForm: FunctionComponent = () => {
  const [loginUser, { data, loading, error, reset }] = useMutation<
    AuthTypes.Login.Response,
    AuthTypes.Login.Request
  >(AuthMutation.LoginUser);

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
    console.log(data);
  };

  return (
    <form className={styles.root}>
      <div>
        <Input value="" label="Email address" onChange={console.log} />
      </div>
      <div>
        <Input value="" label="Password" onChange={console.log} />
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
        <Button text="Sign in" fullWidth />
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
