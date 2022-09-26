import { FunctionComponent } from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

import clsx from "clsx";

import { PickerItemProps } from "./PickerItem.props";

import styles from "./PickerItem.module.scss";

const PickerItem: FunctionComponent<PickerItemProps> = ({ color }) => {
  return (
    <Listbox.Option
      className={({ active }) =>
        clsx(styles.root, active ? styles.active : styles.inactive)
      }
      value={color}
    >
      {({ selected, active }) => (
        <>
          <div className={styles.content}>
            <span
              className={clsx(styles.dot, styles[`dot-${color}`])}
              aria-hidden="true"
            />
            <span
              className={clsx(
                styles.text,
                selected ? styles.selected : styles.unselected
              )}
            >
              {color}
            </span>
          </div>

          {selected ? (
            <span
              className={clsx(
                styles.mark,
                active ? styles.checked : styles.unchecked
              )}
            >
              <CheckIcon className={styles.icon} aria-hidden="true" />
            </span>
          ) : null}
        </>
      )}
    </Listbox.Option>
  );
};

export default PickerItem;
