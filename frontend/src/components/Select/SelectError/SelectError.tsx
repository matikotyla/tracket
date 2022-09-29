import React, { FunctionComponent } from "react";
import { SelectErrorProps } from "./SelectError.props";

import styles from "./SelectError.module.scss";

const SelectError: FunctionComponent<SelectErrorProps> = ({ text }) => {
  return <p className={styles.root}>{text}</p>;
};

export default SelectError;
