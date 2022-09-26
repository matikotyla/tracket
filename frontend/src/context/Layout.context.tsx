import { LayoutTypes } from "types";
import { ContextUtils } from "utils";

export const [LayoutContext, LayoutProvider] =
  ContextUtils.initializeContext<LayoutTypes.State>({
    modal: null,
  });
