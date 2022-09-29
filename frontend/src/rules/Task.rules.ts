import Joi from "joi";
import { TaskMessages } from "messages";
import { ProjectTypes } from "types";

namespace TaskRules {
  export namespace Create {
    export const Content = Joi.string()
      .min(3)
      .max(32)
      .required()
      .messages(TaskMessages.Create.Content);
    export const Description = Joi.string()
      .min(3)
      .max(128)
      .required()
      .messages(TaskMessages.Create.Description);
    export const Project = Joi.object<ProjectTypes.Project>()
      .required()
      .messages(TaskMessages.Create.Project);
    export const ProjectId = Joi.string()
      .length(24)
      .required()
      .messages(TaskMessages.Create.ProjectId);
  }

  export namespace Update {
    export const Content = Joi.string()
      .min(3)
      .max(32)
      .messages(TaskMessages.Update.Content);
    export const Description = Joi.string()
      .min(3)
      .max(128)
      .messages(TaskMessages.Update.Description);
  }
}

export default TaskRules;
