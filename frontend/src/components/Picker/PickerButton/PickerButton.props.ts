import { StylesTypes } from "types";

export interface PickerButtonProps {
  id?: string | undefined;
  name?: string | undefined;
  color: StylesTypes.Color;
  valid?: boolean | undefined;
}
