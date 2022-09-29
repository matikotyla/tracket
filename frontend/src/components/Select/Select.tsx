import { Fragment, ReactElement } from "react";
import { Listbox, Transition } from "@headlessui/react";

import { SelectProps } from "./Select.props";

import SelectLabel from "./SelectLabel/SelectLabel";
import SelectButton from "./SelectButton/SelectButton";
import SelectHint from "./SelectHint/SelectHint";
import SelectError from "./SelectError/SelectError";

import styles from "./Select.module.scss";

const Select: <T>(props: SelectProps<T>) => ReactElement = ({
  id,
  name,
  value,
  label = "",
  text = "",
  hint = undefined,
  error = undefined,
  valid = true,
  onChange,
  children,
}) => {
  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <>
          <SelectLabel htmlFor={id} label={label} />
          <div className={styles.container}>
            <SelectButton id={id} name={name} text={text} valid={valid} />
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className={styles.list}>
                {children}
              </Listbox.Options>
            </Transition>
          </div>
          {error && <SelectError text={error} />}
          {hint && !error && <SelectHint text={hint} />}
        </>
      )}
    </Listbox>
  );
};

export default Select;
