import clsx from "clsx";
import { FunctionComponent, PropsWithChildren } from "react";
import { TableHeaderProps } from "./TableHeader.props";

import styles from "./TableHeader.module.scss";

const TableHeader: FunctionComponent<PropsWithChildren<TableHeaderProps>> = ({
  colSpan = 1,
  align = "left",
  children,
}) => {
  return (
    <th
      scope="col"
      colSpan={colSpan}
      className={clsx(styles.root, styles[align])}
    >
      {children}
    </th>
  );
};

export default TableHeader;
