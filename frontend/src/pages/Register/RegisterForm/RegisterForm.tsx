import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { Button, Checkbox, Input } from "components";

import styles from "./RegisterForm.module.scss";

const RegisterForm: FunctionComponent = () => {
  return (
    <form className={styles.root}>
      <div className={styles.row}>
        <div className={styles.column}>
          <Input value="" label="First name" onChange={console.log} />
        </div>
        <div className={styles.column}>
          <Input value="" label="Last name" onChange={console.log} />
        </div>
      </div>
      <div>
        <Input value="" label="Email address" onChange={console.log} />
      </div>
      <div>
        <Input value="" label="Password" onChange={console.log} />
      </div>
      {/* <div>
        <p className="register-form__error">{error && error.message}</p>
      </div> */}
      <div className={styles.checkbox}>
        <Checkbox checked={true} onChange={console.log}>
          I agree to{" "}
          <Link to="/" className={styles.link}>
            privacy policy
          </Link>
        </Checkbox>
      </div>
      <div>
        <Button text="Sign up" fullWidth />
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
