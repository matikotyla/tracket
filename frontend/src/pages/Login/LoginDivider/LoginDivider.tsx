import { FunctionComponent } from "react";

import styles from "./LoginDivider.module.scss";

const LoginDivider: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.line}></div>
      </div>
      <div className={styles.box}>
        <span className={styles.text}>Or continue with</span>
      </div>
    </div>
  );
};

export default LoginDivider;
