import { MouseEventHandler } from "react";

import { ButtonSize, ButtonVariant } from "types/Button.types";

export interface ButtonProps {
  text: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  type?: "submit" | "reset" | "button";
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
