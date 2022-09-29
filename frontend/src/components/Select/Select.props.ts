import { PropsWithChildren } from "react";

export interface SelectProps<T> extends PropsWithChildren {
  id?: string | undefined;
  name?: string | undefined;
  value: T;
  label?: string | undefined;
  text?: string;
  hint?: string | undefined;
  error?: string | undefined;
  valid?: boolean | undefined;
  onChange: (value: T) => void;
}
