import Joi from "joi";

import { TaskRule } from "rule";
import { GlobalTypes } from "types";

namespace TaskSchema {
  export const Get = Joi.object<GlobalTypes.NexusGenArgTypes["Query"]["task"]>({
    id: TaskRule.Get.Id,
  });

  export const Create = Joi.object<
    GlobalTypes.NexusGenArgTypes["Mutation"]["createTask"]
  >({
    content: TaskRule.Create.Content,
    description: TaskRule.Create.Description,
    projectId: TaskRule.Create.ProjectId,
  });

  export const Update = Joi.object<
    GlobalTypes.NexusGenArgTypes["Mutation"]["updateTask"]
  >({
    id: TaskRule.Update.Id,
    content: TaskRule.Update.Content,
    description: TaskRule.Update.Description,
    completed: TaskRule.Update.Completed,
  });

  export const Delete = Joi.object<
    GlobalTypes.NexusGenArgTypes["Mutation"]["deleteTask"]
  >({
    id: TaskRule.Delete.Id,
  });
}

export default TaskSchema;
