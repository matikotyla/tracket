import { FunctionComponent } from "react";

import styles from "./RegisterHeader.module.scss";

const RegisterHeader: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Get started</h2>
      <p className={styles.text}>Connect to your audience with branded links</p>
    </div>
  );
};

export default RegisterHeader;
