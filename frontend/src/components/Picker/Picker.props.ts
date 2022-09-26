import { StylesTypes } from "types";

export interface PickerProps {
  id?: string | undefined;
  name?: string | undefined;
  label?: string | undefined;
  hint?: string | undefined;
  value: StylesTypes.Color;
  error?: string | undefined;
  valid?: boolean | undefined;
  onChange: (value: StylesTypes.Color) => void;
}
