import { makeVar } from "@apollo/client";
import { TaskTypes } from "types";

namespace TaskVariables {
  export const state = makeVar<TaskTypes.State>({
    tasks: [],
  });
}

export default TaskVariables;
