import Joi from "joi";

import { ProjectRule } from "@rule";
import { GlobalTypes } from "@types";

namespace ProjectSchema {
  export const Get = Joi.object<
    GlobalTypes.NexusGenArgTypes["Query"]["project"]
  >({
    id: ProjectRule.Get.Id,
  });

  export const Create = Joi.object<
    GlobalTypes.NexusGenArgTypes["Mutation"]["createProject"]
  >({
    name: ProjectRule.Create.Name,
    color: ProjectRule.Create.Color,
  });

  export const Update = Joi.object<
    GlobalTypes.NexusGenArgTypes["Mutation"]["updateProject"]
  >({
    id: ProjectRule.Update.Id,
    name: ProjectRule.Update.Name,
    color: ProjectRule.Update.Color,
  });

  export const Delete = Joi.object<
    GlobalTypes.NexusGenArgTypes["Mutation"]["deleteProject"]
  >({
    id: ProjectRule.Delete.Id,
  });
}

export default ProjectSchema;
