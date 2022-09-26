import { FunctionComponent } from "react";

import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { PickerButtonProps } from "./PickerButton.props";

import styles from "./PickerButton.module.scss";

import clsx from "clsx";

const PickerButton: FunctionComponent<PickerButtonProps> = ({
  id,
  name,
  color,
  valid,
}) => {
  return (
    <Listbox.Button
      id={id}
      name={name}
      className={clsx(styles.root, valid ? styles.valid : styles.invalid)}
    >
      <span className={styles.content}>
        <span className={clsx(styles.dot, styles[`dot-${color}`])} />
        <span className={styles.text}>{color}</span>
      </span>
      <span className={styles.box}>
        <ChevronUpDownIcon className={styles.icon} />
      </span>
    </Listbox.Button>
  );
};

export default PickerButton;
