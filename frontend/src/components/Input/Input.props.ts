import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

export interface InputProps {
  id?: string | undefined;
  name?: string | undefined;
  value: string;
  label?: string | undefined;
  type?: HTMLInputTypeAttribute | undefined;
  autoComplete?: string | undefined;
  required?: boolean | undefined;
  placeholder?: string | undefined;
  hint?: string | undefined;
  error?: string | undefined;
  valid?: boolean | undefined;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
