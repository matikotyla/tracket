import { FunctionComponent, PropsWithChildren } from "react";

import styles from "./Table.module.scss";

const Table: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.box}>
            <table className={styles.table}>{children}</table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
