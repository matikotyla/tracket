import { FunctionComponent } from "react";

import styles from "./LoginHeader.module.scss";

const LoginHeader: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Welcome back</h2>
      <p className={styles.text}>Please enter your details in the form below</p>
    </div>
  );
};

export default LoginHeader;
