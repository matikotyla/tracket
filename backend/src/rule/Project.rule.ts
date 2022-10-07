import Joi from "joi";

import { ColorConstant } from "@constant";

namespace ProjectRule {
  export namespace Get {
    export const Id = Joi.string().length(24).required();
  }

  export namespace Create {
    export const Name = Joi.string().min(3).max(32).required();
    export const Color = Joi.string()
      .valid(...ColorConstant.Colors)
      .required();
  }

  export namespace Update {
    export const Id = Joi.string().length(24).required();
    export const Name = Joi.string().min(3).max(32);
    export const Color = Joi.string().valid(...ColorConstant.Colors);
  }

  export namespace Delete {
    export const Id = Joi.string().length(24).required();
  }
}

export default ProjectRule;
