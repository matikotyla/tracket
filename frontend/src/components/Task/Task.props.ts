import { StylesTypes } from "types";

export interface TaskProps {
  content: string;
  description: string;
  time: string;
  priority: string;
  tag: string;
  color: StylesTypes.Color;
  onUpdateClick: () => void;
  onDeleteClick: () => void;
}
