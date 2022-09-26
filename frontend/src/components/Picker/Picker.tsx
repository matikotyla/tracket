import { Fragment, FunctionComponent } from "react";
import { Listbox, Transition } from "@headlessui/react";

import PickerLabel from "./PickerLabel/PickerLabel";
import PickerButton from "./PickerButton/PickerButton";
import PickerItem from "./PickerItem/PickerItem";

import { StylesData } from "data";

import { PickerProps } from "./Picker.props";

import styles from "./Picker.module.scss";

const Picker: FunctionComponent<PickerProps> = ({
  id,
  name,
  label = "",
  hint = undefined,
  value,
  valid = true,
  error = undefined,
  onChange,
}) => {
  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <>
          <PickerLabel htmlFor={id} label={label} />
          <div className={styles.container}>
            <PickerButton id={id} name={name} color={value} valid={valid} />
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className={styles.list}>
                {StylesData.colors.map((color) => (
                  <PickerItem key={color} color={color} />
                ))}
              </Listbox.Options>
            </Transition>
          </div>
          {error && <p className={styles.error}>{error}</p>}
          {hint && !error && <p className={styles.hint}>{hint}</p>}
        </>
      )}
    </Listbox>
  );
};

export default Picker;
