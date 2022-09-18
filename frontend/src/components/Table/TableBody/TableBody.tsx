import { FunctionComponent, PropsWithChildren } from "react";

import styles from "./TableBody.module.scss";

const TableBody: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <tbody className={styles.root}>{children}</tbody>;
};

export default TableBody;
