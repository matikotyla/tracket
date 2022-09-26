import { MouseEventHandler } from "react";

import { ButtonTypes } from "types";

export interface ButtonProps {
  text: string;
  size?: ButtonTypes.Size;
  variant?: ButtonTypes.Variant;
  type?: "submit" | "reset" | "button";
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
