import {
  Context,
  FunctionComponent,
  PropsWithChildren,
  useState,
  createContext,
} from "react";
import { ContextTypes } from "types";

namespace ContextUtils {
  export const initializeContext = <T,>(
    value: T
  ): [Context<ContextTypes.Type<T>>, FunctionComponent<PropsWithChildren>] => {
    const context = createContext<ContextTypes.Type<T>>({
      state: value,
      setState: () => value,
    });

    const Provider: FunctionComponent<PropsWithChildren> = ({ children }) => {
      const [state, setState] = useState<T>(value);

      return (
        <context.Provider
          value={{
            state,
            setState,
          }}
        >
          {children}
        </context.Provider>
      );
    };

    return [context, Provider];
  };
}

export default ContextUtils;
