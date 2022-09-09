import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import styles from "./HomeTrial.module.scss";

const HomeTrial: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span>Ready to dive in?</span>
          <span>Start your free trial today.</span>
        </h2>
        <div className={styles.buttons}>
          <Link to="/" className={clsx(styles.button, styles.buttonPrimary)}>
            Get started
          </Link>
          <Link to="/" className={clsx(styles.button, styles.buttonSecondary)}>
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeTrial;
