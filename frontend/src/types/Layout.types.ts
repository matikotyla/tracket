import ModalTypes from "./Modal.types";

namespace LaytoutTypes {
  export interface State {
    modal: ModalTypes.Content | null;
  }

  export interface Hook extends State {
    openModal: <T extends ModalTypes.Type>(
      modal: ModalTypes.Content<T>
    ) => void;
    closeModal: () => void;
  }
}
export default LaytoutTypes;
