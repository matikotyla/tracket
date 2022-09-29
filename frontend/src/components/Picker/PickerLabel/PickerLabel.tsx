import { FunctionComponent } from "react";
import { Listbox } from "@headlessui/react";

import { PickerLabelProps } from "./PickerLabel.props";

import styles from "./PickerLabel.module.scss";

const PickerLabel: FunctionComponent<PickerLabelProps> = ({
  label,
  htmlFor,
}) => {
  return (
    <Listbox.Label htmlFor={htmlFor} className={styles.root}>
      {label}
    </Listbox.Label>
  );
};

export default PickerLabel;
