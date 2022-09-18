import clsx from "clsx";
import { FunctionComponent, PropsWithChildren } from "react";
import { TableHeaderProps } from "./TableHeader.props";

import styles from "./TableHeader.module.scss";

const TableHeader: FunctionComponent<PropsWithChildren<TableHeaderProps>> = ({
  align = "left",
  children,
}) => {
  return (
    <th scope="col" className={clsx(styles.root, styles[align])}>
      {children}
    </th>
  );
};

export default TableHeader;
