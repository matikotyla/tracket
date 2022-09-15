import { Dispatch, SetStateAction } from "react";

namespace ContextTypes {
  export interface Type<T> {
    state: T;
    setState: Dispatch<SetStateAction<T>>;
  }
}

export default ContextTypes;
