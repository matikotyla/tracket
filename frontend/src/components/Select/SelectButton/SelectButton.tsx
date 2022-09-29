import { FunctionComponent } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

import clsx from "clsx";

import { SelectButtonProps } from "./SelectButton.props";

import styles from "./SelectButton.module.scss";

const SelectButton: FunctionComponent<SelectButtonProps> = ({
  id,
  name,
  text,
  valid,
}) => {
  return (
    <Listbox.Button
      id={id}
      name={name}
      className={clsx(styles.root, valid ? styles.valid : styles.invalid)}
    >
      <span className={styles.text}>{text}</span>
      <span className={styles.box}>
        <ChevronUpDownIcon className={styles.icon} aria-hidden="true" />
      </span>
    </Listbox.Button>
  );
};

export default SelectButton;
