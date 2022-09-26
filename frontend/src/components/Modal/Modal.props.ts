import { FunctionComponent } from "react";

import { ModalTypes } from "types";

export interface ModalProps {
  type: ModalTypes.Type;
  content: FunctionComponent<ModalTypes.Props<ModalTypes.Type>>;
}
