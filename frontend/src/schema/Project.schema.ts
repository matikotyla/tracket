import Joi from "joi";

import { ProjectRules } from "rules";
import { ProjectTypes } from "types";

namespace ProjectSchema {
  export namespace Create {
    export const Form = Joi.object<ProjectTypes.Create.Form>({
      name: ProjectRules.Create.Name,
      color: ProjectRules.Create.Color,
    });
  }

  export namespace Update {
    export const Form = Joi.object<ProjectTypes.Update.Form>({
      name: ProjectRules.Update.Name,
      color: ProjectRules.Update.Color,
    });
  }
}

export default ProjectSchema;
