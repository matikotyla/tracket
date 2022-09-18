import { FunctionComponent, PropsWithChildren } from "react";

import styles from "./TableHead.module.scss";

const TableHead: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <thead className={styles.root}>{children}</thead>;
};

export default TableHead;
