import { ChangeEventHandler, PropsWithChildren } from "react";

export interface CheckboxProps extends PropsWithChildren {
  id?: string | undefined;
  name?: string | undefined;
  checked: boolean;
  error?: string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
