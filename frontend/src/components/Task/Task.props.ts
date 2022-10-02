import { StylesTypes } from "types";

export interface TaskProps {
  content: string;
  description: string;
  time: string;
  priority: string;
  tag: string;
  color: StylesTypes.Color;
  value: boolean;
  disabled?: boolean;
  onUpdateClick: () => void;
  onDeleteClick: () => void;
  onCheckboxClick: () => void;
}
