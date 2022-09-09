import { FunctionComponent } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import clsx from "clsx";

import { InputProps } from "./Input.props";

import styles from "./Input.module.scss";

const Input: FunctionComponent<InputProps> = ({
  id,
  name,
  value,
  label = "",
  type = "text",
  autoComplete = undefined,
  required = false,
  placeholder = "",
  hint = undefined,
  error = undefined,
  valid = true,
  onChange,
}) => {
  return (
    <div className={styles.root} data-testid="input">
      <label data-testid="input-label" htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.container}>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          autoComplete={autoComplete}
          required={required}
          placeholder={placeholder}
          data-testid="input-field"
          className={clsx(
            "appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm",
            valid
              ? "border-gray-300 placeholder-gray-400 focus:ring-teal-500 focus:border-teal-500"
              : "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 pr-10"
          )}
          onChange={onChange}
        />
        {!valid && (
          <div className={styles.box}>
            <ExclamationCircleIcon
              data-testid="input-icon"
              className={styles.icon}
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {error && (
        <p data-testid="input-error" className={styles.error}>
          {error}
        </p>
      )}
      {hint && !error && <p className={styles.hint}>{hint}</p>}
    </div>
  );
};

export default Input;
