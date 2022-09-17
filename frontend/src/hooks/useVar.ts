import { useReactiveVar, ReactiveVar } from "@apollo/client";
import { useEffect, useRef } from "react";

const useVar = <T>(
  reactiveVariable: ReactiveVar<T>
): [T, (lambda: (prev: T) => T) => T] => {
  const variable = useReactiveVar(reactiveVariable);
  const previousVariable = useRef<T>(variable);

  const setVariable = (lambda: (prev: T) => T): T => {
    return reactiveVariable(lambda(previousVariable.current));
  };

  useEffect(() => {
    previousVariable.current = variable;
  }, [variable]);

  return [variable, setVariable];
};

export default useVar;
