import { useContext } from "react";

import { LayoutContext } from "context";
import { LayoutTypes, ModalTypes } from "types";

const useLayout = (): LayoutTypes.Hook => {
  const { state, setState } = useContext(LayoutContext);

  const openModal = <T extends ModalTypes.Type>(modal: ModalTypes.Content<T>) =>
    setState((state) => ({ ...state, modal }));
  const closeModal = () => setState((state) => ({ ...state, modal: null }));

  return {
    modal: state.modal,
    openModal,
    closeModal,
  };
};

export default useLayout;
