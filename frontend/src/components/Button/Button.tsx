import { FunctionComponent } from "react";
import { clsx } from "clsx";

import { ButtonProps } from "./Button.props";

import styles from "./Button.module.scss";

const Button: FunctionComponent<ButtonProps> = ({
  text,
  size = "md",
  variant = "primary",
  type = "button",
  loading = false,
  disabled = false,
  fullWidth,
  onClick,
}) => {
  return (
    <button
      // type={type}
      className={clsx(styles.root, styles[size], styles[variant], {
        [styles.full]: fullWidth,
      })}
      onClick={onClick}
      data-testid="button"
    >
      {text}
    </button>
  );
};

export default Button;
