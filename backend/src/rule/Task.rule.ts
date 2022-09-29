import Joi from "joi";

namespace TaskRule {
  export namespace Get {
    export const Id = Joi.string().length(24).required();
  }

  export namespace Create {
    export const Content = Joi.string().min(3).max(32).required();
    export const Description = Joi.string().min(3).max(128).required();
    export const ProjectId = Joi.string().length(24).required();
  }

  export namespace Update {
    export const Id = Joi.string().length(24).required();
    export const Content = Joi.string().min(3).max(32);
    export const Description = Joi.string().min(3).max(128);
    export const Completed = Joi.boolean();
  }

  export namespace Delete {
    export const Id = Joi.string().length(24).required();
  }
}

export default TaskRule;
