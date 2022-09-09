import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { Button, Checkbox, Input } from "components";

import styles from "./LoginForm.module.scss";

const LoginForm: FunctionComponent = () => {
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
