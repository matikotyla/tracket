import { makeVar } from "@apollo/client";
import { ProjectTypes } from "types";

namespace ProjectVariables {
  export const state = makeVar<ProjectTypes.State>({
    loading: false,
    projects: [],
  });
}

export default ProjectVariables;
