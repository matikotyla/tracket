import { FunctionComponent } from "react";

import { SelectHintProps } from "./SelectHint.props";

import styles from "./SelectHint.module.scss";

const SelectHint: FunctionComponent<SelectHintProps> = ({ text }) => {
  return <p className={styles.root}>{text}</p>;
};

export default SelectHint;
