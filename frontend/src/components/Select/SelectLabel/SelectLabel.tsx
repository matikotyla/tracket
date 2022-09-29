import { FunctionComponent } from "react";
import { Listbox } from "@headlessui/react";

import { SelectLabelProps } from "./SelectLabel.props";

import styles from "./SelectLabel.module.scss";

const SelectLabel: FunctionComponent<SelectLabelProps> = ({
  label,
  htmlFor,
}) => {
  return (
    <Listbox.Label htmlFor={htmlFor} className={styles.root}>
      {label}
    </Listbox.Label>
  );
};

export default SelectLabel;
