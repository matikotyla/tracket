import Joi from "joi";

import { StylesData } from "data";
import { ProjectMessages } from "messages";

namespace ProjectRules {
  export namespace Create {
    export const Name = Joi.string()
      .min(3)
      .max(32)
      .required()
      .messages(ProjectMessages.Create.Name);
    export const Color = Joi.string()
      .valid(...StylesData.colors)
      .required()
      .messages(ProjectMessages.Create.Color);
  }

  export namespace Update {
    export const Name = Joi.string()
      .min(3)
      .max(32)
      .required()
      .messages(ProjectMessages.Update.Name);
    export const Color = Joi.string()
      .valid(...StylesData.colors)
      .required()
      .messages(ProjectMessages.Update.Color);
  }

  export namespace Edit {}
}

export default ProjectRules;
