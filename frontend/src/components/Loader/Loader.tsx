import { FunctionComponent } from "react";
import clsx from "clsx";

import styles from "./Loader.module.scss";

const Loader: FunctionComponent = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.container}>
        <div className={clsx(styles.cube, styles.cube1)}></div>
        <div className={clsx(styles.cube, styles.cube2)}></div>
        <div className={clsx(styles.cube, styles.cube4)}></div>
        <div className={clsx(styles.cube, styles.cube3)}></div>
      </div>
    </div>
  );
};

export default Loader;
