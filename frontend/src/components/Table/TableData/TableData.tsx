import clsx from "clsx";
import { FunctionComponent, PropsWithChildren } from "react";

import styles from "./TableData.module.scss";
import { TableDataProps } from "./TableData.props";

const TableData: FunctionComponent<PropsWithChildren<TableDataProps>> = ({
  align = "left",
  children,
}) => {
  return <td className={clsx(styles.root, styles[align])}>{children}</td>;
};

export default TableData;
