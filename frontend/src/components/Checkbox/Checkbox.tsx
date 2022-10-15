import { FunctionComponent } from "react";

import { CheckboxProps } from "./Checkbox.props";

import styles from "./Checkbox.module.scss";

const Checkbox: FunctionComponent<CheckboxProps> = ({
  id,
  name,
  checked,
  onChange,
  children,
  error = undefined,
}) => {
  return (
    <div className={styles.root} data-testid="checkbox">
      <div className={styles.content}>
        <input
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          type="checkbox"
          className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
        />
        <label htmlFor={name} className={styles.label}>
          {children}
        </label>
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Checkbox;
