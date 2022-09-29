import { PropsWithChildren } from "react";

export interface SelectOptionProps<T> extends PropsWithChildren {
  value: T;
  selected: boolean;
}
