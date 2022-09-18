import { FunctionComponent, PropsWithChildren } from "react";

const TableRow: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <tr>{children}</tr>;
};

export default TableRow;
